import { describe, it, expect } from 'vitest';
import { evaluateStaircase } from '../src/lib/vastu/staircaseDirectionRules';

describe('Staircase Placement', () => {
  it('confirms clockwise staircase in South as optimal', () => {
    expect(evaluateStaircase('South', true).isOptimal).toBe(true);
  });
});
