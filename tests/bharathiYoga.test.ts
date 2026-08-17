import { describe, it, expect } from 'vitest';
import { checkBharathiYoga } from '../src/lib/yogas/bharathiYoga';

describe('Bharathi Yoga', () => {
  it('confirms yoga when 2nd lord conjoins Jupiter in Kendra', () => {
    expect(checkBharathiYoga(true)).toBe(true);
  });
});
