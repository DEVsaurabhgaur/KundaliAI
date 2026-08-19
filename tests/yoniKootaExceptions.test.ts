import { describe, it, expect } from 'vitest';
import { isYoniDoshaMitigated } from '../src/lib/synastry/yoniKootaExceptions';

describe('Yoni Koota Mitigation', () => {
  it('mitigates dosha when full Bhakoot and Nadi points are present', () => {
    expect(isYoniDoshaMitigated(true, true)).toBe(true);
  });
});
