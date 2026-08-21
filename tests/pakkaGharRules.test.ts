import { describe, it, expect } from 'vitest';
import { isPlanetInPakkaGhar } from '../src/lib/lalkitab/pakkaGharRules';

describe('Pakka Ghar', () => {
  it('confirms 4th house as Pakka Ghar for Moon', () => {
    expect(isPlanetInPakkaGhar('Moon', 4)).toBe(true);
    expect(isPlanetInPakkaGhar('Moon', 6)).toBe(false);
  });
});
