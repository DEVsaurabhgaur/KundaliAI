import { describe, it, expect } from 'vitest';
import { checkVeenaYoga } from '../src/lib/yogas/musicalYogas';

describe('Veena Yoga', () => {
  it('confirms yoga when 7 planets occupy 7 distinct signs', () => {
    expect(checkVeenaYoga(7)).toBe(true);
  });
});
