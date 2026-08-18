import { describe, it, expect } from 'vitest';
import { calculateAyanaBala } from '../src/lib/shadbala/ayanaBala';

describe('Ayana Bala', () => {
  it('gives northern strength to Sun', () => {
    expect(calculateAyanaBala(20, true, 'Sun')).toBe(50);
  });
});
