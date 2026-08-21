import { describe, it, expect } from 'vitest';
import { calculateBSP1SaturnImpact } from '../src/lib/bsp/bspRule1Saturn3rd';

describe('BSP Rule 1', () => {
  it('calculates 3rd house from Saturn', () => {
    expect(calculateBSP1SaturnImpact(1)).toBe(3);
    expect(calculateBSP1SaturnImpact(11)).toBe(1);
  });
});
