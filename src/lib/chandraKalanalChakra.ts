/**
 * Chandra Kalanal Chakra (Lunar Emotional Barometer)
 */

export function checkChandraKalanalState(moonTransitNak: number, natalMoonNak: number) {
  const diff = ((moonTransitNak - natalMoonNak + 27) % 27) + 1;
  return {
    distance: diff,
    emotionalTone: [2, 4, 6, 8, 9].includes(((diff - 1) % 9) + 1) ? 'Uplifted' : 'Introspective'
  };
}
