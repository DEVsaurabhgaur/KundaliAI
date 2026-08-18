import { describe, it, expect } from 'vitest';
import { getHoraLord } from '../src/lib/muhurta/horaMuhurta';

describe('Planetary Hora Engine', () => {
  it('returns Sun for 1st hour on Sunday', () => {
    expect(getHoraLord(0, 0)).toBe('Sun');
  });
});
