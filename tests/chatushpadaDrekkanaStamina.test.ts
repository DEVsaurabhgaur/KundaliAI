import { describe, it, expect } from 'vitest';
import { isChatushpadaDrekkana } from '../src/lib/drekkana/chatushpadaDrekkanaStamina';

describe('Chatushpada Drekkana', () => {
  it('identifies 1st decanate of Taurus as Chatushpada', () => {
    expect(isChatushpadaDrekkana(1, 1)).toBe(true);
  });
});
