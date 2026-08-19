import { describe, it, expect } from 'vitest';
import { isKujaDoshaCancelled } from '../src/lib/synastry/kujaDoshaExceptions';

describe('Kuja Dosha Exceptions', () => {
  it('cancels dosha when Mars in Capricorn in 7th house', () => {
    expect(isKujaDoshaCancelled(7, 9, false)).toBe(true);
  });
});
