import { describe, it, expect } from 'vitest';
import { getOrganForHouse } from '../src/lib/medical/bhavaOrganMapping';

describe('Bhava Organ Mapping', () => {
  it('maps 1st house to head/brain and 4th house to chest/heart', () => {
    expect(getOrganForHouse(1)).toContain('Head');
    expect(getOrganForHouse(4)).toContain('heart');
  });
});
