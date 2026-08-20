import { describe, it, expect } from 'vitest';
import { evaluateTravelPrashna } from '../src/lib/prashna/travelPrashna';

describe('Travel Prashna', () => {
  it('approves journey when 4th and 9th houses are strong', () => {
    expect(evaluateTravelPrashna(true, true).isFavorable).toBe(true);
  });
});
