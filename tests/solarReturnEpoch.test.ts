import { describe, it, expect } from 'vitest';
import { calculateSolarReturnEpoch } from '../src/lib/tajika/solarReturnEpoch';

describe('Solar Return Epoch', () => {
  it('computes timestamp for target year', () => {
    const epoch = calculateSolarReturnEpoch(120.0, 2026);
    expect(epoch).toBeGreaterThan(0);
  });
});
