import { describe, it, expect } from 'vitest';
import { calculateBSP8KetuLiberation } from '../src/lib/bsp/bspRule8KetuSpiritual';

describe('BSP Rule 8', () => {
  it('triggers spiritual detachment in 12th from Ketu in 48th year', () => {
    expect(calculateBSP8KetuLiberation(1)).toBe(12);
  });
});
