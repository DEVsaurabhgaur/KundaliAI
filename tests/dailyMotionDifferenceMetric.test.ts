import { describe, it, expect } from 'vitest';
import { calculateSpeedAcceleration } from '../src/lib/speed/dailyMotionDifferenceMetric';

describe('Speed Acceleration Delta', () => {
  it('computes daily velocity difference', () => {
    expect(calculateSpeedAcceleration(0.95, 1.05)).toBe(0.1);
  });
});
