import { describe, it, expect } from 'vitest';
import { getFirePlacementAdvice } from '../src/lib/vastu/fireElementPlacements';

describe('Fire Element Placement', () => {
  it('approves kitchen in Southeast', () => {
    expect(getFirePlacementAdvice(true)).toContain('Ideal');
  });
});
