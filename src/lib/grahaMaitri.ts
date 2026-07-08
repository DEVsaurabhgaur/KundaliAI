/** Graha Maitri (planetary friendship) â€” natural relationships between planets */

export type Relationship = 'friend' | 'neutral' | 'enemy';

/**
 * Natural planetary friendship table (Naisargika Maitri).
 * Key: planet, Value: { friends, neutrals, enemies }
 */
export const GRAHA_MAITRI: Record<string, { friends: string[]; neutrals: string[]; enemies: string[] }> = {
  Sun: {
    friends:  ['Moon', 'Mars', 'Jupiter'],
    neutrals: ['Mercury'],
    enemies:  ['Venus', 'Saturn'],
  },
  Moon: {
    friends:  ['Sun', 'Mercury'],
    neutrals: ['Mars', 'Jupiter', 'Venus', 'Saturn'],
    enemies:  [],
  },
  Mars: {
    friends:  ['Sun', 'Moon', 'Jupiter'],
    neutrals: ['Venus', 'Saturn'],
    enemies:  ['Mercury'],
  },
  Mercury: {
    friends:  ['Sun', 'Venus'],
    neutrals: ['Mars', 'Jupiter', 'Saturn'],
    enemies:  ['Moon'],
  },
  Jupiter: {
    friends:  ['Sun', 'Moon', 'Mars'],
    neutrals: ['Saturn'],
    enemies:  ['Mercury', 'Venus'],
  },
  Venus: {
    friends:  ['Mercury', 'Saturn'],
    neutrals: ['Mars', 'Jupiter'],
    enemies:  ['Sun', 'Moon'],
  },
  Saturn: {
    friends:  ['Mercury', 'Venus'],
    neutrals: ['Jupiter'],
    enemies:  ['Sun', 'Moon', 'Mars'],
  },
};

/**
 * Get the natural relationship between two planets.
 */
export function getNaturalRelationship(planet: string, otherPlanet: string): Relationship {
  const maitri = GRAHA_MAITRI[planet];
  if (!maitri) return 'neutral';
  if (maitri.friends.includes(otherPlanet)) return 'friend';
  if (maitri.enemies.includes(otherPlanet)) return 'enemy';
  return 'neutral';
}
