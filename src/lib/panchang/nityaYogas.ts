/**
 * 27 Nitya Yogas Calculation Matrix
 * Sum of Sun and Moon sidereal longitudes divided into spans of 13° 20' (800 arcmin).
 */

export interface NityaYogaResult {
  yogaNumber: number; // 1 to 27
  yogaName: string;
  isAuspicious: boolean;
  rulingPlanet: string;
}

export const NITYA_YOGAS = [
  { name: 'Vishkumbha', auspicious: false, lord: 'Saturn' },
  { name: 'Priti', auspicious: true, lord: 'Mercury' },
  { name: 'Ayushman', auspicious: true, lord: 'Ketu' },
  { name: 'Saubhagya', auspicious: true, lord: 'Venus' },
  { name: 'Shobhana', auspicious: true, lord: 'Sun' },
  { name: 'Atiganda', auspicious: false, lord: 'Moon' },
  { name: 'Sukarma', auspicious: true, lord: 'Mars' },
  { name: 'Dhriti', auspicious: true, lord: 'Rahu' },
  { name: 'Shula', auspicious: false, lord: 'Jupiter' },
  { name: 'Ganda', auspicious: false, lord: 'Saturn' },
  { name: 'Vriddhi', auspicious: true, lord: 'Mercury' },
  { name: 'Dhruva', auspicious: true, lord: 'Ketu' },
  { name: 'Vyaghata', auspicious: false, lord: 'Venus' },
  { name: 'Harshana', auspicious: true, lord: 'Sun' },
  { name: 'Vajra', auspicious: false, lord: 'Moon' },
  { name: 'Siddhi', auspicious: true, lord: 'Mars' },
  { name: 'Vyatipata', auspicious: false, lord: 'Rahu' },
  { name: 'Variyan', auspicious: true, lord: 'Jupiter' },
  { name: 'Parigha', auspicious: false, lord: 'Saturn' },
  { name: 'Shiva', auspicious: true, lord: 'Mercury' },
  { name: 'Siddha', auspicious: true, lord: 'Ketu' },
  { name: 'Sadhya', auspicious: true, lord: 'Venus' },
  { name: 'Shubha', auspicious: true, lord: 'Sun' },
  { name: 'Shukla', auspicious: true, lord: 'Moon' },
  { name: 'Brahma', auspicious: true, lord: 'Mars' },
  { name: 'Indra', auspicious: true, lord: 'Rahu' },
  { name: 'Vaidhriti', auspicious: false, lord: 'Jupiter' }
];

export function calculateNityaYoga(sunLongDeg: number, moonLongDeg: number): NityaYogaResult {
  const sum = (sunLongDeg + moonLongDeg) % 360;
  const span = 13 + 1 / 3;
  const idx = Math.floor(sum / span) % 27;
  const entry = NITYA_YOGAS[idx];

  return {
    yogaNumber: idx + 1,
    yogaName: entry.name,
    isAuspicious: entry.auspicious,
    rulingPlanet: entry.lord
  };
}
