/**
 * Grahana (Eclipse) Mundane Impact
 */

export function evaluateEclipseMundaneImpact(eclipseSign: number, countryLagnaSign: number): string {
  const diff = (eclipseSign - countryLagnaSign + 12) % 12;
  if (diff === 0) return 'Lagna Eclipse: Sovereign leadership policy shifts and economic volatility.';
  if (diff === 9) return '10th House Eclipse: Government leadership and administration transformation.';
  return 'General national transit adaptation.';
}
