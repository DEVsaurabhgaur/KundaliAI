import { describe, it, expect } from 'vitest';
import { isEkargalaActive } from '../src/lib/muhurta/ekargalaDosha';

describe('Ekargala Dosha', () => {
  it('detects active star line obstruction', () => {
    expect(isEkargalaActive(10, 17)).toBe(true);
  });
});
