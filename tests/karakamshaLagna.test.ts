import { describe, it, expect } from 'vitest';
import { getKarakamshaLagna } from '../src/lib/career/karakamshaLagna';

describe('Karakamsha Lagna', () => {
  it('returns soul direction statement', () => {
    const str = getKarakamshaLagna('Sagittarius');
    expect(str).toContain('Sagittarius');
  });
});
