import { describe, it, expect } from 'vitest';
import { calculateInauspiciousSlots } from '../src/lib/inauspiciousTimings';

describe('Inauspicious Timers (Panchang)', () => {
  it('calculates Rahu Kalam and Yamaganda for Sunday', () => {
    const slots = calculateInauspiciousSlots(0);
    expect(slots).toHaveLength(3);
    expect(slots[0].name).toBe('Rahu Kalam');
  });
});
