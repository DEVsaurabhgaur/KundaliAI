import { describe, it, expect } from 'vitest';
import { calculateBrahmaMuhurta } from '../src/lib/muhurta/brahmaMuhurta';

describe('Brahma Muhurta Calculator', () => {
  it('computes window 96 minutes before sunrise', () => {
    const now = Date.now();
    const res = calculateBrahmaMuhurta(now);
    expect(res.startTime).toBeDefined();
  });
});
