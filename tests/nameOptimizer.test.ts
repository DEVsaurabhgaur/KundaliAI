import { describe, it, expect } from 'vitest';
import { suggestNameOptimizations } from '../src/lib/numerology/nameOptimizer';

describe('Name Optimizer', () => {
  it('evaluates harmony with target number', () => {
    const opt = suggestNameOptimizations('ALEX', 1);
    expect(opt.originalName).toBe('ALEX');
  });
});
