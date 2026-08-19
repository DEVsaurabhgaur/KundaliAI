import { describe, it, expect } from 'vitest';
import { getNavamshaGana } from '../src/lib/sthira/devaManushyaGanaNavamsha';

describe('Navamsha Gana', () => {
  it('assigns Deva to sign 0 and Manushya to sign 1', () => {
    expect(getNavamshaGana(0)).toBe('Deva');
    expect(getNavamshaGana(1)).toBe('Manushya');
  });
});
