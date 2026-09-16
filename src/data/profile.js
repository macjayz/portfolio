// Personal details and projects shown across the site (from the CV).
export const profile = {
  name: 'Mangai Machen John',
  role: 'Software Engineer',
  location: 'Abuja, Nigeria',
  email: 'macjayz90s@gmail.com',
  phone: '+234 903 738 3530',
  github: 'https://github.com/macjayz',
  linkedin: 'https://www.linkedin.com/in/jayces-john-246b50431',
};

export const projectCategories = [
  { id: 'products', anchor: 'brown', label: 'Products' },
  { id: 'backend', anchor: 'dark', label: 'Backend' },
  { id: 'web3', anchor: 'vintage', label: 'Web3 & Data' },
];

export const projects = [
  {
    category: 'products',
    title: 'InkKrystal',
    image: '/assets/images/projects/inkkrystal.jpg',
    link: { label: 'Visit ↗', href: 'https://inkkrystal.com' },
    description:
      'Production website and iOS/Android reading app for a fiction publisher: book discovery, reading, author onboarding and manuscript submission, plus writer, editor and admin workflows for contracts, royalties and subscriptions. React · TypeScript · Supabase · Sanity · Capacitor',
  },
  {
    category: 'products',
    title: 'Production Web Platforms',
    image: '/assets/images/projects/platforms.jpg',
    link: { label: 'Client work' },
    description:
      'Client and internal applications combining dashboards, authentication, APIs, database workflows and third-party integrations, built, hosted, monitored and maintained end to end. Node.js · Laravel · React · PostgreSQL · AWS',
  },
  {
    category: 'backend',
    title: 'Badge Verification',
    image: '/assets/images/projects/badge-verification.jpg',
    link: { label: 'GitHub ↗', href: 'https://github.com/macjayz/badge-verification' },
    description:
      'Credentialing system for communities and DAOs with rule-based badge eligibility, Twitter/Discord OAuth, SIWE authentication, Polygon ID/idOS adapters, Snapshot vote checks and WebSocket-powered dashboards. Node.js · TypeScript · PostgreSQL · Redis · Docker',
  },
  {
    category: 'web3',
    title: 'Xeinon',
    image: '/assets/images/projects/xeinon.jpg',
    link: { label: 'GitHub ↗', href: 'https://github.com/macjayz/xeinon' },
    description:
      'Real-time Base token discovery platform that detects, indexes, classifies and tracks new tokens from creation through market activity, enriched with pricing and liquidity data. React · TypeScript · Supabase · viem · WebSockets',
  },
  {
    category: 'web3',
    title: 'Heightproof',
    image: '/assets/images/projects/heightproof.jpg',
    link: { label: 'GitHub ↗', href: 'https://github.com/macjayz/sentinel' },
    description:
      'Self-hosted observability for EVM JSON-RPC traffic that catches the failures hiding behind 200 OK: stale chain heads, cross-provider disagreement at the same block height, silent nulls, reorg lag, throttling and wasted compute. TypeScript · viem · Redis Streams · PostgreSQL · Docker',
  },
];
