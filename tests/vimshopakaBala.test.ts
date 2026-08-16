import { describe, it, expect } from 'vitest';
import { calculateVimshopakaScore } from '../src/lib/vargas/vimshopakaBala';

describe('Vimshopaka Bala Engine', () => {
  it('calculates 20-point aggregate score', () => {
    const score = calculateVimshopakaScore('Sun', { D1: 'Exalted', D9: 'Exalted' });
    expect(score.totalVimshopakaPoints).toBeGreaterThan(0);
    expect(score.totalVimshopakaPoints).toBeLessThanOrEqual(20);
  });
});
