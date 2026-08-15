import { describe, it, expect } from 'vitest';
import { checkManglikExemptions } from '../src/lib/mangalDoshaCancellations';

describe('Manglik Exemptions Engine', () => {
  it('cancels dosha when Mars is exalted in 7th house Capricorn', () => {
    const result = checkManglikExemptions(7, 'Capricorn', false, false);
    expect(result.isCancelled).toBe(true);
  });
});
