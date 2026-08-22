import { describe, it, expect } from 'vitest';
import { isAyudhaDrekkana } from '../src/lib/drekkana/ayudhaDrekkanaBravery';

describe('Ayudha Drekkana', () => {
  it('identifies 1st decanate of Aries as Ayudha', () => {
    expect(isAyudhaDrekkana(0, 1)).toBe(true);
  });
});
