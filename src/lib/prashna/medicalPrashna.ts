/**
 * Roga (Medical Horary) Prashna
 */

export function evaluateMedicalPrashna(lagnaLordStrong: boolean, is8thHouseFreeOfMalefics: boolean) {
  const isQuickRecovery = lagnaLordStrong && is8thHouseFreeOfMalefics;
  return {
    isQuickRecovery,
    prognosis: isQuickRecovery ? 'Swift recovery with therapeutic treatments.' : 'Gradual recovery requiring continuous medical care.'
  };
}
