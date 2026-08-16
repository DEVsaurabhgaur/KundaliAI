/**
 * Lal Kitab Planet Archetypes
 * Dharmi Graha (Righteous), Soi Hue (Sleeping), Kayam Graha (Established)
 */

export function evaluateLalKitabPlanetState(planet: string, house: number, hasAspect: boolean) {
  const isDharmi = planet === 'Jupiter' || (planet === 'Saturn' && house === 11);
  const isSleeping = !hasAspect && [6, 8, 12].includes(house);

  return {
    planet,
    house,
    isDharmi,
    isSleeping,
    status: isDharmi ? 'Dharmi (Protected)' : isSleeping ? 'Soi Hua (Dormant)' : 'Kayam (Active)'
  };
}
