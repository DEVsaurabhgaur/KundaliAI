import { describe, it, expect } from 'vitest';
import { evaluateMarsSaturnNadi } from '../src/lib/nadi/marsSaturnNadi';

describe('Mars-Saturn Nadi', () => {
  it('describes heavy industrial engineering', () => {
    expect(evaluateMarsSaturnNadi()).toContain('industrial engineering');
  });
});
