/**
 * High-Precision Julian Day (JD) and Julian Ephemeris Century (T) formulas
 * Based on Meeus Astronomical Algorithms.
 */

export function calculateJulianDay(date: Date): number {
  let year = date.getUTCFullYear();
  let month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  const hour = date.getUTCHours() + date.getUTCMinutes() / 60 + date.getUTCSeconds() / 3600;

  if (month <= 2) {
    year -= 1;
    month += 12;
  }

  const A = Math.floor(year / 100);
  const B = 2 - A + Math.floor(A / 4);

  const JD = Math.floor(365.25 * (year + 4716)) +
             Math.floor(30.6001 * (month + 1)) +
             day + B - 1524.5 + (hour / 24.0);

  return JD;
}

export function julianCenturiesSinceJ2000(jd: number): number {
  return (jd - 2451545.0) / 36525.0;
}
