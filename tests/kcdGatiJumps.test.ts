import { describe, it, expect } from 'vitest';
import { evaluateKCDJump } from '../src/lib/kcd/kcdGatiJumps';

describe('KCD Gati Jumps', () => {
  it('identifies Manduka Gati for 2-sign skip', () => {
    expect(evaluateKCDJump(0, 2)).toContain('Manduka');
  });
});
