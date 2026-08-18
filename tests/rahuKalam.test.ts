import { describe, it, expect } from 'vitest';
import { getRahuKalamSegment } from '../src/lib/muhurta/rahuKalam';

describe('Rahu Kalam', () => {
  it('assigns 8th segment on Sunday and 2nd on Monday', () => {
    expect(getRahuKalamSegment(0)).toBe(8);
    expect(getRahuKalamSegment(1)).toBe(2);
  });
});
