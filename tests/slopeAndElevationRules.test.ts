import { describe, it, expect } from 'vitest';
import { evaluatePlotSlope } from '../src/lib/vastu/slopeAndElevationRules';

describe('Plot Slope', () => {
  it('confirms Ishanya / Northeast slope as auspicious', () => {
    expect(evaluatePlotSlope('Northeast').isAuspicious).toBe(true);
  });
});
