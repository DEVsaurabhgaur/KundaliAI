import { describe, it, expect } from 'vitest';
import { calculatePakaAndBhoga } from '../src/lib/chara/pakaBhogaRashi';

describe('Paka and Bhoga Rashi', () => {
  it('computes reflection sign correctly', () => {
    const res = calculatePakaAndBhoga(0, 4);
    expect(res.pakaRashi).toBe(4);
    expect(res.bhogaRashi).toBe(8);
  });
});
