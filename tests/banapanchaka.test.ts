import { describe, it, expect } from 'vitest';
import { calculateBanapanchaka } from '../src/lib/muhurta/banapanchaka';

describe('Banapanchaka', () => {
  it('identifies Mrityu Bana when remainder is 1', () => {
    expect(calculateBanapanchaka(1, 0, 0)).toContain('Mrityu');
  });
});
