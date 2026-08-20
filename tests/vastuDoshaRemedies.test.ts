import { describe, it, expect } from 'vitest';
import { getVastuRemedy } from '../src/lib/vastu/vastuDoshaRemedies';

describe('Vastu Remedies', () => {
  it('suggests water fountain for Northeast', () => {
    expect(getVastuRemedy('Northeast')).toContain('fountain');
  });
});
