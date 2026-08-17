import { describe, it, expect } from 'vitest';
import { calculateSubSubLord } from '../src/lib/kp/subSubLords';

describe('Sub-Sub Lord Calculation', () => {
  it('returns valid planet for sub-arc', () => {
    const lord = calculateSubSubLord('Venus', 5);
    expect(lord).toBeDefined();
  });
});
