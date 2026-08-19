import { describe, it, expect } from 'vitest';
import { generateKakshyaMatrix } from '../src/lib/pinda/kakshyaTableGenerator';

describe('Kakshya Table Generator', () => {
  it('generates 8 kakshya slots', () => {
    const table = generateKakshyaMatrix([true, false, true, true, false, false, true, true]);
    expect(table).toHaveLength(8);
  });
});
