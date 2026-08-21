import { describe, it, expect } from 'vitest';
import { evaluateRahuKetuTakkar } from '../src/lib/lalkitab/rahuKetuAxisLalKitab';

describe('Rahu-Ketu Takkar', () => {
  it('identifies 6-house opposition collision', () => {
    expect(evaluateRahuKetuTakkar(1, 7)).toBe(true);
  });
});
