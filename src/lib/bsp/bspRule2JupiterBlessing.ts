/**
 * Bhrigu Saral Paddhati (BSP) - Rule 2
 * Jupiter permanently protects the 5th and 9th houses from itself, and actively blossoms the 2nd house from its placement during the native's 32nd year.
 */

export function calculateBSP2JupiterBlessing(jupiterHouse: number) {
  return {
    blessed5th: ((jupiterHouse + 4) % 12) + 1,
    blessed9th: ((jupiterHouse + 8) % 12) + 1,
    activated2ndIn32ndYear: ((jupiterHouse) % 12) + 1
  };
}
