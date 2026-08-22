import { describe, it, expect } from 'vitest';
import { isRohiniShakataBhedana } from '../src/lib/medini/rohiniShakataBhedana';

describe('Rohini Shakata Bhedana', () => {
  it('detects Saturn piercing Rohini degree span (40° to 53.33°)', () => {
    expect(isRohiniShakataBhedana(45.0)).toBe(true);
    expect(isRohiniShakataBhedana(30.0)).toBe(false);
  });
});
