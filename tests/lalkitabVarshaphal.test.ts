import { describe, it, expect } from 'vitest';
import { generateLalKitabVarshaphal } from '../src/lib/lalkitab/lalkitabVarshaphal';

describe('Lal Kitab Varshaphal Shifts', () => {
  it('rotates planetary houses by age shift', () => {
    const natal = { Sun: 1, Moon: 4 };
    const annual = generateLalKitabVarshaphal(natal, 1);
    expect(annual.Sun).toBe(2);
    expect(annual.Moon).toBe(5);
  });
});
