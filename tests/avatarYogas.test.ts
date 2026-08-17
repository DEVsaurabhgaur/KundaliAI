import { describe, it, expect } from 'vitest';
import { checkPadmaYoga } from '../src/lib/yogas/avatarYogas';

describe('Padma Yoga', () => {
  it('confirms yoga when all benefics occupy Kendras', () => {
    expect(checkPadmaYoga(true)).toBe(true);
  });
});
