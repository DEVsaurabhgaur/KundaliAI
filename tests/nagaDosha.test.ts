import { describe, it, expect } from 'vitest';
import { evaluateNagaDosha } from '../src/lib/kalasarpa/nagaDosha';

describe('Naga Dosha', () => {
  it('flags dosha when 5th house holds Rahu', () => {
    expect(evaluateNagaDosha(true, false).hasNagaDosha).toBe(true);
  });
});
