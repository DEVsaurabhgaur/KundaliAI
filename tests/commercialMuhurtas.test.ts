import { describe, it, expect } from 'vitest';
import { checkGrihaPraveshEligibility } from '../src/lib/muhurta/commercialMuhurtas';

describe('Commercial Muhurtas', () => {
  it('confirms Griha Pravesh during Uttarayan with Tara Shuddhi', () => {
    expect(checkGrihaPraveshEligibility(true, true)).toBe(true);
  });
});
