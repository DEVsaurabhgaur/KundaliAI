import { describe, it, expect } from 'vitest';
import { getVashyaScore } from '../src/lib/synastry/vashyaKootaMatrix';

describe('Vashya Koota', () => {
  it('gives 2 points for matching signs', () => {
    expect(getVashyaScore(0, 0)).toBe(2.0);
  });
});
