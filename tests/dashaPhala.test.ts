import { describe, it, expect } from 'vitest';
import { getDashaInterpretation } from '../src/lib/dasha/dashaPhala';

describe('Dasha Phala Forecasts', () => {
  it('returns structured text for Jupiter-Venus period', () => {
    const text = getDashaInterpretation('Jupiter', 'Venus');
    expect(text).toContain('Jupiter-Venus');
  });
});
