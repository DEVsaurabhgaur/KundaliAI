import { describe, it, expect } from 'vitest';
import { calculateParyayaDashaSpan } from '../src/lib/sthira/charaParyayaDasha';

describe('Chara Paryaya Dasha', () => {
  it('multiplies base duration by cycle number', () => {
    expect(calculateParyayaDashaSpan(2, 12)).toBe(24);
  });
});
