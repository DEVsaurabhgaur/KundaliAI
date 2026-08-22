import { describe, it, expect } from 'vitest';
import { calculateNextSarosEclipse } from '../src/lib/medini/chandraSunEclipseCycle';

describe('Saros Eclipse Cycle', () => {
  it('computes next Saros eclipse epoch', () => {
    expect(calculateNextSarosEclipse(2026)).toBe(2044.03);
  });
});
