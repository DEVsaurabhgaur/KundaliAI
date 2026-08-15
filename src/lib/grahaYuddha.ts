/**
 * Graha Yuddha (Planetary War)
 * When two true planets (Mars, Mercury, Jupiter, Venus, Saturn) are within 1 degree of each other.
 * The planet with northern declination or brighter magnitude wins.
 */

export interface WarResult {
  planetA: string;
  planetB: string;
  angularSeparation: number;
  winner: string;
  loser: string;
  analysis: string;
}

export function evaluatePlanetaryWar(
  planetA: { name: string; longitude: number; declination?: number },
  planetB: { name: string; longitude: number; declination?: number }
): WarResult | null {
  const diff = Math.abs((planetA.longitude - planetB.longitude + 360) % 360);
  const separation = diff > 180 ? 360 - diff : diff;

  if (separation > 1.0) return null; // Not in war

  // Venus generally wins planetary war due to brilliant luminosity (Classical exception)
  let winner = planetA.name;
  let loser = planetB.name;

  if (planetA.name === 'Venus') {
    winner = planetA.name;
    loser = planetB.name;
  } else if (planetB.name === 'Venus') {
    winner = planetB.name;
    loser = planetA.name;
  } else {
    // Higher declination wins
    const decA = planetA.declination ?? 0;
    const decB = planetB.declination ?? 0;
    if (decB > decA) {
      winner = planetB.name;
      loser = planetA.name;
    }
  }

  return {
    planetA: planetA.name,
    planetB: planetB.name,
    angularSeparation: Number(separation.toFixed(3)),
    winner,
    loser,
    analysis: `${winner} emerges victorious in Graha Yuddha against ${loser}.`
  };
}
