import { describe, it, expect } from 'vitest';
import { getDayChoghadiya } from '../src/lib/choghadiya';

describe('Hooks Utilities Testing', () => {
  it('validates choghadiya slot structure', () => {
    const slots = getDayChoghadiya(0);
    expect(slots[0]).toHaveProperty('isAuspicious');
    expect(slots[0]).toHaveProperty('name');
  });
});
