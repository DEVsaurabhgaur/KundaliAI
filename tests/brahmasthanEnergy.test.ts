import { describe, it, expect } from 'vitest';
import { evaluateBrahmasthan } from '../src/lib/vastu/brahmasthanEnergy';

describe('Brahmasthan Energy', () => {
  it('confirms pristine state when open and unburdened', () => {
    const res = evaluateBrahmasthan(false, false, true);
    expect(res.isPristine).toBe(true);
  });
});
