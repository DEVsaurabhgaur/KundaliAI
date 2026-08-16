import { describe, it, expect } from 'vitest';
import { ASHTA_DIKPALAS } from '../src/lib/vastu/ashtaDikpalas';

describe('Ashta Dikpalas', () => {
  it('includes 8 cardinal directional guardians', () => {
    expect(ASHTA_DIKPALAS).toHaveLength(8);
  });
});
