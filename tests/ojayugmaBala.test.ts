import { describe, it, expect } from 'vitest';
import { calculateOjayugmaBala } from '../src/lib/shadbala/ojayugmaBala';

describe('Ojayugma Bala', () => {
  it('gives 30 virupas to male planet in odd sign and odd navamsha', () => {
    expect(calculateOjayugmaBala(true, true, true)).toBe(30);
  });
});
