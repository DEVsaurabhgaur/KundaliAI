import { describe, it, expect } from 'vitest';
import { evaluateHealthPrashna } from '../src/lib/prashna/healthPrashna';

describe('Health Prashna', () => {
  it('evaluates recovery based on 10th lord potency', () => {
    const health = evaluateHealthPrashna(true, false);
    expect(health.recoveryOutlook).toContain('Recovery');
  });
});
