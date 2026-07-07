/** Application-wide constants for KundaliAI */

export const APP_NAME = 'KundaliAI';
export const APP_VERSION = '1.0.0';
export const APP_DESCRIPTION = 'AI-powered Vedic astrology kundali generator';

export const RASHI_NAMES = [
  'Aries (Mesh)', 'Taurus (Vrishabh)', 'Gemini (Mithun)', 'Cancer (Kark)',
  'Leo (Simha)', 'Virgo (Kanya)', 'Libra (Tula)', 'Scorpio (Vrishchik)',
  'Sagittarius (Dhanu)', 'Capricorn (Makar)', 'Aquarius (Kumbh)', 'Pisces (Meen)',
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

export const API_RATE_LIMIT = 10;
export const MAX_NAME_LENGTH = 100;

