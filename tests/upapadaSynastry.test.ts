import { describe, it, expect } from 'vitest';
import { evaluateULCompatibility } from '../src/lib/synastry/upapadaSynastry';

describe('Upapada Synastry', () => {
  it('confirms compatibility for trinal and 7th placements', () => {
    expect(evaluateULCompatibility(0, 4)).toBe(true);
    expect(evaluateULCompatibility(0, 6)).toBe(true);
  });
});
