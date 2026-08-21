/**
 * Lal Kitab: Masnui (Synthetic/Artificial) Planets
 * Sun + Saturn = Mercury
 * Sun + Jupiter = Ketu
 * Sun + Venus = Rahu
 * Mercury + Venus = Sun
 */

export function getMasnuiCompound(p1: string, p2: string): string {
  const pair = [p1, p2].sort().join('+');
  const COMPOUNDS: Record<string, string> = {
    'Saturn+Sun': 'Mercury',
    'Jupiter+Sun': 'Ketu',
    'Sun+Venus': 'Rahu',
    'Mercury+Venus': 'Sun'
  };
  return COMPOUNDS[pair] || 'Neutral Mixture';
}
