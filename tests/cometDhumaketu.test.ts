import { describe, it, expect } from 'vitest';
import { evaluateCometOmen } from '../src/lib/medini/cometDhumaketu';

describe('Dhumaketu Comet', () => {
  it('signals restructuring in indicated direction', () => {
    expect(evaluateCometOmen('North')).toContain('North');
  });
});
