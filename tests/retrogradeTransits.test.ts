import { describe, it, expect } from 'vitest';
import { getRetrogradeIntensity } from '../src/lib/gochara/retrogradeTransits';

describe('Retrograde Transit Multiplier', () => {
  it('doubles intensity for retrograde motion', () => {
    const res = getRetrogradeIntensity(true);
    expect(res.intensityMultiplier).toBe(2.0);
  });
});
