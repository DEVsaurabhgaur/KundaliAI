import { describe, it, expect } from 'vitest';
import { isRoomPlacementIdeal } from '../src/lib/vastu/roomSuitabilityMatrix';

describe('Room Suitability Matrix', () => {
  it('approves Kitchen in Southeast', () => {
    expect(isRoomPlacementIdeal('Kitchen / Cooking', 'Southeast')).toBe(true);
  });
});
