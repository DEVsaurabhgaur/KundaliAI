import { describe, it, expect } from 'vitest';
import { reduceTrikonaGroup } from '../src/lib/pinda/trikonaReductionRules';

describe('Trikona Reduction', () => {
  it('subtracts minimum bindu in trine', () => {
    const res = reduceTrikonaGroup(5, 3, 4);
    expect(res).toEqual([2, 0, 1]);
  });
});
