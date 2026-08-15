import { describe, it, expect } from 'vitest';
import { calculateShadbala } from '../src/lib/shadbala';

describe('Shadbala 6-Fold Strength Engine', () => {
  it('calculates total Rupas and required ratio for Sun', () => {
    const score = calculateShadbala('Sun', 10, false);
    expect(score.totalRupas).toBeGreaterThan(0);
    expect(score.requiredRupas).toBe(6.5);
  });
});
