import { describe, it, expect } from 'vitest';
import { evaluateFourStepChain } from '../src/lib/kp/fourStepTheory';

describe('KP 4-Step Theory', () => {
  it('builds a valid 4-step significator chain', () => {
    const chain = evaluateFourStepChain('Sun', 'Venus', 'Jupiter', 'Saturn', [2, 11]);
    expect(chain.subLord).toBe('Jupiter');
    expect(chain.signifiedHouses).toContain(11);
  });
});
