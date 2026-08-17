import { describe, it, expect } from 'vitest';
import { STHIRA_KARAKAS } from '../src/lib/jaimini/sthiraKarakas';

describe('Sthira Karakas', () => {
  it('maps Father to Sun and Mother to Moon', () => {
    expect(STHIRA_KARAKAS['Father']).toBe('Sun');
    expect(STHIRA_KARAKAS['Mother']).toBe('Moon');
  });
});
