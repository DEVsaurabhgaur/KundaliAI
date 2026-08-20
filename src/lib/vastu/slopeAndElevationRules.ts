/**
 * Vastu Plot Slope & Elevation Guidelines
 * Plot must slope downwards towards North or East for positive pranic flow.
 */

export function evaluatePlotSlope(slopeDirection: string): { isAuspicious: boolean; description: string } {
  const isGood = ['North', 'East', 'Northeast'].includes(slopeDirection);
  return {
    isAuspicious: isGood,
    description: isGood ? 'Auspicious Ishanya slope: Attracts prosperity and vital longevity.' : 'Inauspicious slope: Level the ground or install earth copper rods in South/West.'
  };
}
