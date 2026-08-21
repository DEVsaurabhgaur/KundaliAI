/**
 * Lal Kitab: Kurbani ke Bakre (Scapegoat Planets)
 * Ketu sacrifices itself for Jupiter.
 * Moon sacrifices itself for Sun.
 * Mercury sacrifices itself for Mars.
 */

export function getScapegoatPlanet(afflictedPlanet: string): string {
  const SACRIFICES: Record<string, string> = {
    Jupiter: 'Ketu',
    Sun: 'Moon',
    Mars: 'Mercury',
    Saturn: 'Venus',
    Rahu: 'Mars'
  };
  return SACRIFICES[afflictedPlanet] || 'None';
}
