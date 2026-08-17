import { describe, it, expect } from 'vitest';
import { getKakshyaLord } from '../src/lib/gochara/kakshyaTransits';

describe('Kakshya Transits', () => {
  it('assigns Saturn to 1st Kakshya (0° - 3°45')', () => {
    expect(getKakshyaLord(2.0)).toBe('Saturn');
  });
});
