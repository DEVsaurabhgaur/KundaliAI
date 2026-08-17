import { describe, it, expect } from 'vitest';
import { getHoraryCuspDetails } from '../src/lib/kp/horaryNumber1to249';

describe('KP Horary 1-249', () => {
  it('maps seed 1 to initial Aries cusp', () => {
    const cusp = getHoraryCuspDetails(1);
    expect(cusp.sign).toBe('Aries');
  });
});
