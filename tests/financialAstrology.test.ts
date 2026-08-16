import { describe, it, expect } from 'vitest';
import { COMMODITY_RULERS } from '../src/lib/career/financialAstrology';

describe('Financial Astrology', () => {
  it('maps Gold to Sun and Jupiter', () => {
    expect(COMMODITY_RULERS['Gold']).toContain('Sun');
    expect(COMMODITY_RULERS['Gold']).toContain('Jupiter');
  });
});
