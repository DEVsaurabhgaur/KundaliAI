import { describe, it, expect } from 'vitest';
import { calculateDrigDashaStart } from '../src/lib/jaimini/drigDasha';

describe('Drig Dasha Calculation', () => {
  it('starts from 9th house sign', () => {
    expect(calculateDrigDashaStart(8)).toBe(8);
  });
});
