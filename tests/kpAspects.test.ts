import { describe, it, expect } from 'vitest';
import { evaluateKPAspect } from '../src/lib/kp/kpAspects';

describe('KP Aspects', () => {
  it('identifies 120-degree Trine aspect as benefic', () => {
    const res = evaluateKPAspect(0, 120);
    expect(res.aspect).toBe('Trine');
    expect(res.isBenefic).toBe(true);
  });
});
