import { describe, it, expect } from 'vitest';
import { calculateBSP15MercuryOccult } from '../src/lib/bsp/bspRule15Mercury8th';

describe('BSP Rule 15', () => {
  it('calculates 8th from Mercury', () => {
    expect(calculateBSP15MercuryOccult(1)).toBe(8);
  });
});
