import { describe, it, expect } from 'vitest';
import { evaluateSoyaKismat } from '../src/lib/lalkitab/soyaKismatAwakener';

describe('Soya Kismat', () => {
  it('flags dormant destiny when 9th and 10th houses are vacant', () => {
    expect(evaluateSoyaKismat(true, true).isDormant).toBe(true);
  });
});
