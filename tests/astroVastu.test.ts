import { describe, it, expect } from 'vitest';
import { mapKundaliHouseToVastuZone } from '../src/lib/vastu/astroVastu';

describe('Astro-Vastu Mapping', () => {
  it('maps 1st house to East (Self)', () => {
    expect(mapKundaliHouseToVastuZone(1)).toContain('East');
  });
});
