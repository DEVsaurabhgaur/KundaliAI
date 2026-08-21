import { describe, it, expect } from 'vitest';
import { calculateBSP11SaturnEnemies } from '../src/lib/bsp/bspRule11Saturn6th';

describe('BSP Rule 11', () => {
  it('calculates 6th house from Saturn', () => {
    expect(calculateBSP11SaturnEnemies(1)).toBe(6);
  });
});
