import { describe, it, expect } from 'vitest';
import { evaluateSAVHouse } from '../src/lib/pinda/samudayaSAVScore';

describe('SAV House Score', () => {
  it('rates 32+ bindus as Supreme Fortune', () => {
    expect(evaluateSAVHouse(34)).toContain('Supreme Fortune');
  });
});
