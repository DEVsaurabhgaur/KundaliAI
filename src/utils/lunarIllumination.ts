/**
 * Moon Phase and Illumination Percentage Calculator
 */

export interface MoonIllumination {
  phaseName: string;
  illuminationPercentage: number;
  elongationDegrees: number;
}

export function calculateMoonPhase(sunLongitude: number, moonLongitude: number): MoonIllumination {
  const elongation = ((moonLongitude - sunLongitude + 360) % 360);
  const phaseAngle = Math.PI - (elongation * Math.PI / 180);
  const illumination = (1 + Math.cos(phaseAngle)) / 2 * 100;

  let phaseName = 'New Moon (Amavasya)';
  if (elongation >= 15 && elongation < 75) phaseName = 'Waxing Crescent';
  else if (elongation >= 75 && elongation < 105) phaseName = 'First Quarter';
  else if (elongation >= 105 && elongation < 165) phaseName = 'Waxing Gibbous';
  else if (elongation >= 165 && elongation < 195) phaseName = 'Full Moon (Purnima)';
  else if (elongation >= 195 && elongation < 255) phaseName = 'Waning Gibbous';
  else if (elongation >= 255 && elongation < 285) phaseName = 'Third Quarter';
  else if (elongation >= 285 && elongation < 345) phaseName = 'Waning Crescent';

  return {
    phaseName,
    illuminationPercentage: Number(illumination.toFixed(1)),
    elongationDegrees: Number(elongation.toFixed(2))
  };
}
