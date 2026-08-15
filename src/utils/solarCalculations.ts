/**
 * NOAA Solar Calculation Engine for Sunrise and Sunset Times
 */

export interface SolarTimes {
  sunriseMinutes: number;
  sunsetMinutes: number;
  solarNoonMinutes: number;
  dayLengthMinutes: number;
}

export function calculateSolarTimes(
  dayOfYear: number,
  latitude: number,
  longitude: number
): SolarTimes {
  const rad = Math.PI / 180;
  const deg = 180 / Math.PI;

  // Fractional year in radians
  const gamma = (2 * Math.PI / 365) * (dayOfYear - 1);

  // Equation of time in minutes
  const eqtime = 229.18 * (0.000075 + 0.001868 * Math.cos(gamma) - 0.032077 * Math.sin(gamma)
    - 0.014615 * Math.cos(2 * gamma) - 0.040849 * Math.sin(2 * gamma));

  // Solar declination angle
  const decl = 0.006918 - 0.399912 * Math.cos(gamma) + 0.070257 * Math.sin(gamma)
    - 0.006758 * Math.cos(2 * gamma) + 0.000907 * Math.sin(2 * gamma);

  // Hour angle for sunrise/sunset (zenith = 90.833 deg)
  const zenith = 90.833 * rad;
  const latRad = latitude * rad;
  const cosHA = (Math.cos(zenith) / (Math.cos(latRad) * Math.cos(decl))) - Math.tan(latRad) * Math.tan(decl);

  const clampedCosHA = Math.max(-1, Math.min(1, cosHA));
  const ha = Math.acos(clampedCosHA) * deg;

  const sunrise = 720 - 4 * (longitude + ha) - eqtime;
  const sunset = 720 - 4 * (longitude - ha) - eqtime;
  const noon = 720 - 4 * longitude - eqtime;

  return {
    sunriseMinutes: Math.round(sunrise),
    sunsetMinutes: Math.round(sunset),
    solarNoonMinutes: Math.round(noon),
    dayLengthMinutes: Math.round(sunset - sunrise)
  };
}
