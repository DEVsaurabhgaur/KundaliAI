import { describe, it, expect } from 'vitest';
import { aggregateShadbala } from '../src/lib/shadbala/shadbalaSummary';

describe('Shadbala Summary Aggregator', () => {
  it('validates planetary minimum rupa requirements', () => {
    const res = aggregateShadbala('Jupiter', 150, 50, 60, 50, 34.29, 10);
    expect(res.totalRupas).toBeGreaterThan(5.0);
    expect(res.isStrong).toBe(true);
  });
});
