import { describe, it, expect } from 'vitest';
import { evaluateLitigationPrashna } from '../src/lib/prashna/courtPrashna';

describe('Litigation Prashna', () => {
  it('determines victory based on lagna lord strength margin', () => {
    const res = evaluateLitigationPrashna(80, 50);
    expect(res.victoryVerdict).toContain('Victory for Querent');
  });
});
