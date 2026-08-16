import { describe, it, expect } from 'vitest';
import { getNakshatraPadaInfo } from '../src/lib/nakshatraPadas';

describe('108 Nakshatra Padas', () => {
  it('returns sound syllable for Ashwini Pada 1', () => {
    const info = getNakshatraPadaInfo(0, 1);
    expect(info.soundSyllable).toBe('Chu');
  });
});
