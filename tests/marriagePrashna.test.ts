import { describe, it, expect } from 'vitest';
import { evaluateMarriagePrashna } from '../src/lib/prashna/marriagePrashna';

describe('Marriage Prashna', () => {
  it('evaluates alliance materialization', () => {
    const match = evaluateMarriagePrashna(true, true);
    expect(match.allianceMaterialization).toContain('Favorable');
  });
});
