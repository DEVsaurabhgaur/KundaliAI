/**
 * Guru-Shukra Tara Shuddhi (Combustion / Astangata Check)
 * No major life ceremonies (like Vivaha) may be held when Jupiter or Venus is combust (Tara Doobna).
 */

export function checkTaraShuddhi(isJupiterCombust: boolean, isVenusCombust: boolean): boolean {
  return !isJupiterCombust && !isVenusCombust;
}
