import { describe, it, expect } from 'vitest';
import { calculateChaldeanNamank } from '../src/lib/numerology/namank';

describe('Chaldean Namank', () => {
  it('computes single digit for name', () => {
    const num = calculateChaldeanNamank('SAURABH');
    expect(num).toBeGreaterThanOrEqual(1);
    expect(num).toBeLessThanOrEqual(9);
  });
});
