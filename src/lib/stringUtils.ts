/** String utilities for KundaliAI */

export function capitalize(s: string): string {
  if (!s) return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function titleCase(s: string): string {
  return s.replace(/\b\w/g, (ch) => ch.toUpperCase());
}

export function truncate(s: string, maxLen: number): string {
  if (s.length <= maxLen) return s;
  return s.slice(0, maxLen - 3) + '...';
}

export const planetSanskrit: Record<string, string> = {
  Sun:                  'Surya',
  Moon:                 'Chandra',
  Mars:                 'Mangal',
  Mercury:              'Budha',
  Jupiter:              'Guru',
  Venus:                'Shukra',
  Saturn:               'Shani',
  'Rahu (North Node)':  'Rahu',
  'Ketu (South Node)':  'Ketu',
};

export function getSanskritName(planet: string): string {
  return planetSanskrit[planet] ?? planet;
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '');
}

/**
 * Slugify a string for URL-safe use.
 */
export function slugify(s: string): string {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Check if a string contains only valid name characters.
 */
export function isValidName(name: string): boolean {
  return /^[a-zA-Z\u0900-\u097F\s.'-]{2,100}$/.test(name.trim());
}

/**
 * Pad a number with leading zeros to a given width.
 */
export function zeroPad(n: number, width: number): string {
  return String(n).padStart(width, '0');
}
