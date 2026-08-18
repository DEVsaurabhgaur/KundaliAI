import { describe, it, expect } from 'vitest';
import { checkTripatakiVedha } from '../src/lib/tajika/tripatakiChakra';

describe('Tripataki Chakra', () => {
  it('detects vedha when degrees are aligned within orb', () => {
    expect(checkTripatakiVedha(10.0, 12.0)).toBe(true);
  });
});
