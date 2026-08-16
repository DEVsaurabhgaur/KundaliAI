import { describe, it, expect } from 'vitest';
import { calculateUpapadaLagna } from '../src/lib/career/upapadaLagna';

describe('Upapada Lagna (UL)', () => {
  it('computes 12th house arudha', () => {
    const ul = calculateUpapadaLagna(11, 2);
    expect(ul).toBeGreaterThanOrEqual(0);
    expect(ul).toBeLessThan(12);
  });
});
