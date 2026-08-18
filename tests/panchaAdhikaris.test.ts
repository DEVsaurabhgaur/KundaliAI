import { describe, it, expect } from 'vitest';
import { evaluatePanchaAdhikaris } from '../src/lib/tajika/panchaAdhikaris';

describe('Pancha Adhikaris', () => {
  it('packages 5 office-bearers', () => {
    const p = evaluatePanchaAdhikaris('Mars', 'Venus', 'Jupiter', 'Sun', 'Mercury');
    expect(p.janmaLagnesha).toBe('Mars');
  });
});
