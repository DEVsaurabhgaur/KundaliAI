import { describe, it, expect } from 'vitest';
import { calculateKendradiBala } from '../src/lib/shadbala/kendradiBala';

describe('Kendradi Bala', () => {
  it('gives 60 virupas in Kendra and 30 in Panaphara', () => {
    expect(calculateKendradiBala(1)).toBe(60);
    expect(calculateKendradiBala(5)).toBe(30);
    expect(calculateKendradiBala(9)).toBe(15);
  });
});
