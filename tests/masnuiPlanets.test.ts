import { describe, it, expect } from 'vitest';
import { getMasnuiCompound } from '../src/lib/lalkitab/masnuiPlanets';

describe('Masnui Synthetic Planets', () => {
  it('combines Sun and Saturn to produce Mercury', () => {
    expect(getMasnuiCompound('Sun', 'Saturn')).toBe('Mercury');
  });
});
