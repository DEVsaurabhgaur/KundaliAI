import { describe, it, expect } from 'vitest';
import { calculateHoraLagna } from '../src/lib/jaimini/horaLagna';

describe('Hora Lagna (HL)', () => {
  it('advances 30 degrees per Hora (60 mins)', () => {
    const hl = calculateHoraLagna(0, 60);
    expect(hl).toBe(30);
  });
});
