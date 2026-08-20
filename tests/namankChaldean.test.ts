import { describe, it, expect } from 'vitest';
import { calculateChaldeanNamank } from '../src/lib/numerology/namankChaldean';

describe('Chaldean Namank', () => {
  it('computes compound and single digit for names', () => {
    const res = calculateChaldeanNamank('RAM');
    expect(res.compoundNumber).toBeGreaterThan(0);
    expect(res.singleDigit).toBeGreaterThanOrEqual(1);
  });
});
