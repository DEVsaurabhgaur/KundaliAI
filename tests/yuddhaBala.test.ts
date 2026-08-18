import { describe, it, expect } from 'vitest';
import { calculateYuddhaBala } from '../src/lib/shadbala/yuddhaBala';

describe('Yuddha Bala', () => {
  it('transfers virupas from loser to winner', () => {
    expect(calculateYuddhaBala(true, 15)).toBe(15);
    expect(calculateYuddhaBala(false, 15)).toBe(-15);
  });
});
