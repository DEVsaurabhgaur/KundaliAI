/**
 * Composite Midpoint Relationship Chart Generator
 * Calculates midpoints for each planet between partner A and partner B.
 */

export function calculateCompositePlanets(
  chartA: { name: string; longitude: number }[],
  chartB: { name: string; longitude: number }[]
) {
  return chartA.map(pA => {
    const pB = chartB.find(p => p.name === pA.name) || pA;
    let mid = (pA.longitude + pB.longitude) / 2;
    if (Math.abs(pA.longitude - pB.longitude) > 180) {
      mid = (mid + 180) % 360;
    }
    return {
      planet: pA.name,
      compositeLongitude: Number(mid.toFixed(2)),
      signIndex: Math.floor(mid / 30)
    };
  });
}
