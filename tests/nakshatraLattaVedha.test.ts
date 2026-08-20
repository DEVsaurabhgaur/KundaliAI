import { describe, it, expect } from 'vitest';
import { calculateLattaStar } from '../src/lib/sbc/nakshatraLattaVedha';

describe('Nakshatra Latta', () => {
  it('calculates 12th star forward kick for Sun', () => {
    expect(calculateLattaStar(0, 'Sun')).toBe(12);
  });
});
