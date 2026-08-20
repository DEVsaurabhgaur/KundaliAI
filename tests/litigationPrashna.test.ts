import { describe, it, expect } from 'vitest';
import { evaluateLitigation } from '../src/lib/prashna/litigationPrashna';

describe('Litigation Prashna', () => {
  it('predicts favorable outcome when 1st lord is stronger than 7th', () => {
    expect(evaluateLitigation(true, true).willPrevail).toBe(true);
  });
});
