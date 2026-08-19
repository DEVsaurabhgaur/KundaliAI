/**
 * Darakaraka (DK) Synastry Matching
 */

export function checkDKHarmony(girlDKPlanet: string, boyDKPlanet: string): boolean {
  const FRIENDLY_PAIRS: Record<string, string[]> = {
    Jupiter: ['Sun', 'Moon', 'Mars', 'Jupiter'],
    Venus: ['Mercury', 'Saturn', 'Venus'],
    Mercury: ['Sun', 'Venus', 'Mercury'],
    Mars: ['Sun', 'Moon', 'Jupiter', 'Mars'],
    Sun: ['Moon', 'Mars', 'Jupiter', 'Sun'],
    Moon: ['Sun', 'Mercury', 'Moon'],
    Saturn: ['Mercury', 'Venus', 'Saturn']
  };

  const friends = FRIENDLY_PAIRS[girlDKPlanet] || [];
  return friends.includes(boyDKPlanet);
}
