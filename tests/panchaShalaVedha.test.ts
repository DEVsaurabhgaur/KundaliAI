import { describe, it, expect } from 'vitest';
import { isPanchaShalaVedha } from '../src/lib/sbc/panchaShalaVedha';

describe('Pancha Shala Vedha', () => {
  it('checks 5-line structural obstruction', () => {
    expect(isPanchaShalaVedha(2, 3)).toBe(true);
  });
});
