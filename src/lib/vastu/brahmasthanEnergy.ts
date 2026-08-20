/**
 * Brahmasthan (Sacred Center) Energy Matrix
 * Center 1/9th area of the plot must remain open, light, and free of heavy pillars/toilets.
 */

export function evaluateBrahmasthan(hasHeavyPillar: boolean, hasToilet: boolean, isOpenToSkyOrLight: boolean) {
  const isAfflicted = hasHeavyPillar || hasToilet;
  return {
    isPristine: !isAfflicted && isOpenToSkyOrLight,
    isAfflicted,
    recommendation: isAfflicted ? 'Brahmasthan Dosha: Clear heavy weight and avoid obstructions.' : 'Pristine central cosmic vortex promoting health.'
  };
}
