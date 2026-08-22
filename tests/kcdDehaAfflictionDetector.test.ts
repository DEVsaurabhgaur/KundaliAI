import { describe, it, expect } from 'vitest';
import { checkDehaJeevaTransitAffliction } from '../src/lib/kcd/kcdDehaAfflictionDetector';

describe('Deha Jeeva Affliction', () => {
  it('flags affliction when malefic transits Deha sign', () => {
    const res = checkDehaJeevaTransitAffliction([0], 0, 8);
    expect(res.isDehaAfflicted).toBe(true);
  });
});
