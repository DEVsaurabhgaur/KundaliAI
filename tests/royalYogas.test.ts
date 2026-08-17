import { describe, it, expect } from 'vitest';
import { checkShankhaYoga } from '../src/lib/yogas/royalYogas';

describe('Shankha Yoga', () => {
  it('confirms yoga when 5th and 6th lords occupy Kendra', () => {
    expect(checkShankhaYoga(true)).toBe(true);
  });
});
