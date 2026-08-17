import { describe, it, expect } from 'vitest';
import { getNakshatraSpan } from '../src/lib/panchang/nakshatraTransitions';

describe('Nakshatra Transitions', () => {
  it('calculates start and end degrees for 5 degrees longitude', () => {
    const span = getNakshatraSpan(5.0);
    expect(span.nakshatraIndex).toBe(0);
    expect(span.remainingDegrees).toBeGreaterThan(0);
  });
});
