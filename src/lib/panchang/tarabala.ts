/**
 * Tarabala (9 Tara Constellation Strengths)
 * 1: Janma, 2: Sampat (Favorable), 3: Vipat, 4: Kshema (Favorable), 5: Pratyak,
 * 6: Sadhana (Favorable), 7: Naidhana, 8: Mitra (Favorable), 9: Parama Mitra (Favorable)
 */

export function calculateTarabala(natalNakshatra: number, transitNakshatra: number) {
  const count = ((transitNakshatra - natalNakshatra + 27) % 27) + 1;
  const taraNum = ((count - 1) % 9) + 1;
  const isAuspicious = [2, 4, 6, 8, 9].includes(taraNum);

  const TARA_NAMES = [
    'Janma (Danger/Caution)', 'Sampat (Prosperity & Gains)', 'Vipat (Obstacles)',
    'Kshema (Well-being & Safety)', 'Pratyak (Opposition)', 'Sadhana (Success & Attainment)',
    'Naidhana (Severe Affliction)', 'Mitra (Friendly Support)', 'Parama Mitra (Supreme Divine Favor)'
  ];

  return {
    taraNumber: taraNum,
    taraName: TARA_NAMES[taraNum - 1],
    isAuspicious
  };
}
