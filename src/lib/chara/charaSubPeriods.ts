/**
 * Chara Dasha Antardasha (Sub-Period) Generator
 * Each major Dasha sign is sub-divided into 12 sub-periods of equal proportional duration.
 */

export function getCharaSubPeriods(majorSignIndex: number, totalMajorYears: number) {
  const monthsPerSub = (totalMajorYears * 12) / 12;
  const subPeriods = [];

  for (let i = 0; i < 12; i++) {
    const subSign = (majorSignIndex + i) % 12;
    subPeriods.push({
      subSignIndex: subSign,
      durationMonths: monthsPerSub
    });
  }
  return subPeriods;
}
