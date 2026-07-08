/** SEO and Open Graph meta tag utilities for KundaliAI */

export interface MetaTags {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}

export const DEFAULT_META: MetaTags = {
  title: 'KundaliAI â€” Free Vedic Astrology Birth Chart Generator',
  description: 'Generate your personalized Vedic astrology birth chart (Kundali) with AI-powered interpretations. Get insights on personality, career, relationships, and life path.',
  keywords: [
    'kundali', 'vedic astrology', 'birth chart', 'jyotish', 'horoscope',
    'AI astrology', 'free kundali', 'janma kundali', 'natal chart', 'rashi',
  ],
  ogImage: '/og-image.png',
};

export const PAGE_METAS: Record<string, MetaTags> = {
  home: DEFAULT_META,
  privacy: {
    title: 'Privacy Policy | KundaliAI',
    description: 'Read how KundaliAI collects, uses, and protects your personal information.',
  },
  terms: {
    title: 'Terms of Service | KundaliAI',
    description: 'Review the terms and conditions for using the KundaliAI platform.',
  },
  refund: {
    title: 'Refund Policy | KundaliAI',
    description: 'Understand our refund and cancellation policy for KundaliAI premium features.',
  },
};

/**
 * Generate a page title with the app name suffix.
 */
export function buildPageTitle(pageTitle: string): string {
  if (pageTitle === DEFAULT_META.title) return pageTitle;
  return `${pageTitle} | KundaliAI`;
}

/**
 * Generate structured data (JSON-LD) for the homepage.
 */
export function getHomepageStructuredData(): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'KundaliAI',
    description: DEFAULT_META.description,
    url: 'https://kundali.ai',
    applicationCategory: 'LifestyleApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
    },
  });
}
