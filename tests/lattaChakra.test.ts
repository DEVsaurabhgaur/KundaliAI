import { describe, it, expect } from 'vitest';
import { calculateLattaNakshatra } from '../src/lib/gochara/lattaChakra';

describe('Latta Chakra', () => {
  it('calculates 12th forward strike for Sun', () => {
    const strike = calculateLattaNakshatra('Sun', 0);
    expect(strike).toBe(11);
  });
});
