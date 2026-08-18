import { describe, it, expect } from 'vitest';
import { calculateCharaDashaYears } from '../src/lib/chara/charaYearsCalculator';

describe('Chara Dasha Years Calculator', () => {
  it('gives 12 years when sign matches lord sign', () => {
    expect(calculateCharaDashaYears(0, 0, true, false, false)).toBe(12);
  });
});
