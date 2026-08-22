import { describe, it, expect } from 'vitest';
import { evaluateCombustionWithSpeed } from '../src/lib/speed/combustionSpeedInteraction';

describe('Combustion Speed', () => {
  it('identifies Volatile Combustion for Sheeghra combust planets', () => {
    expect(evaluateCombustionWithSpeed(true, true)).toContain('Volatile');
  });
});
