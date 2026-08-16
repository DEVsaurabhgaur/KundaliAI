import { describe, it, expect } from 'vitest';
import { checkPushkaraNavamsha } from '../src/lib/career/pushkaraNavamsha';

describe('Pushkara Navamsha Verification', () => {
  it('validates 21 degrees in Aries as Pushkara Navamsha', () => {
    expect(checkPushkaraNavamsha(0, 21.0)).toBe(true);
    expect(checkPushkaraNavamsha(0, 5.0)).toBe(false);
  });
});
