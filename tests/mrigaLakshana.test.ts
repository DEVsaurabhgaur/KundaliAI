import { describe, it, expect } from 'vitest';
import { evaluateAnimalMovement } from '../src/lib/nimitta/mrigaLakshana';

describe('Mriga Lakshana', () => {
  it('confirms clockwise pradakshina movement as auspicious', () => {
    expect(evaluateAnimalMovement(true)).toBe(true);
  });
});
