import { describe, it, expect } from 'vitest';
import { evaluateSBCVedhas } from '../src/lib/sarvatobhadraChakra';

describe('Sarvatobhadra Chakra', () => {
  it('evaluates transit cross-vedhas', () => {
    const vedhas = evaluateSBCVedhas([{ name: 'Saturn', nakshatra: 5 }]);
    expect(vedhas).toHaveLength(1);
  });
});
