export type ProductStatus = 'available' | 'coming_soon';
export type ProductCategory = 'Extension' | 'Mobile' | 'Web';

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  blurb: string;
  status: ProductStatus;
  category: ProductCategory;
  cta?: { label: string; href: string; kind?: 'primary' | 'secondary' }[];
  screenshots?: { src: string; alt: string }[];
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
    ogImage?: string;
  };
  overview?: string[];
  features?: { title: string; description: string }[];
  faqs?: { q: string; a: string }[];
};

export const products: Product[] = [
  {
    slug: 'sidethreadgpt',
    name: 'SideThreadGPT',
    tagline: 'ChatGPT Branching in a Sidebar',
    blurb: 'Spin off side questions without losing your main chat.',
    status: 'available',
    category: 'Extension',
    cta: [
      {
        label: 'Add to Chrome',
        href: 'https://chromewebstore.google.com/detail/nalaloobnoeiiggamcdbiofjkdkdpjjm',
        kind: 'primary'
      }
    ],
    screenshots: [
      { src: '/screenshots/sidethreadgpt/01.svg', alt: 'Sidebar opened next to a chat' },
      { src: '/screenshots/sidethreadgpt/02.svg', alt: 'Branching a message into a side thread' },
      { src: '/screenshots/sidethreadgpt/03.svg', alt: 'Pinned side threads reopened' },
      { src: '/screenshots/sidethreadgpt/04.svg', alt: 'Organized view of side threads' }
    ],
    seo: {
      title: 'SideThreadGPT – ChatGPT Branching in a Sidebar',
      description:
        'Add a sidebar for ChatGPT branching. Spin off side questions without losing your main chat, reopen branches pinned to messages. Free, no signup.',
      keywords: ['ChatGPT', 'Chrome extension', 'sidebar', 'branching', 'side threads']
    },
    overview: [
      'ChatGPT recently introduced branching (“Branch in a new chat”), but the experience is clunky — every branch opens a completely new chat, forcing you to lose track of the main conversation.',
      'SideThread fixes this. It adds a sidebar for ChatGPT branching, so you can spin off side questions without breaking your flow.',
      'Whether you’re learning, coding, planning a trip, or writing, SideThread makes ChatGPT branching simple, organized, and natural.'
    ],
    features: [
      {
        title: '✅ Branch in a sidebar',
        description: 'Open side threads directly from any ChatGPT message.'
      },
      {
        title: '✅ Stay in flow',
        description: 'No more losing your main conversation when branching a chat.'
      },
      {
        title: '✅ Reopen anytime',
        description: 'Easily revisit side threads, pinned to the original message.'
      },
      {
        title: '✅ Organized workflow',
        description: 'Keep main chat on track while exploring tangents in parallel.'
      }
    ]
  },
  {
    slug: 'flowtimer',
    name: 'FlowTimer',
    tagline: 'Timeboxing that respects your attention',
    blurb: 'Lightweight timer for deep work.',
    status: 'coming_soon',
    category: 'Mobile'
  },
  {
    slug: 'clipstash',
    name: 'ClipStash',
    tagline: 'Keyboard-first snippets',
    blurb: 'Your cross-device clipboard & snippet vault.',
    status: 'coming_soon',
    category: 'Web'
  }
];
