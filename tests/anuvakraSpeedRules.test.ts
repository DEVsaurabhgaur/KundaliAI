import { describe, it, expect } from 'vitest';
import { isAnuvakra } from '../src/lib/speed/anuvakraSpeedRules';

describe('Anuvakra Speed', () => {
  it('identifies accelerating retrograde motion', () => {
    expect(isAnuvakra(true, true)).toBe(true);
  });
});
