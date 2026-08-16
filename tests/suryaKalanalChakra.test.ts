import { describe, it, expect } from 'vitest';
import { checkSuryaKalanalRisk } from '../src/lib/suryaKalanalChakra';

describe('Surya Kalanal Chakra', () => {
  it('flags high risk when Sun transits Janma Nakshatra', () => {
    const risk = checkSuryaKalanalRisk(0, 0);
    expect(risk.isHighRisk).toBe(true);
  });
});
