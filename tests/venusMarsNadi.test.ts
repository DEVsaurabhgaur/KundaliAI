import { describe, it, expect } from 'vitest';
import { evaluateVenusMarsNadi } from '../src/lib/nadi/venusMarsNadi';

describe('Venus-Mars Nadi', () => {
  it('describes luxury real estate and creative pursuits', () => {
    expect(evaluateVenusMarsNadi()).toContain('luxury real estate');
  });
});
