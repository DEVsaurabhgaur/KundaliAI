/**
 * Vedic Numerology Number Friendship Matrix (1-9)
 */

export const NUMBER_RELATIONSHIPS: Record<number, { friends: number[]; neutrals: number[]; enemies: number[] }> = {
  1: { friends: [1, 2, 3, 9], neutrals: [5], enemies: [4, 6, 7, 8] },
  2: { friends: [1, 2, 3], neutrals: [7, 9], enemies: [4, 5, 6, 8] },
  3: { friends: [1, 2, 3, 9], neutrals: [5, 7], enemies: [4, 6, 8] },
  4: { friends: [5, 6, 7, 8], neutrals: [3], enemies: [1, 2, 4, 9] },
  5: { friends: [1, 4, 5, 6], neutrals: [3, 7, 8, 9], enemies: [2] },
  6: { friends: [4, 5, 6, 7, 8], neutrals: [3, 9], enemies: [1, 2] },
  7: { friends: [4, 5, 6], neutrals: [2, 3], enemies: [1, 7, 8, 9] },
  8: { friends: [4, 5, 6, 7], neutrals: [3], enemies: [1, 2, 8, 9] },
  9: { friends: [1, 2, 3, 9], neutrals: [5, 6], enemies: [4, 7, 8] }
};

export function getNumberRelationship(numA: number, numB: number): 'Friend' | 'Neutral' | 'Enemy' {
  const rel = NUMBER_RELATIONSHIPS[numA];
  if (!rel) return 'Neutral';
  if (rel.friends.includes(numB)) return 'Friend';
  if (rel.enemies.includes(numB)) return 'Enemy';
  return 'Neutral';
}
