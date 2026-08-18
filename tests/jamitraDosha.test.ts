import { describe, it, expect } from 'vitest';
import { checkJamitraDosha } from '../src/lib/muhurta/jamitraDosha';

describe('Jamitra Dosha', () => {
  it('flags affliction when malefic occupies 7th house', () => {
    expect(checkJamitraDosha(true)).toBe(true);
    expect(checkJamitraDosha(false)).toBe(false);
  });
});
