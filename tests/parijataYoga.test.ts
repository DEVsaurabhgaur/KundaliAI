import { describe, it, expect } from 'vitest';
import { checkParijataYoga } from '../src/lib/yogas/parijataYoga';

describe('Parijata Yoga', () => {
  it('confirms yoga when dispositor is elevated', () => {
    expect(checkParijataYoga(true)).toBe(true);
  });
});
