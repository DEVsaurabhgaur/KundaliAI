import { describe, it, expect } from 'vitest';
import { checkHealthRiskPeriod } from '../src/lib/ayurjyotish/diseaseTiming';

describe('Disease Timing Engine', () => {
  it('flags period when active Dasha lord is a dusthana lord', () => {
    expect(checkHealthRiskPeriod('Mars', ['Mars', 'Saturn'])).toBe(true);
    expect(checkHealthRiskPeriod('Jupiter', ['Mars', 'Saturn'])).toBe(false);
  });
});
