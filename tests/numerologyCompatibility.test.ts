import { describe, it, expect } from 'vitest';
import { getNumberCompatibility } from '../src/lib/numerology/numerologyCompatibility';

describe('Numerology Compatibility', () => {
  it('returns high score for identical numbers', () => {
    expect(getNumberCompatibility(1, 1)).toBe(95);
    expect(getNumberCompatibility(1, 3)).toBe(85);
  });
});
