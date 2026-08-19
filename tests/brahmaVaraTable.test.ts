import { describe, it, expect } from 'vitest';
import { getBrahmaVaraLifespanCategory } from '../src/lib/sthira/brahmaVaraTable';

describe('Brahma Vara Lifespan', () => {
  it('classifies Purnayu when neither short nor medium', () => {
    expect(getBrahmaVaraLifespanCategory(false, false)).toContain('Purnayu');
  });
});
