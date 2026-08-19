import { describe, it, expect } from 'vitest';
import { applyEkadhipatyaReduction } from '../src/lib/pinda/ekadhipatyaReductionRules';

describe('Ekadhipatya Shodhana', () => {
  it('takes minimum bindus when neither sign is occupied', () => {
    const res = applyEkadhipatyaReduction(4, 2, false, false);
    expect(res.a).toBe(2);
    expect(res.b).toBe(2);
  });
});
