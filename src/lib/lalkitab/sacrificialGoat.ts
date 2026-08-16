/**
 * Qurbani ke Bakre (Sacrificial Planet / Scapegoat Concept)
 * In Lal Kitab, when a powerful planet is afflicted, a secondary planet bears the brunt.
 */

export function getSacrificialPlanet(afflictedPlanet: string): string {
  const MAP: Record<string, string> = {
    Sun: 'Venus',
    Moon: 'Sun',
    Mars: 'Mercury',
    Jupiter: 'Moon',
    Venus: 'Mars',
    Saturn: 'Jupiter'
  };
  return MAP[afflictedPlanet] || 'Ketu';
}
