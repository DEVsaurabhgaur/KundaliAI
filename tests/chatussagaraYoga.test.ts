import { describe, it, expect } from 'vitest';
import { checkChatussagaraYoga } from '../src/lib/yogas/chatussagaraYoga';

describe('Chatussagara Yoga', () => {
  it('confirms yoga when all 4 Kendras are occupied', () => {
    expect(checkChatussagaraYoga(4)).toBe(true);
  });
});
