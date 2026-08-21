import { describe, it, expect } from 'vitest';
import { getLalKitabHouseRemedy } from '../src/lib/lalkitab/lalKitabBhavasRemedies';

describe('Lal Kitab House Remedies', () => {
  it('returns silver coin remedy for 1st house', () => {
    expect(getLalKitabHouseRemedy(1)).toContain('silver');
  });
});
