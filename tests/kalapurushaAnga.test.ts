import { describe, it, expect } from 'vitest';
import { getBodyPartForSign } from '../src/lib/ayurjyotish/kalapurushaAnga';

describe('Kalapurusha Body Parts', () => {
  it('maps Aries to head and cranial structures', () => {
    expect(getBodyPartForSign('Aries')).toContain('Head');
  });
});
