import { describe, it, expect } from 'vitest';
import { checkDKHarmony } from '../src/lib/synastry/darakarakaMatching';

describe('Darakaraka Harmony', () => {
  it('validates friendship between Jupiter and Sun', () => {
    expect(checkDKHarmony('Jupiter', 'Sun')).toBe(true);
  });
});
