import { describe, it, expect } from 'vitest';
import { checkTripushkarYoga } from '../src/lib/panchang/tripushkarYoga';

describe('Tripushkar Yoga', () => {
  it('detects valid day, tithi, and nakshatra conjunction', () => {
    expect(checkTripushkarYoga(0, 2, 2)).toBe(true);
  });
});
