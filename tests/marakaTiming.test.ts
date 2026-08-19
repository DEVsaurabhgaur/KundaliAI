import { describe, it, expect } from 'vitest';
import { isMarakaLord } from '../src/lib/medical/marakaTiming';

describe('Maraka Houses', () => {
  it('flags 2nd and 7th house lords as Marakas', () => {
    expect(isMarakaLord(2)).toBe(true);
    expect(isMarakaLord(7)).toBe(true);
    expect(isMarakaLord(5)).toBe(false);
  });
});
