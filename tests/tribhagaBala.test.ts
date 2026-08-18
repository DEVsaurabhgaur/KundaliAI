import { describe, it, expect } from 'vitest';
import { calculateTribhagaBala } from '../src/lib/shadbala/tribhagaBala';

describe('Tribhaga Bala', () => {
  it('gives 60 virupas to Mercury in part 1 of day', () => {
    expect(calculateTribhagaBala(true, 1, 'Mercury')).toBe(60);
    expect(calculateTribhagaBala(true, 1, 'Jupiter')).toBe(60); // Always 60
  });
});
