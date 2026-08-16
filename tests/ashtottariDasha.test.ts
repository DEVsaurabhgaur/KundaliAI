import { describe, it, expect } from 'vitest';
import { calculateAshtottariDasha } from '../src/lib/dasha/ashtottariDasha';

describe('Ashtottari Dasha Engine', () => {
  it('calculates 8 periods spanning 108 total years', () => {
    const periods = calculateAshtottariDasha('Sun', 2000);
    expect(periods).toHaveLength(8);
    const total = periods.reduce((sum, p) => sum + p.durationYears, 0);
    expect(total).toBe(108);
  });
});
