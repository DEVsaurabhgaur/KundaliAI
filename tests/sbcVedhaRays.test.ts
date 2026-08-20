import { describe, it, expect } from 'vitest';
import { calculateSBCVedhas } from '../src/lib/sbc/sbcVedhaRays';

describe('SBC Vedha Rays', () => {
  it('calculates 180-deg frontal and diagonal rays', () => {
    const vedhas = calculateSBCVedhas(0);
    expect(vedhas.frontalVedhaStar).toBe(14);
    expect(vedhas.leftVedhaStar).toBe(7);
  });
});
