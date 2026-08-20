import { describe, it, expect } from 'vitest';
import { locateMissingObject } from '../src/lib/prashna/missingObjectLocator';

describe('Missing Object Locator', () => {
  it('locates direction based on sign element', () => {
    const loc = locateMissingObject(0); // Aries (Fire -> East)
    expect(loc.suggestedLocation).toContain('East');
  });
});
