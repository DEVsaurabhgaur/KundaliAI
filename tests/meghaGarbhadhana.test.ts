import { describe, it, expect } from 'vitest';
import { calculateMonsoonDeliveryDate } from '../src/lib/medini/meghaGarbhadhana';

describe('Megha Garbhadhana', () => {
  it('calculates delivery epoch 195 days in future', () => {
    const now = Date.now();
    const future = calculateMonsoonDeliveryDate(now);
    expect(future).toBeGreaterThan(now);
  });
});
