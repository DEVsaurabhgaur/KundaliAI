import { describe, it, expect } from 'vitest';
import { evaluateMercuryJupiterNadi } from '../src/lib/nadi/mercuryJupiterNadi';

describe('Mercury-Jupiter Nadi', () => {
  it('describes scholarship and advisory brilliance', () => {
    expect(evaluateMercuryJupiterNadi()).toContain('Supreme scholarship');
  });
});
