import { describe, it, expect } from 'vitest';
import { checkDiseaseOnsetPeriod } from '../src/lib/medical/diseaseOnsetDasha';

describe('Disease Onset Dasha', () => {
  it('flags period when active dasha lord is in trika lords', () => {
    expect(checkDiseaseOnsetPeriod('Mars', ['Mars', 'Saturn'])).toBe(true);
  });
});
