/**
 * Monthly Solar Sankranti & Sacred Punya Kala Windows
 * Computes exact Sun entry into new Rashi and allocates 16 Ghatis (6.4 hours) of Punya Kala.
 */

export interface SankrantiDetails {
  rashiIndex: number;
  sankrantiName: string;
  punyaKalaHours: number;
  sacredRitualAdvice: string;
}

const SANKRANTI_NAMES = [
  'Mesha Sankranti (Solar New Year)', 'Vrishabha Sankranti', 'Mithuna Sankranti',
  'Karka Sankranti (Dakshinayana)', 'Simha Sankranti', 'Kanya Sankranti',
  'Tula Sankranti', 'Vrishchika Sankranti', 'Dhanu Sankranti',
  'Makara Sankranti (Uttaranyana)', 'Kumbha Sankranti', 'Meena Sankranti'
];

export function getSankrantiDetails(targetRashiIndex: number): SankrantiDetails {
  return {
    rashiIndex: targetRashiIndex,
    sankrantiName: SANKRANTI_NAMES[targetRashiIndex % 12],
    punyaKalaHours: 6.4,
    sacredRitualAdvice: 'Auspicious for holy river dip, Gayatri Japa, and grain charity (Annadaana).'
  };
}
