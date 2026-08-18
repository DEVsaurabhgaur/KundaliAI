import { describe, it, expect } from 'vitest';
import { calculateNathonathaBala } from '../src/lib/shadbala/nathonathaBala';

describe('Nathonatha Bala', () => {
  it('gives 60 virupas at exact solar noon', () => {
    expect(calculateNathonathaBala(0)).toBe(60);
  });
});
