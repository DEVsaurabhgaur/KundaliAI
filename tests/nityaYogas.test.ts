import { describe, it, expect } from 'vitest';
import { calculateNityaYoga } from '../src/lib/panchang/nityaYogas';

describe('Nitya Yogas Engine', () => {
  it('computes Vishkumbha for sum at 0 degrees', () => {
    const yoga = calculateNityaYoga(0, 0);
    expect(yoga.yogaName).toBe('Vishkumbha');
    expect(yoga.yogaNumber).toBe(1);
  });
});
