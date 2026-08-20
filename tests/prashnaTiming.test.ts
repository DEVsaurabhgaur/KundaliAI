import { describe, it, expect } from 'vitest';
import { calculateEventTiming } from '../src/lib/prashna/prashnaTiming';

describe('Prashna Event Timing', () => {
  it('translates movable sign degrees to days', () => {
    expect(calculateEventTiming(3, 'Movable')).toContain('3 Days');
  });
});
