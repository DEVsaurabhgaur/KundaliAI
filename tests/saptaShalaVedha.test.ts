import { describe, it, expect } from 'vitest';
import { checkSaptaShalaVedha } from '../src/lib/sbc/saptaShalaVedha';

describe('Sapta Shala Vedha', () => {
  it('detects 14-star opposition obstruction', () => {
    expect(checkSaptaShalaVedha(0, 14)).toBe(true);
  });
});
