import { describe, it, expect } from 'vitest';
import { buildSAVMatrix } from '../src/lib/pinda/sarvashtakavargaMatrixGenerator';

describe('SAV Matrix Builder', () => {
  it('aggregates multiple BAV arrays into 12-sign sum', () => {
    const sav = buildSAVMatrix({ Sun: Array(12).fill(4), Moon: Array(12).fill(4) });
    expect(sav[0]).toBe(8);
  });
});
