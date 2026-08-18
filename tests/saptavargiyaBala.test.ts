import { describe, it, expect } from 'vitest';
import { calculateSaptavargiyaBala } from '../src/lib/shadbala/saptavargiyaBala';

describe('Saptavargiya Bala', () => {
  it('sums dignity scores across 7 divisions', () => {
    const total = calculateSaptavargiyaBala([45, 30, 20, 20, 15, 10, 30]);
    expect(total).toBe(170);
  });
});
