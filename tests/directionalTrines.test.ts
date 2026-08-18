import { describe, it, expect } from 'vitest';
import { getNadiDirection, NADI_DIRECTIONS } from '../src/lib/nadi/directionalTrines';

describe('Nadi Directional Trines', () => {
  it('maps Aries (0) to East', () => {
    expect(getNadiDirection(0)).toBe('East');
    expect(NADI_DIRECTIONS.East).toEqual([0, 4, 8]);
  });
});
