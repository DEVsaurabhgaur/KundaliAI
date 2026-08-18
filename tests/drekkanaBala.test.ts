import { describe, it, expect } from 'vitest';
import { calculateDrekkanaBala } from '../src/lib/shadbala/drekkanaBala';

describe('Drekkana Bala', () => {
  it('allocates 15 virupas to male planets in 1st decanate (0-10 deg)', () => {
    expect(calculateDrekkanaBala('Male', 5.0)).toBe(15);
    expect(calculateDrekkanaBala('Male', 15.0)).toBe(0);
  });
});
