import { describe, it, expect } from 'vitest';
import { evaluateJupiterKetuNadi } from '../src/lib/nadi/jupiterKetuNadi';

describe('Jupiter-Ketu Nadi', () => {
  it('describes spiritual detachment and occult intuition', () => {
    expect(evaluateJupiterKetuNadi()).toContain('spiritual detachment');
  });
});
