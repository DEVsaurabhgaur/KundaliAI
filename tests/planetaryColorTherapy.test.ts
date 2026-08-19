import { describe, it, expect } from 'vitest';
import { getAuspiciousColor } from '../src/lib/remedies/planetaryColorTherapy';

describe('Planetary Color Therapy', () => {
  it('returns Yellow / Saffron for Jupiter', () => {
    expect(getAuspiciousColor('Jupiter')).toContain('Yellow');
  });
});
