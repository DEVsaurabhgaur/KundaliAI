import { describe, it, expect } from 'vitest';
import { calculateRashiPinda } from '../src/lib/pinda/rashiPindaCalculator';

describe('Rashi Pinda', () => {
  it('multiplies reduced bindus by rashi multipliers', () => {
    const bindus = Array(12).fill(2);
    const pinda = calculateRashiPinda(bindus);
    expect(pinda).toBeGreaterThan(50);
  });
});
