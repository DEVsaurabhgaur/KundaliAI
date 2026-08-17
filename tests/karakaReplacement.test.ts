import { describe, it, expect } from 'vitest';
import { resolveKarakaTie } from '../src/lib/jaimini/karakaReplacement';

describe('Karaka Replacement', () => {
  it('resolves ties by higher arcseconds', () => {
    const sorted = resolveKarakaTie([{ name: 'Sun', arcSeconds: 50 }, { name: 'Moon', arcSeconds: 30 }]);
    expect(sorted[0].name).toBe('Sun');
  });
});
