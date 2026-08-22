import { describe, it, expect } from 'vitest';
import { isSarpaOrVarahaDrekkana } from '../src/lib/drekkana/varahaDrekkana';

describe('Varaha Drekkana', () => {
  it('recognizes 2nd decanate', () => {
    expect(isSarpaOrVarahaDrekkana(1)).toBe(true);
  });
});
