import { describe, it, expect } from 'vitest';
import { calculateSarvashtakavarga } from '../src/lib/ashtakavargaSav';

describe('Ashtakavarga SAV Engine', () => {
  it('returns 12 signs with non-zero bindus', () => {
    const sav = calculateSarvashtakavarga({ Sun: 0, Moon: 3 });
    expect(sav).toHaveLength(12);
    expect(sav[0].totalBindus).toBeGreaterThan(0);
  });
});
