import { describe, it, expect } from 'vitest';
import { CHARA_KARAKA_ROLES } from '../src/lib/jaimini/charaKarakaDetails';

describe('Chara Karaka Profiles', () => {
  it('describes Atmakaraka as soul king', () => {
    expect(CHARA_KARAKA_ROLES.AK.title).toBe('Atmakaraka');
  });
});
