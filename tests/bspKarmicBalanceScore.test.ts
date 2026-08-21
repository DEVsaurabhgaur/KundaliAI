import { describe, it, expect } from 'vitest';
import { calculateBSPKarmicBalance } from '../src/lib/bsp/bspKarmicBalanceScore';

describe('BSP Karmic Balance', () => {
  it('recognizes trinal harmony (5/9) between Saturn and Jupiter', () => {
    expect(calculateBSPKarmicBalance(1, 5)).toContain('Dharma');
  });
});
