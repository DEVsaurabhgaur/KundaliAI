import { describe, it, expect } from 'vitest';
import { isNadiDoshaCancelled } from '../src/lib/synastry/nadiDoshaCancellations';

describe('Nadi Dosha Cancellation', () => {
  it('cancels dosha if Padas are different', () => {
    expect(isNadiDoshaCancelled(false, true)).toBe(true);
  });
});
