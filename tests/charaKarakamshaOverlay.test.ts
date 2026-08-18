import { describe, it, expect } from 'vitest';
import { checkKarakamshaDasha } from '../src/lib/chara/charaKarakamshaOverlay';

describe('Karakamsha Overlay', () => {
  it('flags dasha when active sign matches or opposes Karakamsha', () => {
    expect(checkKarakamshaDasha(0, 0)).toBe(true);
    expect(checkKarakamshaDasha(0, 6)).toBe(true);
  });
});
