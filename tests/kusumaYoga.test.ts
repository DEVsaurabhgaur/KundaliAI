import { describe, it, expect } from 'vitest';
import { checkKusumaYoga } from '../src/lib/yogas/kusumaYoga';

describe('Kusuma Yoga', () => {
  it('confirms yoga when Jupiter in Lagna and Moon in 7th', () => {
    expect(checkKusumaYoga(true)).toBe(true);
  });
});
