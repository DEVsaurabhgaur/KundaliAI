import { describe, it, expect } from 'vitest';
import { isSwornEnemyYoni } from '../src/lib/nakshatraYonis';

describe('Yoni Sworn Enemies', () => {
  it('identifies Cat and Rat as natural sworn enemies', () => {
    expect(isSwornEnemyYoni('Cat', 'Rat')).toBe(true);
    expect(isSwornEnemyYoni('Horse', 'Elephant')).toBe(false);
  });
});
