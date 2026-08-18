/**
 * Nadi Double Transit Principle (Guru + Shani Aspect on Natal Significator)
 */

export function checkNadiDoubleTransit(
  natalTargetSign: number,
  transitGuruSign: number,
  transitShaniSign: number
): boolean {
  // Returns true if both Guru and Shani activate target sign through conjunction, trine, or direct aspect
  const guruActivates = [natalTargetSign, (natalTargetSign + 4) % 12, (natalTargetSign + 8) % 12].includes(transitGuruSign);
  const shaniActivates = [natalTargetSign, (natalTargetSign + 2) % 12, (natalTargetSign + 6) % 12, (natalTargetSign + 9) % 12].includes(transitShaniSign);

  return guruActivates && shaniActivates;
}
