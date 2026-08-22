import { describe, it, expect } from 'vitest';
import { evaluateEclipseMundaneImpact } from '../src/lib/medini/eclipseImpact';

describe('Eclipse Mundane Impact', () => {
  it('identifies Lagna eclipse volatility', () => {
    expect(evaluateEclipseMundaneImpact(0, 0)).toContain('Lagna Eclipse');
  });
});
