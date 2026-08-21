import { describe, it, expect } from 'vitest';
import { calculateBSP14MoonLiquidity } from '../src/lib/bsp/bspRule14Moon2nd';

describe('BSP Rule 14', () => {
  it('calculates 2nd from Moon', () => {
    expect(calculateBSP14MoonLiquidity(1)).toBe(2);
  });
});
