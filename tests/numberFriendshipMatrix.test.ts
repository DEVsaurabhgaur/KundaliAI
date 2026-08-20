import { describe, it, expect } from 'vitest';
import { getNumberRelationship } from '../src/lib/numerology/numberFriendshipMatrix';

describe('Number Friendship Matrix', () => {
  it('identifies 1 and 9 as friends', () => {
    expect(getNumberRelationship(1, 9)).toBe('Friend');
    expect(getNumberRelationship(1, 8)).toBe('Enemy');
  });
});
