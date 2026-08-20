import { describe, it, expect } from 'vitest';
import { getSBCGridPosition, SBC_28_NAKSHATRAS } from '../src/lib/sbc/sbcGrid81';

describe('SBC 81-Grid', () => {
  it('includes Abhijit as 28th star', () => {
    expect(SBC_28_NAKSHATRAS).toContain('Abhijit');
    expect(SBC_28_NAKSHATRAS).toHaveLength(28);
  });
});
