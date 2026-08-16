import { describe, it, expect } from 'vitest';
import { checkLalKitabSight } from '../src/lib/lalkitab/lalkitabAspects';

describe('Lal Kitab Sight Rules', () => {
  it('verifies 1st house has 100% sight on 7th house', () => {
    expect(checkLalKitabSight(1, 7)).toBe(100);
    expect(checkLalKitabSight(1, 5)).toBe(0);
  });
});
