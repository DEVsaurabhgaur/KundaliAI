import { describe, it, expect } from 'vitest';
import { getMantraFrequency } from '../src/lib/remedies/beejMantraAudioFrequencies';

describe('Beej Mantra Frequencies', () => {
  it('returns 126.22 Hz for Sun', () => {
    expect(getMantraFrequency('Sun')).toBe(126.22);
  });
});
