/**
 * Patyayini Dasha for Tajika Varshaphala
 * Based on Krishamsha degrees of planets in the annual solar return chart.
 */

export function calculatePatyayiniWeights(planets: { name: string; longitude: number }[]) {
  const totalDeg = planets.reduce((acc, p) => acc + (p.longitude % 30), 0) || 1;
  return planets.map(p => ({
    planet: p.name,
    weightRatio: Number(((p.longitude % 30) / totalDeg).toFixed(3)),
    allocatedDays: Math.round(((p.longitude % 30) / totalDeg) * 365.25)
  }));
}
