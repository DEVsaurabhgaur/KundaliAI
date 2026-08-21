import { describe, it, expect } from 'vitest';
import { getAndhaTevaRemedy } from '../src/lib/lalkitab/blindHoroscopeRemedies';

describe('Andha Teva Remedies', () => {
  it('recommends serving meals to 10 visually impaired persons', () => {
    expect(getAndhaTevaRemedy()).toContain('10 visually impaired');
  });
});
