import { describe, it, expect } from 'vitest';
import { checkChandraKalanalState } from '../src/lib/chandraKalanalChakra';

describe('Chandra Kalanal Chakra', () => {
  it('evaluates lunar emotional tone', () => {
    const state = checkChandraKalanalState(1, 0);
    expect(state.emotionalTone).toBe('Uplifted');
  });
});
