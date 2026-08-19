import { describe, it, expect } from 'vitest';
import { calculateGemstoneWeight } from '../src/lib/remedies/gemstoneWeights';

describe('Gemstone Weight Formula', () => {
  it('computes ratti and carats for 66 kg', () => {
    const w = calculateGemstoneWeight(66);
    expect(w.ratti).toBe(6.0);
    expect(w.carats).toBeGreaterThan(5.0);
  });
});
