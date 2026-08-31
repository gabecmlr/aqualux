import logoDataUri from '../../assets/logo_aqualux_primary_20260830_full-color.png?inline';
import { business } from '../../data/site';

interface QuoteConfirmationOptions {
  name: string;
  preferredContact: string;
}

const escapeHtml = (value: string) => value.replace(/[&<>'"]/g, (character) => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  "'": '&#39;',
  '"': '&quot;',
})[character] ?? character);

export const buildQuoteConfirmation = ({ name, preferredContact }: QuoteConfirmationOptions) => {
  const safeName = escapeHtml(name);
  const safePreferredContact = escapeHtml(preferredContact.toLowerCase());
  const replySubject = encodeURIComponent('Additional details for my Aqualux quote request');

  const text = [
    'AUTOMATED CONFIRMATION',
    '',
    `Hello ${name},`,
    '',
    'Thank you for contacting Aqualux. Your quotation request has reached our team and we will review the details you provided.',
    '',
    `We will contact you using your preferred contact method (${preferredContact.toLowerCase()}) as soon as possible.`,
    '',
    'This is an automated confirmation email, but replies are monitored. Reply directly to this message to add any questions, concerns, photos, access notes or other useful details. Your reply will go straight to Aqualux.',
    '',
    'If you did not submit this request, you can ignore this email.',
    '',
    business.name,
    'Electrical & Plumbing Services',
    `Phone: ${business.phoneDisplay}`,
    `Email: ${business.email}`,
  ].join('\n');

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="x-apple-disable-message-reformatting">
    <title>We received your quotation request</title>
    <style>
      @media only screen and (max-width: 640px) {
        .email-shell { width: 100% !important; }
        .email-padding { padding-left: 24px !important; padding-right: 24px !important; }
        .email-heading { font-size: 30px !important; line-height: 36px !important; }
        .logo-image { width: 190px !important; height: auto !important; }
      }
    </style>
  </head>
  <body style="background-color:#eef1f4; margin:0; padding:0; width:100%;">
    <div style="display:none; font-size:1px; color:#eef1f4; line-height:1px; max-height:0; max-width:0; opacity:0; overflow:hidden;">
      Automated confirmation: your request is with Aqualux. Reply anytime to add more details.
    </div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#eef1f4; border-collapse:collapse;">
      <tr>
        <td align="center" style="padding:32px 12px;">
          <table class="email-shell" role="presentation" width="640" cellspacing="0" cellpadding="0" border="0" style="background-color:#ffffff; border-collapse:separate; border-radius:20px; box-shadow:0 16px 48px rgba(7,27,53,0.12); max-width:640px; overflow:hidden; width:640px;">
            <tr>
              <td style="background-color:#ed1b32; font-size:0; height:5px; line-height:5px;">&nbsp;</td>
            </tr>
            <tr>
              <td class="email-padding" style="background-color:#071b35; padding:28px 44px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:collapse;">
                  <tr>
                    <td align="center" style="background-color:#ffffff; border-radius:14px; padding:12px 24px;">
                      <img class="logo-image" src="cid:aqualux-logo" width="220" alt="Aqualux" style="border:0; display:block; height:auto; margin:0 auto; max-width:220px; width:220px;">
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td class="email-padding" style="padding:44px 48px 18px;">
                <p style="color:#b40d21; font-family:Aptos, 'Segoe UI', Arial, sans-serif; font-size:12px; font-weight:700; letter-spacing:1.8px; line-height:18px; margin:0 0 12px; text-transform:uppercase;">Automated confirmation</p>
                <h1 class="email-heading" style="color:#030912; font-family:'Aptos Display', Aptos, 'Segoe UI', Arial, sans-serif; font-size:38px; font-weight:700; letter-spacing:-0.8px; line-height:44px; margin:0 0 22px;">We&rsquo;ve received your request.</h1>
                <p style="color:#102d3c; font-family:Aptos, 'Segoe UI', Arial, sans-serif; font-size:17px; line-height:28px; margin:0 0 14px;">Hello ${safeName},</p>
                <p style="color:#506975; font-family:Aptos, 'Segoe UI', Arial, sans-serif; font-size:16px; line-height:26px; margin:0;">Thank you for contacting Aqualux. Your quotation request has reached our team, and we&rsquo;ll review the details you provided.</p>
              </td>
            </tr>
            <tr>
              <td class="email-padding" style="padding:18px 48px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#fff0f2; border-collapse:separate; border-left:4px solid #ed1b32; border-radius:12px;">
                  <tr>
                    <td style="padding:20px 22px;">
                      <p style="color:#071b35; font-family:Aptos, 'Segoe UI', Arial, sans-serif; font-size:16px; font-weight:700; line-height:24px; margin:0 0 5px;">Your request is safely with Aqualux.</p>
                      <p style="color:#506975; font-family:Aptos, 'Segoe UI', Arial, sans-serif; font-size:15px; line-height:24px; margin:0;">We&rsquo;ll contact you by ${safePreferredContact} as soon as possible.</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td class="email-padding" style="padding:18px 48px 46px;">
                <h2 style="color:#071b35; font-family:'Aptos Display', Aptos, 'Segoe UI', Arial, sans-serif; font-size:22px; font-weight:700; line-height:29px; margin:0 0 10px;">Want to add anything?</h2>
                <p style="color:#506975; font-family:Aptos, 'Segoe UI', Arial, sans-serif; font-size:16px; line-height:26px; margin:0 0 22px;">This is an automated confirmation email, but replies are monitored. Reply directly with any additional questions, concerns, photos, access notes or other useful details. Your reply will go straight to Aqualux.</p>
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="border-collapse:separate;">
                  <tr>
                    <td style="background-color:#ed1b32; border-radius:9px;">
                      <a href="mailto:${business.email}?subject=${replySubject}" style="color:#ffffff; display:inline-block; font-family:Aptos, 'Segoe UI', Arial, sans-serif; font-size:15px; font-weight:700; line-height:20px; padding:13px 20px; text-decoration:none;">Reply with more details</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td class="email-padding" style="background-color:#071b35; padding:28px 48px;">
                <p style="color:#ffffff; font-family:Aptos, 'Segoe UI', Arial, sans-serif; font-size:15px; font-weight:700; line-height:22px; margin:0 0 6px;">Aqualux &middot; Electrical &amp; Plumbing Services</p>
                <p style="color:#bdcbd0; font-family:Aptos, 'Segoe UI', Arial, sans-serif; font-size:14px; line-height:23px; margin:0;">
                  <a href="tel:${business.phoneHref}" style="color:#ffffff; text-decoration:none;">${business.phoneDisplay}</a>
                  &nbsp;&middot;&nbsp;
                  <a href="mailto:${business.email}" style="color:#ffffff; text-decoration:none;">${business.email}</a>
                  <br>${business.serviceArea}
                </p>
                <p style="color:#91a4ae; font-family:Aptos, 'Segoe UI', Arial, sans-serif; font-size:12px; line-height:19px; margin:18px 0 0;">This automated email confirms receipt of a request submitted through the Aqualux website.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  return {
    text,
    html,
    attachments: [{
      filename: 'aqualux-logo.png',
      path: logoDataUri,
      cid: 'aqualux-logo',
      contentType: 'image/png',
      contentDisposition: 'inline' as const,
    }],
  };
};
