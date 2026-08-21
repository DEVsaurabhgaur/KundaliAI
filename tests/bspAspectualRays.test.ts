import { describe, it, expect } from 'vitest';
import { calculateBhriguRay } from '../src/lib/bsp/bspAspectualRays';

describe('Bhrigu Aspectual Rays', () => {
  it('calculates ray destination house', () => {
    expect(calculateBhriguRay(1, 5)).toBe(5);
  });
});
