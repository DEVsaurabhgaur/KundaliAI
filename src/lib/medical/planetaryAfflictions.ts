/**
 * Planetary Affliction Pathology (Medical Astrology)
 */

export function evaluateMedicalAffliction(p1: string, p2: string): string {
  const key = [p1, p2].sort().join('-');
  const AFFLICTIONS: Record<string, string> = {
    'Saturn-Sun': 'Bone density vulnerabilities, cardiac strain, ocular pressure.',
    'Moon-Rahu': 'Psychosomatic sensitivity, anxiety patterns, lymphatic fluid imbalances.',
    'Ketu-Mars': 'Inflammatory flare-ups, surgical interventions, blood platelet vigilance.',
    'Mercury-Rahu': 'Nervous transmission tremors, skin allergies, respiratory hypersensitivity.',
    'Jupiter-Rahu': 'Metabolic enzyme imbalances, lipid accumulation, liver vigilance.'
  };

  return AFFLICTIONS[key] || 'Mild functional physiological sensitivity.';
}
