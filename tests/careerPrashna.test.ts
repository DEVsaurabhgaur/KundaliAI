import { describe, it, expect } from 'vitest';
import { evaluateCareerPrashna } from '../src/lib/prashna/careerPrashna';

describe('Career Prashna', () => {
  it('evaluates promotion likelihood', () => {
    const career = evaluateCareerPrashna(true, true);
    expect(career.promotionLikelihood).toBe('High Probability');
  });
});
