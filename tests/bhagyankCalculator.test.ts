import { describe, it, expect } from 'vitest';
import { calculateBhagyank } from '../src/lib/numerology/bhagyankCalculator';

describe('Bhagyank Calculator', () => {
  it('calculates single-digit life path number', () => {
    expect(calculateBhagyank(15, 8, 1947)).toBe(8);
  });
});
