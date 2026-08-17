import { describe, it, expect } from 'vitest';
import { checkVasumatiYoga } from '../src/lib/yogas/vasumatiYoga';

describe('Vasumati Yoga', () => {
  it('confirms yoga with 2 or more benefics in Upachaya houses', () => {
    expect(checkVasumatiYoga(3)).toBe(true);
    expect(checkVasumatiYoga(1)).toBe(false);
  });
});
