import { describe, it, expect } from 'vitest';
import { calculatePinnacles } from '../src/lib/numerology/pinnaclesAndChallenges';

describe('Pinnacles Calculator', () => {
  it('calculates 4 life pinnacles', () => {
    const pins = calculatePinnacles(15, 8, 1995);
    expect(pins.pinnacle1).toBeDefined();
    expect(pins.pinnacle4).toBeDefined();
  });
});
