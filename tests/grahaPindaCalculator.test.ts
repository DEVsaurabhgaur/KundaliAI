import { describe, it, expect } from 'vitest';
import { calculateGrahaPinda } from '../src/lib/pinda/grahaPindaCalculator';

describe('Graha Pinda', () => {
  it('multiplies occupied bindus by planetary multipliers', () => {
    const pinda = calculateGrahaPinda({ Sun: 4, Jupiter: 4 });
    expect(pinda).toBe(60); // 4*5 + 4*10 = 60
  });
});
