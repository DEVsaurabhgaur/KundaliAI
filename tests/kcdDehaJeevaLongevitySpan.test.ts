import { describe, it, expect } from 'vitest';
import { estimateKCDLifespan } from '../src/lib/kcd/kcdDehaJeevaLongevitySpan';

describe('KCD Lifespan Estimation', () => {
  it('adds bonus for strong Deha and Jeeva', () => {
    expect(estimateKCDLifespan(true, true, 86)).toBe(96);
  });
});
