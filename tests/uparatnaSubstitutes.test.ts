import { describe, it, expect } from 'vitest';
import { getUparatnas } from '../src/lib/remedies/uparatnaSubstitutes';

describe('Uparatna Substitutes', () => {
  it('returns Topaz and Citrine for Yellow Sapphire', () => {
    expect(getUparatnas('Yellow Sapphire')).toContain('Topaz');
  });
});
