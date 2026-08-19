import { describe, it, expect } from 'vitest';
import { generateShoolSequence } from '../src/lib/sthira/shoolDashaEngine';

describe('Shool Dasha Engine', () => {
  it('generates 12 periods of 7 years each', () => {
    const seq = generateShoolSequence(7);
    expect(seq).toHaveLength(12);
    expect(seq[0].durationYears).toBe(7);
  });
});
