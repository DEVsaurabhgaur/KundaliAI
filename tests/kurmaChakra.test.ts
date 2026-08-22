import { describe, it, expect } from 'vitest';
import { getKurmaSector } from '../src/lib/medini/kurmaChakra';

describe('Kurma Chakra', () => {
  it('maps Krittika to Center and Ardra to East', () => {
    expect(getKurmaSector('Krittika')).toBe('Center');
    expect(getKurmaSector('Ardra')).toBe('East');
  });
});
