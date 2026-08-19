import { describe, it, expect } from 'vitest';
import { calculateGrahaMaitriScore } from '../src/lib/synastry/grahaMaitriKoota';

describe('Graha Maitri Koota', () => {
  it('awards 5 points for mutual friends', () => {
    expect(calculateGrahaMaitriScore(true, false, false)).toBe(5.0);
  });
});
