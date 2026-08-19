import { describe, it, expect } from 'vitest';
import { isGanaDoshaCancelled } from '../src/lib/synastry/ganaKootaExceptions';

describe('Gana Koota Exceptions', () => {
  it('cancels dosha if Moon lords are friends', () => {
    expect(isGanaDoshaCancelled(true, false)).toBe(true);
  });
});
