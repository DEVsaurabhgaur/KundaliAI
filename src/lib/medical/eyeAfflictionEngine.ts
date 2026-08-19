/**
 * Netra Roga (Eye Affliction)
 * 2nd House: Right Eye | 12th House: Left Eye
 * Sun: Right Eye (Day) | Moon: Left Eye (Night)
 */

export function evaluateEyeHealth(is2ndHouseAfflicted: boolean, is12thHouseAfflicted: boolean) {
  return {
    rightEyeVulnerable: is2ndHouseAfflicted,
    leftEyeVulnerable: is12thHouseAfflicted,
    requiresCorrectiveOptics: is2ndHouseAfflicted || is12thHouseAfflicted
  };
}
