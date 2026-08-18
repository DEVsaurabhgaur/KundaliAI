/**
 * 16 Vedic Samskaras Muhurta Engine
 */

export const VEDIC_SAMSKARAS = [
  'Garbhadhana', 'Pumsavana', 'Simantonnayana', 'Jatakarma', 'Namakarana',
  'Nishkramana', 'Annaprashana', 'Chudakarana', 'Karnavedha', 'Vidyarambha',
  'Upanayana', 'Vedarambha', 'Keshanta', 'Samavartana', 'Vivaha', 'Antyeshti'
];

export function getSamskaraGuidelines(samskaraName: string): string {
  if (samskaraName === 'Vivaha') {
    return 'Ensure Jupiter and Venus are not combust (Tara Shuddhi); avoid Rikta Tithis and Bhadra.';
  }
  if (samskaraName === 'Upanayana') {
    return 'Select waxing fortnight (Shukla Paksha) with strong Jupiter in Kendra/Trikona.';
  }
  return 'Select auspicious Tithi, Vara, and Nakshatra with benefic planetary aspects on Lagna.';
}
