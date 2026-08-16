import { describe, it, expect } from 'vitest';
import { checkKarmicDebt } from '../src/lib/numerology/karmicDebtNumbers';

describe('Karmic Debt Numbers', () => {
  it('flags 13, 14, 16, 19 as karmic debt numbers', () => {
    expect(checkKarmicDebt(16).isKarmicDebt).toBe(true);
    expect(checkKarmicDebt(15).isKarmicDebt).toBe(false);
  });
});
