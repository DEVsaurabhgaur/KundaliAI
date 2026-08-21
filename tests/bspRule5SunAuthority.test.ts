import { describe, it, expect } from 'vitest';
import { calculateBSP5SunIllumination } from '../src/lib/bsp/bspRule5SunAuthority';

describe('BSP Rule 5', () => {
  it('illuminates 5th from Sun in 22nd year', () => {
    expect(calculateBSP5SunIllumination(1)).toBe(5);
  });
});
