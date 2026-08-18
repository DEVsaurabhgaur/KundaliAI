import { describe, it, expect } from 'vitest';
import { evaluateNadiSupport } from '../src/lib/nadi/nadiAspects2and12';

describe('Nadi 2nd and 12th Dynamics', () => {
  it('detects incoming force in 2nd house', () => {
    const res = evaluateNadiSupport(0, ['Venus'], ['Jupiter']);
    expect(res.hasStrongFrontSupport).toBe(true);
  });
});
