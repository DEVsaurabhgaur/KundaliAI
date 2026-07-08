/** Application-wide constants for KundaliAI */

export const APP_NAME = 'KundaliAI';
export const APP_VERSION = '1.1.0';
export const APP_DESCRIPTION = 'AI-powered Vedic astrology kundali generator';
export const APP_AUTHOR = 'KundaliAI Team';
export const APP_URL = 'https://kundali.ai';

export const RASHI_NAMES = [
  'Aries (Mesh)', 'Taurus (Vrishabh)', 'Gemini (Mithun)', 'Cancer (Kark)',
  'Leo (Simha)', 'Virgo (Kanya)', 'Libra (Tula)', 'Scorpio (Vrishchik)',
  'Sagittarius (Dhanu)', 'Capricorn (Makar)', 'Aquarius (Kumbh)', 'Pisces (Meen)',
] as const;

export const RASHI_SHORT = [
  'Ari', 'Tau', 'Gem', 'Can', 'Leo', 'Vir',
  'Lib', 'Sco', 'Sag', 'Cap', 'Aqu', 'Pis',
] as const;

export const NAVAGRAHA = [
  'Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn',
  'Rahu (North Node)', 'Ketu (South Node)',
] as const;

export const HOUSE_NAMES = [
  'Lagna (Ascendant)', 'Dhana (Wealth)', 'Sahaja (Siblings)', 'Sukha (Home)',
  'Putra (Children)', 'Ari (Enemies)', 'Kalatra (Marriage)', 'Mrityu (Transformation)',
  'Dharma (Fortune)', 'Karma (Career)', 'Labha (Gains)', 'Vyaya (Loss)',
] as const;

/** Kendra houses (angular - most powerful) */
export const KENDRA_HOUSES = [1, 4, 7, 10] as const;

/** Trikona houses (trinal - highly auspicious) */
export const TRIKONA_HOUSES = [1, 5, 9] as const;

/** Dusthana houses (malefic - challenging) */
export const DUSTHANA_HOUSES = [6, 8, 12] as const;

/** Upachaya houses (growing - improves over time) */
export const UPACHAYA_HOUSES = [3, 6, 10, 11] as const;

export const API_RATE_LIMIT = 10;
export const MAX_NAME_LENGTH = 100;
export const MAX_HISTORY_ITEMS = 10;
export const GEOCODING_DEBOUNCE_MS = 400;
export const CHART_CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes
