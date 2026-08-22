import { describe, it, expect } from 'vitest';
import { isVarahaPersistenceDrekkana } from '../src/lib/drekkana/varahaDrekkanaDetermination';

describe('Varaha Persistence', () => {
  it('identifies 2nd decanate of Capricorn as Varaha persistence', () => {
    expect(isVarahaPersistenceDrekkana(9, 2)).toBe(true);
  });
});
