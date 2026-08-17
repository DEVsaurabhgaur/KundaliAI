/**
 * High-Precision Tithi Calculation Engine
 * 30 Tithis: 1-15 Shukla Paksha (Waxing), 16-30 Krishna Paksha (Waning).
 * Each Tithi represents exactly 12 degrees of longitudinal separation between Moon and Sun.
 */

export interface TithiResult {
  tithiNumber: number; // 1 to 30
  tithiName: string;
  paksha: 'Shukla Paksha' | 'Krishna Paksha';
  tithiClass: 'Nanda' | 'Bhadra' | 'Jaya' | 'Rikta' | 'Purna';
  completedPercentage: number;
}

const TITHI_NAMES = [
  'Pratipada', 'Dwitiya', 'Tritiya', 'Chaturthi', 'Panchami',
  'Shashthi', 'Saptami', 'Ashtami', 'Navami', 'Dashami',
  'Ekadashi', 'Dwadashi', 'Trayodashi', 'Chaturdashi', 'Purnima',
  'Pratipada', 'Dwitiya', 'Tritiya', 'Chaturthi', 'Panchami',
  'Shashthi', 'Saptami', 'Ashtami', 'Navami', 'Dashami',
  'Ekadashi', 'Dwadashi', 'Trayodashi', 'Chaturdashi', 'Amavasya'
];

const TITHI_CLASSES: Array<TithiResult['tithiClass']> = [
  'Nanda', 'Bhadra', 'Jaya', 'Rikta', 'Purna',
  'Nanda', 'Bhadra', 'Jaya', 'Rikta', 'Purna',
  'Nanda', 'Bhadra', 'Jaya', 'Rikta', 'Purna'
];

export function calculateTithi(sunLongDeg: number, moonLongDeg: number): TithiResult {
  const diff = ((moonLongDeg - sunLongDeg + 360) % 360);
  const tithiIndex = Math.floor(diff / 12);
  const tithiNumber = tithiIndex + 1;
  const degIntoTithi = diff % 12;

  const paksha = tithiNumber <= 15 ? 'Shukla Paksha' : 'Krishna Paksha';
  const tithiClass = TITHI_CLASSES[(tithiNumber - 1) % 5];

  return {
    tithiNumber,
    tithiName: TITHI_NAMES[tithiIndex],
    paksha,
    tithiClass,
    completedPercentage: Number(((degIntoTithi / 12) * 100).toFixed(2))
  };
}
