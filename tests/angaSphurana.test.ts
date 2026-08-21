import { describe, it, expect } from 'vitest';
import { evaluateSphurana } from '../src/lib/nimitta/angaSphurana';

describe('Anga Sphurana', () => {
  it('confirms right-side twitching is auspicious for males', () => {
    expect(evaluateSphurana('Eye', true, true).isAuspicious).toBe(true);
    expect(evaluateSphurana('Eye', false, true).isAuspicious).toBe(false);
  });
});
