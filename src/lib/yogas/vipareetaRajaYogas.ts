/**
 * Vipareeta Raja Yogas (Harsha, Sarala, Vimala)
 * Dusthana lords occupying other dusthana houses (6th, 8th, 12th).
 */

export function evaluateVipareetaRajaYogas(is6thIn6_8_12: boolean, is8thIn6_8_12: boolean, is12thIn6_8_12: boolean) {
  return {
    hasHarshaYoga: is6thIn6_8_12,
    hasSaralaYoga: is8thIn6_8_12,
    hasVimalaYoga: is12thIn6_8_12
  };
}
