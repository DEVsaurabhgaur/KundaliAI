import { describe, it, expect } from 'vitest';
import { getConsecrationProcedure } from '../src/lib/remedies/gemstoneConsecration';

describe('Gemstone Consecration', () => {
  it('requires 108 mantra japa rounds', () => {
    expect(getConsecrationProcedure('Sun').mantraJapaCount).toBe(108);
  });
});
