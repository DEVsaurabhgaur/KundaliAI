import { describe, it, expect } from 'vitest';
import { isPlanetSleeping } from '../src/lib/lalkitab/soyaGrahRules';

describe('Soya Grah', () => {
  it('considers planet sleeping when target house is vacant', () => {
    expect(isPlanetSleeping(1, false)).toBe(true);
  });
});
