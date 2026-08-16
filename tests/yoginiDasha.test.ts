import { describe, it, expect } from 'vitest';
import { calculateYoginiDasha } from '../src/lib/dasha/yoginiDasha';

describe('Yogini Dasha Engine', () => {
  it('calculates 8 Yogini periods summing to 36 years', () => {
    const periods = calculateYoginiDasha(0, 2000);
    expect(periods).toHaveLength(8);
    const total = periods.reduce((sum, p) => sum + p.durationYears, 0);
    expect(total).toBe(36);
  });
});
