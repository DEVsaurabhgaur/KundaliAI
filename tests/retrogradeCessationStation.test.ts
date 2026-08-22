import { describe, it, expect } from 'vitest';
import { isTurningDirect } from '../src/lib/speed/retrogradeCessationStation';

describe('Turning Direct', () => {
  it('confirms stationing turnaround when speed hits zero from retrograde', () => {
    expect(isTurningDirect(true, true)).toBe(true);
  });
});
