import { describe, it, expect } from 'vitest';
import { checkKarmicDebt } from '../src/lib/numerology/karmicDebtNumbers';

describe('Karmic Debt Numbers', () => {
  it('identifies 16 as Karmic Debt number', () => {
    expect(checkKarmicDebt(16).isKarmic).toBe(true);
    expect(checkKarmicDebt(15).isKarmic).toBe(false);
  });
});
