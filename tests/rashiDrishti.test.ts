import { describe, it, expect } from 'vitest';
import { getAspectedSigns } from '../src/lib/jaimini/rashiDrishti';

describe('Jaimini Rashi Drishti', () => {
  it('returns 3 aspected fixed signs for Aries (Movable)', () => {
    const aspected = getAspectedSigns(0);
    expect(aspected).toHaveLength(3);
    expect(aspected).not.toContain(1); // Excludes adjacent Taurus
  });
});
