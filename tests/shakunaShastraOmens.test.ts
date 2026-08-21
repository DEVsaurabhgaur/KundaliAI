import { describe, it, expect } from 'vitest';
import { evaluateShakuna } from '../src/lib/nimitta/shakunaShastraOmens';

describe('Shakuna Omens', () => {
  it('evaluates Cow Mooeing as auspicious', () => {
    expect(evaluateShakuna('CowMooeing').isAuspicious).toBe(true);
  });
});
