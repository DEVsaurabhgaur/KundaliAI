/**
 * Tarabala and Chandrabala Evaluator
 * 9 Taras: Janma, Sampat, Vipat, Kshema, Pratyak, Sadhana, Naidhana, Mitra, Parama Mitra
 */

export interface TarabalaResult {
  taraNumber: number;
  taraName: string;
  isBenefic: boolean;
  score: number;
}

const TARA_NAMES = [
  'Janma (Body/Mind)', 'Sampat (Wealth)', 'Vipat (Dangers)',
  'Kshema (Well-being)', 'Pratyak (Obstacles)', 'Sadhana (Success)',
  'Naidhana (Loss/Destruction)', 'Mitra (Friendly)', 'Parama Mitra (Supreme Friend)'
];

export function evaluateTarabala(
  birthNakshatraIndex: number, // 0 to 26
  transitNakshatraIndex: number // 0 to 26
): TarabalaResult {
  const diff = ((transitNakshatraIndex - birthNakshatraIndex + 27) % 27) + 1;
  const taraNum = ((diff - 1) % 9) + 1; // 1 to 9

  // Auspicious Taras: 2 (Sampat), 4 (Kshema), 6 (Sadhana), 8 (Mitra), 9 (Parama Mitra)
  const isBenefic = [2, 4, 6, 8, 9].includes(taraNum);

  return {
    taraNumber: taraNum,
    taraName: TARA_NAMES[taraNum - 1],
    isBenefic,
    score: isBenefic ? 1 : 0
  };
}
