/** String utilities for KundaliAI */

export function capitalize(s: string): string {
  if (!s) return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function truncate(s: string, maxLen: number): string {
  if (s.length <= maxLen) return s;
  return s.slice(0, maxLen - 3) + '...';
}

export const planetSanskrit: Record<string, string> = {
  Sun: 'Surya',
  Moon: 'Chandra',
  Mars: 'Mangal',
  Mercury: 'Budha',
  Jupiter: 'Guru',
  Venus: 'Shukra',
  Saturn: 'Shani',
  'Rahu (North Node)': 'Rahu',
  'Ketu (South Node)': 'Ketu',
};

export function getSanskritName(planet: string): string {
  return planetSanskrit[planet] ?? planet;
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '');
}

