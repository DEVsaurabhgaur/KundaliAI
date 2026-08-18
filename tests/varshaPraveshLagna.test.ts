import { describe, it, expect } from 'vitest';
import { calculateVarshaPraveshLagna } from '../src/lib/tajika/varshaPraveshLagna';

describe('Varsha Pravesh Lagna', () => {
  it('computes valid degree within 0 to 360', () => {
    const lagna = calculateVarshaPraveshLagna(Date.now(), 28.61, 77.2);
    expect(lagna).toBeGreaterThanOrEqual(0);
    expect(lagna).toBeLessThan(360);
  });
});
