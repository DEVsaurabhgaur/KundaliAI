import { describe, it, expect } from 'vitest';
import { getVrataDetails } from '../src/lib/remedies/fastingVrataMatrix';

describe('Fasting Vrata Matrix', () => {
  it('maps Thursday fasting to Jupiter with no salt', () => {
    const v = getVrataDetails('Jupiter');
    expect(v.day).toBe('Thursday');
    expect(v.saltAllowed).toBe(false);
  });
});
