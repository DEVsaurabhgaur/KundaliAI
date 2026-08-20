/**
 * 81-Grid (9x9) Sarvatobhadra Chakra (SBC)
 * Incorporates 28 Nakshatras (including Abhijit between Uttara Ashadha & Shravana),
 * 12 Rashis, 16 Vowels (Swaras), and Consonants (Varnas).
 */

export const SBC_28_NAKSHATRAS = [
  'Ashwini', 'Bharani', 'Krittika', 'Rohini', 'Mrigashira', 'Ardra', 'Punarvasu',
  'Pushya', 'Ashlesha', 'Magha', 'Purva Phalguni', 'Uttara Phalguni', 'Hasta',
  'Chitra', 'Swati', 'Vishakha', 'Anuradha', 'Jyeshtha', 'Moola', 'Purva Ashadha',
  'Uttara Ashadha', 'Abhijit', 'Shravana', 'Dhanishta', 'Shatabhisha',
  'Purva Bhadrapada', 'Uttara Bhadrapada', 'Revati'
];

export function getSBCGridPosition(nakshatraIndex28: number) {
  return {
    nakshatra: SBC_28_NAKSHATRAS[nakshatraIndex28 % 28],
    gridRing: nakshatraIndex28 < 7 ? 'East Perimeter' : nakshatraIndex28 < 14 ? 'South Perimeter' : nakshatraIndex28 < 21 ? 'West Perimeter' : 'North Perimeter'
  };
}
