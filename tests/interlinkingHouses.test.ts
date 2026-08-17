import { describe, it, expect } from 'vitest';
import { verifyCuspInterlink } from '../src/lib/kp/interlinkingHouses';

describe('KP Cusp Interlinking', () => {
  it('confirms link when sub-lord matches star-lord', () => {
    expect(verifyCuspInterlink('Venus', 'Venus')).toBe(true);
    expect(verifyCuspInterlink('Venus', 'Mars')).toBe(false);
  });
});
