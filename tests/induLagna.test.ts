import { describe, it, expect } from 'vitest';
import { calculateInduLagna } from '../src/lib/career/induLagna';

describe('Indu Lagna', () => {
  it('calculates wealth sign index', () => {
    const sign = calculateInduLagna('Sun', 'Moon', 0);
    expect(sign).toBeGreaterThanOrEqual(0);
    expect(sign).toBeLessThan(12);
  });
});
