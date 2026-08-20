/**
 * Vastu Staircase Placement & Turning Rules
 */

export function evaluateStaircase(locationDirection: string, isClockwise: boolean) {
  const isLocationGood = ['South', 'West', 'Southwest'].includes(locationDirection);
  return {
    isOptimal: isLocationGood && isClockwise,
    advice: isLocationGood && isClockwise ? 'Perfect staircase alignment.' : 'Ensure staircase turns clockwise and is situated in South or West.'
  };
}
