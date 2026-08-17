import { describe, it, expect } from 'vitest';
import { getSankrantiDetails } from '../src/lib/panchang/sankrantiPunyaKala';

describe('Sankranti Punya Kala', () => {
  it('returns Mesha Sankranti for Aries ingress', () => {
    const s = getSankrantiDetails(0);
    expect(s.sankrantiName).toContain('Mesha');
  });
});
