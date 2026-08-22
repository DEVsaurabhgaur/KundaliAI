/**
 * 12 Classical Kala Sarpa Yogas:
 * 1. Ananta (Rahu 1st - Ketu 7th)
 * 2. Kulika (Rahu 2nd - Ketu 8th)
 * 3. Vasuki (Rahu 3rd - Ketu 9th)
 * 4. Shankhapala (Rahu 4th - Ketu 10th)
 * 5. Padma (Rahu 5th - Ketu 11th)
 * 6. Mahapadma (Rahu 6th - Ketu 12th)
 * 7. Takshaka (Rahu 7th - Ketu 1st)
 * 8. Karkotaka (Rahu 8th - Ketu 2nd)
 * 9. Shankhachuda (Rahu 9th - Ketu 3rd)
 * 10. Ghataka (Rahu 10th - Ketu 4th)
 * 11. Vishadhara (Rahu 11th - Ketu 5th)
 * 12. Sheshanaga (Rahu 12th - Ketu 6th)
 */

export const KALA_SARPA_TYPES = [
  'Ananta', 'Kulika', 'Vasuki', 'Shankhapala', 'Padma', 'Mahapadma',
  'Takshaka', 'Karkotaka', 'Shankhachuda', 'Ghataka', 'Vishadhara', 'Sheshanaga'
];

export function getKalaSarpaType(rahuHouse: number): string {
  const idx = ((rahuHouse - 1 + 12) % 12);
  return `${KALA_SARPA_TYPES[idx]} Kala Sarpa Yoga`;
}
