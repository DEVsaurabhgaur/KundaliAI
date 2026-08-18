import { describe, it, expect } from 'vitest';
import { calculateSthanaBala } from '../src/lib/shadbala/sthanaBala';

describe('Sthana Bala Breakdown', () => {
  it('sums 5 positional components', () => {
    const sthana = calculateSthanaBala(50, 45, 15, 60, 10);
    expect(sthana.totalSthanaBala).toBe(180);
  });
});
