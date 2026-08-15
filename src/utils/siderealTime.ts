/**
 * Greenwich Sidereal Time (GST) and Local Sidereal Time (LST)
 */

import { calculateJulianDay, julianCenturiesSinceJ2000 } from './julianDay';

export function calculateGST(date: Date): number {
  const jd = calculateJulianDay(date);
  const T = julianCenturiesSinceJ2000(jd);

  // GMST at 0h UT formula in degrees
  let gmst = 280.46061837 + 360.98564736629 * (jd - 2451545.0) +
             0.000387933 * T * T - (T * T * T) / 38710000.0;

  gmst = ((gmst % 360) + 360) % 360;
  return gmst;
}

export function calculateLST(date: Date, longitudeDegrees: number): number {
  const gst = calculateGST(date);
  const lst = ((gst + longitudeDegrees) % 360 + 360) % 360;
  return lst;
}
