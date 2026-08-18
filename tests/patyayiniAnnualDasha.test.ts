import { describe, it, expect } from 'vitest';
import { calculatePatyayiniDays } from '../src/lib/tajika/patyayiniAnnualDasha';

describe('Patyayini Annual Dasha', () => {
  it('allocates days proportional to degrees', () => {
    const days = calculatePatyayiniDays(15, 100);
    expect(days).toBeGreaterThan(50);
  });
});
