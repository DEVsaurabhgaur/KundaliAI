import { describe, it, expect } from 'vitest';
import { calculateKharaPoints } from '../src/lib/medical/kharaNavamsha';

describe('Khara Navamsha', () => {
  it('computes 4th sign in Navamsha from Moon Navamsha', () => {
    const pts = calculateKharaPoints(0, 0);
    expect(pts.kharaNavamshaSignIndex).toBe(3);
  });
});
