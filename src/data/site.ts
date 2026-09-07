export type IconName =
  | 'arrow'
  | 'bolt'
  | 'building'
  | 'calendar'
  | 'check'
  | 'clock'
  | 'droplet'
  | 'facebook'
  | 'home'
  | 'mail'
  | 'map'
  | 'phone'
  | 'pipe'
  | 'shield'
  | 'spark'
  | 'star';

export interface Service {
  title: string;
  description: string;
  icon: IconName;
  items: string[];
}

export interface Project {
  title: string;
  category: string;
  summary: string;
  result: string;
  demo: true;
  beforeImage?: string;
  afterImage?: string;
}

export interface Review {
  quote: string;
  name: string;
  context: string;
  rating: 5;
  demo: true;
}

export const business = {
  name: 'Aqualux',
  strapline: 'Water flows. Power works. Life carries on.',
  phoneDisplay: '7740 9959',
  phoneHref: '+35677409959',
  whatsappUrl: 'https://wa.me/35677409959',
  email: 'aqualux1@ymail.com',
  facebookUrl: 'https://www.facebook.com/profile.php?id=61565164504310',
  facebookReviewsUrl: 'https://www.facebook.com/profile.php?id=61565164504310&sk=reviews',
  serviceArea: 'Malta and Gozo',
  description:
    'Dependable electrical and plumbing services for homes, landlords and local businesses.',
  verifiedForStructuredData: false,
} as const;

export const navigation = [
  { label: 'Home', href: '/#home' },
  { label: 'Services', href: '/#services' },
  { label: 'Our work', href: '/#work' },
  { label: 'FAQs', href: '/#faqs' },
  { label: 'Contact', href: '/#contact' },
] as const;

export const services: Service[] = [
  {
    title: 'Electrical services',
    description:
      'Careful fault-finding, upgrades and installations designed around your property and priorities.',
    icon: 'bolt',
    items: [
      'Fault finding and repairs',
      'Sockets, switches and lighting',
      'Consumer unit upgrades',
      'Rewiring and new installations',
      'Safety inspections and testing',
      'Commercial maintenance',
    ],
  },
  {
    title: 'Plumbing services',
    description:
      'Practical plumbing help, from persistent leaks to new fixtures and planned improvements.',
    icon: 'droplet',
    items: [
      'Leak detection and repair',
      'Taps, toilets and fixtures',
      'Pipework repairs and upgrades',
      'Kitchen and bathroom plumbing',
      'Water pressure troubleshooting',
      'Commercial maintenance',
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'Kitchen lighting refresh',
    category: 'Electrical · Residential',
    summary:
      'Replace this copy with the real brief, constraints and work completed for an Aqualux customer.',
    result: 'Add the measurable or practical outcome once the project is verified.',
    demo: true,
  },
  {
    title: 'Pipework repair',
    category: 'Plumbing · Residential',
    summary:
      'Use this space to explain the original problem and how the genuine repair was approached.',
    result: 'Add the confirmed result and customer-approved project details here.',
    demo: true,
  },
  {
    title: 'Workspace upgrade',
    category: 'Electrical & plumbing · Commercial',
    summary:
      'Replace with an approved commercial case study, including the scope and site requirements.',
    result: 'Add the verified business outcome after the work is complete.',
    demo: true,
  },
];

export const reviews: Review[] = [
  {
    quote:
      'Replace this with a genuine customer review and obtain permission before publishing it.',
    name: 'Customer name',
    context: 'Service and area',
    rating: 5,
    demo: true,
  },
  {
    quote:
      'This placeholder shows the intended review length, tone and visual treatment.',
    name: 'Customer name',
    context: 'Service and area',
    rating: 5,
    demo: true,
  },
  {
    quote:
      'Add a verified testimonial here when Aqualux has approved customer feedback to share.',
    name: 'Customer name',
    context: 'Service and area',
    rating: 5,
    demo: true,
  },
];

export const faqs = [
  {
    question: 'Do you handle both electrical and plumbing work?',
    answer:
      'Yes. Aqualux is presented as a single point of contact for both trades. The exact services offered should be confirmed before launch.',
  },
  {
    question: 'Do you work with homes and businesses?',
    answer:
      'Yes. The website covers homeowners, landlords and light-commercial customers. Share a few details in the quote form so the right work can be discussed.',
  },
  {
    question: 'How does the quote process work?',
    answer:
      'Send the job details through the quote form. Aqualux can then clarify the scope, arrange a visit where needed and provide an appropriate quotation.',
  },
  {
    question: 'Which areas do you cover?',
    answer:
      'Aqualux serves customers throughout Malta and Gozo. Share your locality in the quote form along with a few details about the work you need.',
  },
  {
    question: 'What information helps with a quote?',
    answer:
      'Include the property type, the issue or planned work, your area, preferred contact method and any useful access or timing details.',
  },
] as const;

export const processSteps = [
  {
    number: '01',
    title: 'Tell us what you need',
    text: 'Share the property type, service and a short description of the job.',
  },
  {
    number: '02',
    title: 'We clarify the scope',
    text: 'We discuss the details and arrange a site visit when the work needs one.',
  },
  {
    number: '03',
    title: 'Receive your quote',
    text: 'You receive the agreed scope and quotation before work is scheduled.',
  },
] as const;
