import { describe, it, expect } from 'vitest';
import { calculateStreeDeergha } from '../src/lib/synastry/streeDeergha';

describe('Stree Deergha', () => {
  it('rates distance > 15 stars as excellent', () => {
    const res = calculateStreeDeergha(0, 16);
    expect(res.isExcellent).toBe(true);
  });
});
