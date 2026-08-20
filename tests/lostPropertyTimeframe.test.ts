import { describe, it, expect } from 'vitest';
import { evaluateLostPropertyRecovery } from '../src/lib/prashna/lostPropertyTimeframe';

describe('Lost Property Timeframe', () => {
  it('predicts quick recovery with benefics in Kendra', () => {
    const res = evaluateLostPropertyRecovery(true, true);
    expect(res.isRecoverable).toBe(true);
    expect(res.estimatedDays).toBe(3);
  });
});
