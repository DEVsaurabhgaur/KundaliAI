import { describe, it, expect } from 'vitest';
import { calculateLalKitabVarshaphalHouse } from '../src/lib/lalkitab/varshaphalaLalKitab';

describe('Lal Kitab Varshaphala', () => {
  it('rotates house based on running year of age', () => {
    const h = calculateLalKitabVarshaphalHouse(1, 2);
    expect(h).toBe(2);
  });
});
