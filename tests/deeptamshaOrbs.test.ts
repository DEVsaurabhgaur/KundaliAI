import { describe, it, expect } from 'vitest';
import { getMoietyOrb } from '../src/lib/tajika/deeptamshaOrbs';

describe('Deeptamsha Orbs', () => {
  it('averages orbs between Sun (15) and Moon (12)', () => {
    expect(getMoietyOrb('Sun', 'Moon')).toBe(13.5);
  });
});
