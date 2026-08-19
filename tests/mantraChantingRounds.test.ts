import { describe, it, expect } from 'vitest';
import { getJapaDetails } from '../src/lib/remedies/mantraChantingRounds';

describe('Mantra Chanting Counts', () => {
  it('allocates 19000 japas to Jupiter and 7000 to Sun', () => {
    expect(getJapaDetails('Jupiter').count).toBe(19000);
    expect(getJapaDetails('Sun').count).toBe(7000);
  });
});
