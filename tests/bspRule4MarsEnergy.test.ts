import { describe, it, expect } from 'vitest';
import { calculateBSP4MarsSurge } from '../src/lib/bsp/bspRule4MarsEnergy';

describe('BSP Rule 4', () => {
  it('surges energy in 10th house from Mars in 28th year', () => {
    expect(calculateBSP4MarsSurge(1)).toBe(10);
  });
});
