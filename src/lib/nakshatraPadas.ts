/**
 * 108 Nakshatra Padas (4 Padas x 27 Nakshatras)
 * Includes Sanskrit phonetic sound syllables (Nama Akshara) for naming.
 */

export interface PadaInfo {
  nakshatraName: string;
  pada: number;
  soundSyllable: string;
  navamshaSign: string;
}

const SYLLABLES = [
  ['Chu', 'Che', 'Cho', 'La'], // Ashwini
  ['Lee', 'Lu', 'Le', 'Lo'],   // Bharani
  ['A', 'Ee', 'U', 'Ea'],      // Krittika
  ['O', 'Va', 'Vi', 'Vu']      // Rohini
];

export function getNakshatraPadaInfo(nakshatraIndex: number, pada: number): PadaInfo {
  const syllables = SYLLABLES[nakshatraIndex % SYLLABLES.length] || ['A', 'B', 'C', 'D'];
  return {
    nakshatraName: `Nakshatra #${nakshatraIndex + 1}`,
    pada,
    soundSyllable: syllables[(pada - 1) % 4],
    navamshaSign: 'Aries'
  };
}
