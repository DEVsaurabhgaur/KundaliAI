import { describe, it, expect } from 'vitest';
import { calculateSpecialNakshatras } from '../src/lib/specialNakshatras';

describe('Special Nakshatra Points', () => {
  it('calculates Karma, Sanghatika, Vainashika offsets', () => {
    const special = calculateSpecialNakshatras(0);
    expect(special.karma).toBe(9);
    expect(special.vainashika).toBe(22);
  });
});
