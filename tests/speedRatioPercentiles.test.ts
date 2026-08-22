import { describe, it, expect } from 'vitest';
import { calculateSpeedPercentile } from '../src/lib/speed/speedRatioPercentiles';

describe('Speed Percentiles', () => {
  it('calculates 100% for mean speed', () => {
    expect(calculateSpeedPercentile(1.0, 1.0)).toBe(100);
  });
});
