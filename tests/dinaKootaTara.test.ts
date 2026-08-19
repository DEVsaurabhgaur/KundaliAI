import { describe, it, expect } from 'vitest';
import { calculateDinaKoota } from '../src/lib/synastry/dinaKootaTara';

describe('Dina Koota', () => {
  it('awards 3 points for Sampat Tara (2nd count)', () => {
    expect(calculateDinaKoota(0, 1)).toBe(3.0);
  });
});
