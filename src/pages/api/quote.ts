import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';
import { buildQuoteConfirmation } from '../../lib/email/quote-confirmation';

export const prerender = false;

const allowedCustomerTypes = new Set(['Home', 'Rental property', 'Business premises', 'Other']);
const allowedServices = new Set(['Electrical', 'Plumbing', 'Both electrical and plumbing', 'Not sure yet']);
const allowedUrgencies = new Set(['Planning ahead', 'Within the next few weeks', 'As soon as possible']);
const allowedContactMethods = new Set(['Email', 'Phone', 'Either']);

const attempts = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

const json = (body: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  });

const textField = (data: FormData, name: string) => {
  const value = data.get(name);
  return typeof value === 'string' ? value.trim() : '';
};

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const clientAddress = (request: Request) =>
  request.headers.get('cf-connecting-ip') ??
  request.headers.get('x-real-ip') ??
  request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
  'unknown';

const isRateLimited = (address: string) => {
  const now = Date.now();
  const recent = (attempts.get(address) ?? []).filter((time) => now - time < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  attempts.set(address, recent);
  return recent.length > RATE_LIMIT_MAX;
};

export const POST: APIRoute = async ({ request }) => {
  const requestOrigin = request.headers.get('origin');
  const expectedOrigin = new URL(request.url).origin;

  if (!requestOrigin || requestOrigin !== expectedOrigin) {
    return json({ error: 'This request could not be verified.' }, 403);
  }

  if (isRateLimited(clientAddress(request))) {
    return json({ error: 'Too many requests. Please wait a few minutes and try again.' }, 429);
  }

  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return json({ error: 'The submitted form could not be read.' }, 400);
  }

  // Silently accept bot submissions caught by the honeypot.
  if (textField(data, '_gotcha')) return json({ ok: true });

  const name = textField(data, 'name');
  const email = textField(data, 'email');
  const phone = textField(data, 'phone');
  const locality = textField(data, 'locality');
  const customerType = textField(data, 'customer_type');
  const service = textField(data, 'service');
  const urgency = textField(data, 'urgency');
  const preferredContact = textField(data, 'preferred_contact');
  const description = textField(data, 'description');
  const consent = textField(data, 'privacy_consent');

  const valid =
    name.length >= 2 && name.length <= 80 &&
    email.length <= 254 && isEmail(email) &&
    phone.length >= 5 && phone.length <= 40 &&
    locality.length >= 2 && locality.length <= 80 &&
    allowedCustomerTypes.has(customerType) &&
    allowedServices.has(service) &&
    allowedUrgencies.has(urgency) &&
    allowedContactMethods.has(preferredContact) &&
    description.length >= 20 && description.length <= 3000 &&
    consent === 'yes';

  if (!valid) {
    return json({ error: 'Please check the form details and try again.' }, 422);
  }

  const smtpUser = import.meta.env.YAHOO_SMTP_USER?.trim();
  const smtpPassword = import.meta.env.YAHOO_SMTP_APP_PASSWORD?.replace(/\s/g, '');

  if (!smtpUser || !smtpPassword) {
    return json({ error: 'Email delivery is temporarily unavailable. Please contact Aqualux directly.' }, 503);
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.mail.yahoo.com',
    port: 465,
    secure: true,
    auth: {
      user: smtpUser,
      pass: smtpPassword,
    },
  });

  const requestSummary = [
    'A new quotation request was submitted through the Aqualux website.',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Locality: ${locality}`,
    `Property type: ${customerType}`,
    `Service needed: ${service}`,
    `When help is needed: ${urgency}`,
    `Preferred contact: ${preferredContact}`,
    '',
    'Work description:',
    description,
  ].join('\n');

  const confirmation = buildQuoteConfirmation({ name, preferredContact });

  try {
    await transporter.verify();
  } catch (error) {
    console.error('Yahoo SMTP verification failed:', error);
    transporter.close();
    return json({ error: 'We could not send your request. Please try again or contact Aqualux directly.' }, 502);
  }

  try {
    await transporter.sendMail({
      from: { name: 'Aqualux Website', address: smtpUser },
      to: smtpUser,
      subject: `New Aqualux quote request from ${name} - ${service}`,
      text: requestSummary,
    });
  } catch (error) {
    console.error('Aqualux quote notification failed:', error);
    transporter.close();
    return json({ error: 'We could not send your request. Please try again or contact Aqualux directly.' }, 502);
  }

  let confirmationSent = true;

  try {
    await transporter.sendMail({
      from: { name: 'Aqualux', address: smtpUser },
      to: email,
      replyTo: smtpUser,
      subject: 'We received your quotation request',
      text: confirmation.text,
      html: confirmation.html,
      attachments: confirmation.attachments,
    });
  } catch (error) {
    confirmationSent = false;
    console.error('Customer quote confirmation failed:', error);
  } finally {
    transporter.close();
  }

  return json({ ok: true, confirmationSent });
};
