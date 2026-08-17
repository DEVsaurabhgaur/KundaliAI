import { describe, it, expect } from 'vitest';
import { calculateVarnadaLagna } from '../src/lib/jaimini/varnadaLagna';

describe('Varnada Lagna', () => {
  it('combines Lagna and Hora Lagna signs', () => {
    expect(calculateVarnadaLagna(0, 4)).toBe(4);
  });
});
