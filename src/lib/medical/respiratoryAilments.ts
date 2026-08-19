/**
 * Shwasa Roga (Respiratory / Pulmonary Health)
 */

export function checkRespiratoryVulnerability(is3rdHouseAfflicted: boolean, isMercuryOrMoonAfflicted: boolean): boolean {
  return is3rdHouseAfflicted && isMercuryOrMoonAfflicted;
}
