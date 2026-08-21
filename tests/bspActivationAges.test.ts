import { describe, it, expect } from 'vitest';
import { getBSPActivationAge } from '../src/lib/bsp/bspActivationAges';

describe('BSP Activation Ages', () => {
  it('allocates 22y to Sun, 28y to Mars, 36y to Saturn', () => {
    expect(getBSPActivationAge('Sun')).toEqual([22]);
    expect(getBSPActivationAge('Mars')).toEqual([28]);
    expect(getBSPActivationAge('Saturn')).toEqual([36]);
  });
});
