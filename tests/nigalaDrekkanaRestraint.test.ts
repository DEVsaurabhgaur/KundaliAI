import { describe, it, expect } from 'vitest';
import { isNigalaDrekkana } from '../src/lib/drekkana/nigalaDrekkanaRestraint';

describe('Nigala Drekkana', () => {
  it('identifies 1st decanate of Capricorn as Nigala', () => {
    expect(isNigalaDrekkana(9, 1)).toBe(true);
  });
});
