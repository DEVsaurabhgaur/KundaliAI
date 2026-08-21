import { describe, it, expect } from 'vitest';
import { isHouseSleeping } from '../src/lib/lalkitab/soyaGharAwakener';

describe('Soya Ghar', () => {
  it('flags vacant houses as sleeping', () => {
    expect(isHouseSleeping(2, [1, 4, 7, 10])).toBe(true);
    expect(isHouseSleeping(1, [1, 4, 7, 10])).toBe(false);
  });
});
