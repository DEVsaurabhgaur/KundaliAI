import { describe, it, expect } from 'vitest';
import { BNN_KARAKAS } from '../src/lib/nadi/planetaryKarakattwas';

describe('BNN Karakattwas', () => {
  it('maps Jupiter to Jeeva and Saturn to Karma', () => {
    expect(BNN_KARAKAS.Jupiter).toContain('Jeeva');
    expect(BNN_KARAKAS.Saturn).toContain('Karma');
  });
});
