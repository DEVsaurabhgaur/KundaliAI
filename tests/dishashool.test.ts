import { describe, it, expect } from 'vitest';
import { getDishashool } from '../src/lib/panchang/dishashool';

describe('Dishashool Directions', () => {
  it('maps Sunday taboo to West', () => {
    expect(getDishashool(0).direction).toBe('West');
  });
});
