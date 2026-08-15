import { describe, it, expect } from 'vitest';
import { calculateNavamsha } from '../src/lib/navamsha';

describe('Navamsha D9 Calculation Engine', () => {
  it('correctly maps 0 degrees Aries to Aries Navamsha (Pada 1)', () => {
    const result = calculateNavamsha('Sun', 0);
    expect(result.navamshaSignName).toBe('Aries');
    expect(result.pada).toBe(1);
    expect(result.isVargottama).toBe(true);
  });

  it('correctly maps 10 degrees Aries to Gemini Navamsha (Pada 4)', () => {
    const result = calculateNavamsha('Moon', 10.0);
    expect(result.navamshaSignName).toBe('Cancer');
    expect(result.pada).toBe(4);
  });
});
