import { describe, it, expect } from 'vitest';
import { calculatePythagoreanNamank } from '../src/lib/numerology/namankPythagorean';

describe('Pythagorean Namank', () => {
  it('computes single digit between 1 and 9', () => {
    const res = calculatePythagoreanNamank('KUNDALI');
    expect(res).toBeGreaterThanOrEqual(1);
    expect(res).toBeLessThanOrEqual(9);
  });
});
