import { describe, it, expect } from 'vitest';
import { calculateBSP12MarsProperty } from '../src/lib/bsp/bspRule12Mars4th';

describe('BSP Rule 12', () => {
  it('calculates 4th house from Mars', () => {
    expect(calculateBSP12MarsProperty(1)).toBe(4);
  });
});
