import { describe, it, expect } from 'vitest';
import { calculateBSP9MoonRelocation } from '../src/lib/bsp/bspRule9MoonEmotions';

describe('BSP Rule 9', () => {
  it('triggers mental tranquility/relocation in 4th from Moon in 24th year', () => {
    expect(calculateBSP9MoonRelocation(1)).toBe(4);
  });
});
