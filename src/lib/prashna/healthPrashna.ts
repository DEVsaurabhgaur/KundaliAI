/**
 * Health & Medical Recovery Prashna
 * 1st house = Patient, 6th house = Illness, 7th house = Doctor, 10th house = Treatment/Medicine
 */

export function evaluateHealthPrashna(is10thLordStrong: boolean, is6thLordDebilitated: boolean) {
  const isSpeedyRecovery = is10thLordStrong || is6thLordDebilitated;
  return {
    recoveryOutlook: isSpeedyRecovery ? 'Rapid & Complete Recovery' : 'Extended Treatment Required',
    treatmentEfficacy: is10thLordStrong ? 'Prescribed treatment is highly potent.' : 'Consider seeking a secondary medical opinion.'
  };
}
