import { describe, it, expect } from 'vitest';
import { checkSwaraVedha } from '../src/lib/sbc/swaraVowelVedha';

describe('Swara Vedha', () => {
  it('detects vowel match', () => {
    expect(checkSwaraVedha('A', 'a')).toBe(true);
  });
});
