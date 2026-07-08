/** Lagna (Ascendant) calculator for Vedic birth charts */

import { toRadians, toDegrees, normalizeDegrees } from './dateUtils';

export interface LagnaResult {
  sign: string;
  signIndex: number;
  degree: number;
  description: string;
}

const RASHI_NAMES = [
  'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
  'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces',
];

const LAGNA_DESCRIPTIONS: Record<string, string> = {
  Aries:       'Mesha Lagna â€” Dynamic, pioneering, energetic. Ruled by Mars.',
  Taurus:      'Vrishabha Lagna â€” Stable, artistic, sensual. Ruled by Venus.',
  Gemini:      'Mithuna Lagna â€” Intellectual, communicative, versatile. Ruled by Mercury.',
  Cancer:      'Karka Lagna â€” Nurturing, intuitive, home-loving. Ruled by Moon.',
  Leo:         'Simha Lagna â€” Charismatic, generous, leadership-oriented. Ruled by Sun.',
  Virgo:       'Kanya Lagna â€” Analytical, precise, health-conscious. Ruled by Mercury.',
  Libra:       'Tula Lagna â€” Balanced, diplomatic, relationship-focused. Ruled by Venus.',
  Scorpio:     'Vrishchika Lagna â€” Intense, transformative, research-minded. Ruled by Mars.',
  Sagittarius: 'Dhanu Lagna â€” Philosophical, optimistic, adventurous. Ruled by Jupiter.',
  Capricorn:   'Makara Lagna â€” Disciplined, ambitious, practical. Ruled by Saturn.',
  Aquarius:    'Kumbha Lagna â€” Humanitarian, innovative, independent. Ruled by Saturn.',
  Pisces:      'Meena Lagna â€” Spiritual, empathetic, creative. Ruled by Jupiter.',
};

/**
 * Estimate the Lagna (Ascendant) sign from birth hour and month.
 * This is a simplified calculation; use Swiss Ephemeris for precision.
 */
export function estimateLagna(birthHour: number, birthMonth: number, latitude: number): LagnaResult {
  // Each sign rises for approximately 2 hours (varies by latitude)
  // Add month offset for seasonal variation
  const baseIndex = (Math.floor(birthHour / 2) + (birthMonth - 1)) % 12;
  // Adjust for southern hemisphere (signs rise in reverse order roughly)
  const signIndex = latitude < 0 ? (12 - baseIndex) % 12 : baseIndex;

  const sign = RASHI_NAMES[signIndex];
  const degree = ((birthHour % 2) / 2) * 30; // Rough degree within sign

  return {
    sign,
    signIndex,
    degree: parseFloat(degree.toFixed(2)),
    description: LAGNA_DESCRIPTIONS[sign] ?? `${sign} Ascendant`,
  };
}
