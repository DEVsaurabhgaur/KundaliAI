/** Ayanamsha calculation for Vedic (sidereal) astrology */

export type AyanamshaSystem = 'Lahiri' | 'Raman' | 'KP' | 'Fagan-Bradley';

/** Base ayanamsha values at J2000.0 (2000-01-01 12:00 TT) */
const AYANAMSHA_BASE: Record<AyanamshaSystem, number> = {
  'Lahiri':        23.85178,
  'Raman':         22.46098,
  'KP':            23.86383,
  'Fagan-Bradley': 24.74207,
};

/** Annual precession rate in degrees */
const PRECESSION_RATE = 50.2564 / 3600; // ~0.01396 degrees/year

/**
 * Calculate Julian Day Number from a calendar date.
 */
export function dateToJulianDay(year: number, month: number, day: number, hour = 12): number {
  const a = Math.floor((14 - month) / 12);
  const y = year + 4800 - a;
  const m = month + 12 * a - 3;
  const jdn = day + Math.floor((153 * m + 2) / 5) + 365 * y +
    Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045;
  return jdn + (hour - 12) / 24;
}

const J2000 = 2451545.0; // Julian Day for 2000-01-01 12:00 TT

/**
 * Calculate ayanamsha (sidereal offset) for a given date.
 * @param date - The date for calculation
 * @param system - Ayanamsha system to use (default: Lahiri)
 * @returns Ayanamsha value in degrees
 */
export function calculateAyanamsha(date: Date, system: AyanamshaSystem = 'Lahiri'): number {
  const jd = dateToJulianDay(date.getFullYear(), date.getMonth() + 1, date.getDate(), 12);
  const yearsSinceJ2000 = (jd - J2000) / 365.25;
  const base = AYANAMSHA_BASE[system];
  return base + yearsSinceJ2000 * PRECESSION_RATE;
}

/**
 * Convert tropical longitude to sidereal (Vedic) longitude.
 */
export function tropicalToSidereal(tropicalLongitude: number, date: Date, system: AyanamshaSystem = 'Lahiri'): number {
  const ayanamsha = calculateAyanamsha(date, system);
  return ((tropicalLongitude - ayanamsha) % 360 + 360) % 360;
}
