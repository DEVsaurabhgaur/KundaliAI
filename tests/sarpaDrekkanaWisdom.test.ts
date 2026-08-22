import { describe, it, expect } from 'vitest';
import { isSarpaDrekkana } from '../src/lib/drekkana/sarpaDrekkanaWisdom';

describe('Sarpa Drekkana', () => {
  it('identifies 2nd decanate of Cancer as Sarpa', () => {
    expect(isSarpaDrekkana(3, 2)).toBe(true);
  });
});
