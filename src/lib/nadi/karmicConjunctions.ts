/**
 * BNN Karmic Conjunctions
 */

export function evaluateNadiConjunction(p1: string, p2: string): string {
  const pair = [p1, p2].sort().join('-');
  const NADI_YOGAS: Record<string, string> = {
    'Jupiter-Saturn': 'Dharma-Karmadhipati Yoga: Exceptional dedication to righteous vocation.',
    'Ketu-Venus': 'Mukti-Bhoga Conflict: Spiritual detachment from worldly possessions or marital delays.',
    'Mars-Rahu': 'Angarak Yoga: Explosive mechanical, electrical, and physical kinetic drive.',
    'Jupiter-Sun': 'Guru-Aditya Yoga: Supreme administrative wisdom, government patronage.',
    'Jupiter-Moon': 'Gaja-Kesari Nadi: Constant travels, high social esteem, philanthropic grace.'
  };

  return NADI_YOGAS[pair] || 'Harmonious interaction of planetary frequencies.';
}
