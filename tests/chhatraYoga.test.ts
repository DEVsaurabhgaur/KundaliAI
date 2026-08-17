import { describe, it, expect } from 'vitest';
import { checkChhatraYoga } from '../src/lib/yogas/chhatraYoga';

describe('Chhatra Yoga', () => {
  it('confirms yoga when continuous signs occupied from 7th', () => {
    expect(checkChhatraYoga(true)).toBe(true);
  });
});
