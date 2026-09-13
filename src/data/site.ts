import type { ImageMetadata } from 'astro';
import electricalOutdoorLighting from '../assets/work/electrical-outdoor-lighting.jpg';
import plumbingDistributionSystem from '../assets/work/plumbing-distribution-system.jpeg';
import plumbingRooftopWaterStorage from '../assets/work/plumbing-rooftop-water-storage.jpg';

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
  detail: string;
  image: ImageMetadata;
  imageAlt: string;
  imagePosition?: string;
}

export interface Review {
  quote: string;
  name: string;
  context: string;
  recommended: true;
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
      'Commercial and domestic maintenance and installations',
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
      'Commercial and domestic maintenance and installations',
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'Multi-point plumbing installation',
    category: 'Plumbing · Distribution systems',
    summary:
      'An extensive wall-mounted network of neatly routed pipework, valves and individual metering points.',
    detail:
      'Visible meters, isolation valves and grouped runs keep the installation clear and accessible.',
    image: plumbingDistributionSystem,
    imageAlt:
      'Large wall-mounted plumbing installation with organised pipe runs, meters and isolation valves',
    imagePosition: 'center',
  },
  {
    title: 'Rooftop water storage system',
    category: 'Plumbing · Water systems',
    summary:
      'Four roof-mounted water tanks connected through orderly supply pipework and individual valves.',
    detail:
      'The grouped layout keeps tank connections visible and provides straightforward access for inspection.',
    image: plumbingRooftopWaterStorage,
    imageAlt:
      'Four rooftop water storage tanks connected with visible white pipework and isolation valves',
    imagePosition: 'center 43%',
  },
  {
    title: 'Outdoor pool lighting',
    category: 'Electrical · Exterior lighting',
    summary:
      'Exterior lighting arranged around a pool area for visibility and atmosphere after dark.',
    detail:
      'Bright perimeter lighting is complemented by warm accents across the surrounding stonework.',
    image: electricalOutdoorLighting,
    imageAlt:
      'Illuminated outdoor pool area at night with perimeter floodlights and warm stone-wall lighting',
    imagePosition: 'center',
  },
];

export const reviews: Review[] = [
  {
    quote: 'Smart and efficient.',
    name: 'James Mallia',
    context: 'Facebook recommendation',
    recommended: true,
  },
  {
    quote: 'Professional, efficient.',
    name: 'James Galea',
    context: 'Facebook recommendation',
    recommended: true,
  },
  {
    quote: 'Amazing and efficient service.',
    name: 'Antonia Taliana',
    context: 'Facebook recommendation',
    recommended: true,
  },
  {
    quote: 'Professional service.',
    name: 'Malcolm Zammit',
    context: 'Facebook recommendation',
    recommended: true,
  },
  {
    quote: 'Excellent service.',
    name: 'Charmaine Farrugia',
    context: 'Facebook recommendation',
    recommended: true,
  },
  {
    quote: 'Recommended.',
    name: 'Joseph Bugelli',
    context: 'Facebook recommendation',
    recommended: true,
  },
  {
    quote: '100% recommended.',
    name: 'Isaac Cefai',
    context: 'Facebook recommendation',
    recommended: true,
  },
  {
    quote: 'Top of my list!',
    name: 'Mark Borg Mangion',
    context: 'Facebook recommendation',
    recommended: true,
  },
  {
    quote: 'Nothing but words of praise.',
    name: 'Joel Chan',
    context: 'Facebook recommendation',
    recommended: true,
  },
];

export const faqs = [
  {
    question: 'Do you handle both electrical and plumbing work?',
    answer:
      'Yes. Aqualux provides both electrical and plumbing services, giving homes, landlords and businesses one dependable point of contact for both trades.',
  },
  {
    question: 'Do you work with homes and businesses?',
    answer:
      'Yes. Aqualux works with homeowners, landlords and local businesses. Share a few details in the quote form so the right work can be discussed.',
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
