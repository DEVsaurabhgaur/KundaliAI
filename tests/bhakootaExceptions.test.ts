import { describe, it, expect } from 'vitest';
import { isBhakootDoshaCancelled } from '../src/lib/synastry/bhakootaExceptions';

describe('Bhakoot Dosha Exceptions', () => {
  it('cancels dosha when both signs have same lord', () => {
    expect(isBhakootDoshaCancelled(true, false)).toBe(true);
  });
});
