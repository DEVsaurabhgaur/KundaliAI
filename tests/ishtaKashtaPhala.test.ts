import { describe, it, expect } from 'vitest';
import { calculateIshtaKashta } from '../src/lib/shadbala/ishtaKashtaPhala';

describe('Ishta and Kashta Phala', () => {
  it('calculates square root product ratios', () => {
    const res = calculateIshtaKashta(40, 40);
    expect(res.ishtaPhala).toBe(40);
    expect(res.kashtaPhala).toBe(20);
  });
});
