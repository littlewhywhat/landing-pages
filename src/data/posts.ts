export type BlogPost = {
  slug: string;
  title: string;
  publishedAt: string;
  excerpt: string;
  readingTime: string;
  content: string[];
};

export const posts: BlogPost[] = [
  {
    slug: 'weaving-ai-into-everyday-workflows',
    title: 'Weaving AI into Everyday Workflows',
    publishedAt: 'May 11, 2024',
    readingTime: '4 min read',
    excerpt:
      'How we evaluate new opportunities for Toolz experiments and bring AI assistance into focused, repeatable tasks.',
    content: [
      'At Toolz, every concept sprint starts with an anchor workflow. We shadow operators, map their stack, and identify the micro-frictions that quietly erode momentum.',
      'SideThreadGPT emerged from observing researchers who constantly open new tabs to consult their assistant. By embedding contextual chat directly into discussion threads, we compress that hop and help them stay focused on their collaborators.',
      'As we explore new surfaces—mobile, desktop, browser—we keep the same bar: reduce toggles, automate the repetitive, and preserve the human decisions in the loop.'
    ],
  },
  {
    slug: 'designing-for-flow-in-productivity-tools',
    title: 'Designing for Flow in Productivity Tools',
    publishedAt: 'April 28, 2024',
    readingTime: '6 min read',
    excerpt:
      'Principles we lean on when crafting Toolz interfaces that fade into the background and support deep focus.',
    content: [
      'Interfaces built for flow respect attention. For Toolz products that means fewer modals, calm visuals, and copy that explains “why” before “how.”',
      'We prototype interactions in the same environments our users live in—Slack channels, Chrome, iOS springboards—to feel the real friction.',
      'Coming soon: a deeper dive into our motion and accessibility checklist that every launch must clear before it leaves the studio.'
    ],
  },
];
