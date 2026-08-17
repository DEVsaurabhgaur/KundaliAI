import { describe, it, expect } from 'vitest';
import { evaluateGuruTransit } from '../src/lib/gochara/guruGochara';

describe('Guru Gochara Engine', () => {
  it('flags 9th house from Moon as highly favorable', () => {
    const res = evaluateGuruTransit(0, 8); // 9th house
    expect(res.isFavorable).toBe(true);
  });
});
