import { describe, it, expect } from 'vitest';
import { calculateSpecialSBCStars } from '../src/lib/sbc/sbcSpecialStars';

describe('Special SBC Stars', () => {
  it('identifies Karma star as 10th star from Janma', () => {
    const stars = calculateSpecialSBCStars(0);
    expect(stars.karma).toBe(9);
  });
});
