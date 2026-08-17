import { describe, it, expect } from 'vitest';
import { checkBudhadityaYoga } from '../src/lib/yogas/budhadityaYoga';

describe('Budhaditya Yoga', () => {
  it('confirms yoga when Sun and Mercury are within 3 to 14 degrees', () => {
    expect(checkBudhadityaYoga(true, 5.0)).toBe(true);
    expect(checkBudhadityaYoga(true, 1.0)).toBe(false); // Deep combustion
  });
});
