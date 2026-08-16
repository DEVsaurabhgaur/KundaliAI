import { describe, it, expect } from 'vitest';
import { isYogadaPlanet } from '../src/lib/career/yogadaPlanets';

describe('Yogada Planets', () => {
  it('validates simultaneous aspect on Lagna and Hora Lagna', () => {
    expect(isYogadaPlanet(true, true)).toBe(true);
    expect(isYogadaPlanet(true, false)).toBe(false);
  });
});
