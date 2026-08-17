/**
 * Hora Lagna (HL - Wealth & Financial Liquidity Point)
 * Advances 1 sign per Hora (60 minutes) from sunrise.
 */

export function calculateHoraLagna(sunLongDeg: number, minutesAfterSunrise: number): number {
  const horas = minutesAfterSunrise / 60;
  const hlDeg = (sunLongDeg + horas * 30) % 360;
  return Number(hlDeg.toFixed(2));
}
