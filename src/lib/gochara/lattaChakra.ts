/**
 * Latta Chakra (Planetary Kick / Stride on Nakshatras)
 * Forward Latta (Puro Latta): Sun (12th), Mars (3rd), Jupiter (6th), Saturn (8th)
 * Backward Latta (Prishta Latta): Moon (22nd), Mercury (7th), Venus (5th), Rahu (9th)
 */

export function calculateLattaNakshatra(planet: string, planetNakshatra: number): number {
  const FORWARD_OFFSETS: Record<string, number> = { Sun: 12, Mars: 3, Jupiter: 6, Saturn: 8 };
  const BACKWARD_OFFSETS: Record<string, number> = { Moon: 22, Mercury: 7, Venus: 5, Rahu: 9 };

  if (FORWARD_OFFSETS[planet]) {
    return (planetNakshatra + FORWARD_OFFSETS[planet] - 1) % 27;
  }
  if (BACKWARD_OFFSETS[planet]) {
    return (planetNakshatra - BACKWARD_OFFSETS[planet] + 27) % 27;
  }
  return planetNakshatra;
}
