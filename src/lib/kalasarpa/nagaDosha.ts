/**
 * Naga Dosha (Affliction to 5th House or 5th Lord by Rahu/Mars)
 */

export function evaluateNagaDosha(is5thHouseWithRahu: boolean, isJupiterAfflicted: boolean) {
  const hasDosha = is5thHouseWithRahu || isJupiterAfflicted;
  return {
    hasNagaDosha: hasDosha,
    remedy: hasDosha ? 'Sarpa Samskara at Kukke Subramanya or silver serpent offering at Shiva shrine.' : 'Clean 5th house: Progeny blessings intact.'
  };
}
