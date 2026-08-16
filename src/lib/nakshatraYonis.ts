/**
 * Nakshatra Animal Yoni Affinity & Sworn Enemy Pairings
 */

export const YONI_SWORN_ENEMIES: [string, string][] = [
  ['Horse', 'Buffalo'],
  ['Elephant', 'Lion'],
  ['Sheep', 'Monkey'],
  ['Serpent', 'Mongoose'],
  ['Dog', 'Deer'],
  ['Cat', 'Rat'],
  ['Cow', 'Tiger']
];

export function isSwornEnemyYoni(yoniA: string, yoniB: string): boolean {
  return YONI_SWORN_ENEMIES.some(
    ([a, b]) => (a === yoniA && b === yoniB) || (a === yoniB && b === yoniA)
  );
}
