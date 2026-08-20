import { describe, it, expect } from 'vitest';
import { evaluateTamboolaCount } from '../src/lib/prashna/tamboolaPrashna';

describe('Tamboola Prashna', () => {
  it('evaluates leaf count for omens', () => {
    const res = evaluateTamboolaCount(5);
    expect(res.indicatorScore).toBeDefined();
  });
});
