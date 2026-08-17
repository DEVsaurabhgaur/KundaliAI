import { describe, it, expect } from 'vitest';
import { calculateTarabala } from '../src/lib/panchang/tarabala';

describe('Tarabala Engine', () => {
  it('identifies Sampat Tara (2) as auspicious', () => {
    const res = calculateTarabala(0, 1);
    expect(res.taraNumber).toBe(2);
    expect(res.isAuspicious).toBe(true);
  });
});
