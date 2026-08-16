import { describe, it, expect } from 'vitest';
import { generateAntarDashas } from '../src/lib/dasha/vimshottariSubPeriods';

describe('Vimshottari Sub-Periods', () => {
  it('generates 9 antardashas for Sun Mahadasha', () => {
    const antars = generateAntarDashas('Sun');
    expect(antars).toHaveLength(9);
    expect(antars[0].antarDasha).toBe('Sun');
  });
});
