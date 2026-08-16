import { describe, it, expect } from 'vitest';
import { isPlanetInPakkaGhar } from '../src/lib/lalkitab/pakkaGhar';

describe('Pakka Ghar Verification', () => {
  it('confirms Sun is the permanent master of House 1', () => {
    expect(isPlanetInPakkaGhar('Sun', 1)).toBe(true);
    expect(isPlanetInPakkaGhar('Venus', 1)).toBe(false);
  });
});
