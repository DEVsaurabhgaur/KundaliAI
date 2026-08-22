import { describe, it, expect } from 'vitest';
import { calculateDrekkanaVigor } from '../src/lib/drekkana/drekkanaLagnaVigor';

describe('Drekkana Vigor', () => {
  it('multiplies vigor by 1.25 for benefic lord', () => {
    expect(calculateDrekkanaVigor(true)).toBe(1.25);
  });
});
