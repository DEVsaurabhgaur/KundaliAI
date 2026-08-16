import { describe, it, expect } from 'vitest';
import { getVastuRemedy } from '../src/lib/vastu/vastuRemedies';

describe('Vastu Remedies', () => {
  it('provides color/metal neutralizer for defect', () => {
    const remedy = getVastuRemedy('NE', 'ToiletInNorthEast');
    expect(remedy).toContain('pyramids');
  });
});
