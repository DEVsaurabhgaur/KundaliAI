/**
 * Vastu Room Placement Matrix
 */

export const IDEAL_ROOM_DIRECTIONS: Record<string, string[]> = {
  'Pooja Room / Meditation': ['Northeast', 'East', 'North'],
  'Kitchen / Cooking': ['Southeast', 'Northwest'],
  'Master Bedroom': ['Southwest', 'South'],
  'Children Study': ['East', 'North', 'Northeast'],
  'Living / Guest Room': ['Northwest', 'North', 'East'],
  'Underground Water Tank': ['Northeast', 'North'],
  'Overhead Water Tank': ['Southwest', 'West']
};

export function isRoomPlacementIdeal(roomType: string, direction: string): boolean {
  const ideals = IDEAL_ROOM_DIRECTIONS[roomType] || [];
  return ideals.includes(direction);
}
