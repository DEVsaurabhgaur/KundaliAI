import { describe, it, expect } from 'vitest';
import { evaluateMedicalAffliction } from '../src/lib/medical/planetaryAfflictions';

describe('Planetary Medical Afflictions', () => {
  it('identifies bone/cardiac vulnerability for Sun-Saturn', () => {
    expect(evaluateMedicalAffliction('Sun', 'Saturn')).toContain('Bone density');
  });
});
