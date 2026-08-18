import { describe, it, expect } from 'vitest';
import { calculateDwadashavargiyaScore } from '../src/lib/tajika/dwadashavargiyaBala';

describe('Dwadashavargiya Bala', () => {
  it('computes score within 0 to 20', () => {
    const score = calculateDwadashavargiyaScore(4, 2);
    expect(score).toBe(10);
  });
});
