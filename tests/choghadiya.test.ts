import { describe, it, expect } from 'vitest';
import { getDayChoghadiya } from '../src/lib/choghadiya';

describe('Choghadiya Allocations', () => {
  it('returns 8 daytime slots for Monday', () => {
    const slots = getDayChoghadiya(1);
    expect(slots).toHaveLength(8);
    expect(slots[0].name).toBe('Amrit');
  });
});
