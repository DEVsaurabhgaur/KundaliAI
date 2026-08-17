import { describe, it, expect } from 'vitest';
import { checkKedarYoga } from '../src/lib/yogas/kedarYoga';

describe('Kedar Yoga', () => {
  it('confirms yoga when 7 planets occupy 4 signs', () => {
    expect(checkKedarYoga(4)).toBe(true);
  });
});
