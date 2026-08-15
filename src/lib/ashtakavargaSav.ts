/**
 * Ashtakavarga SAV (Sarvashtakavarga) Calculator
 * Aggregates all 7 planetary BAV matrices into total 337 benefic bindus across 12 signs.
 */

import { calculateBavMatrix } from './ashtakavargaBav';

export interface SavResult {
  signIndex: number;
  signName: string;
  totalBindus: number;
  strengthGrade: 'High' | 'Moderate' | 'Low';
}

const RASHIS = [
  'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
  'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

export function calculateSarvashtakavarga(
  planetarySignIndices: Record<string, number>
): SavResult[] {
  const planets = ['Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn'];
  const totals = Array(12).fill(0);

  planets.forEach(p => {
    const sIndex = planetarySignIndices[p] ?? 0;
    const bav = calculateBavMatrix(p, sIndex);
    bav.pointsBySign.forEach((pts, signIdx) => {
      totals[signIdx] += pts;
    });
  });

  return totals.map((totalBindus, idx) => ({
    signIndex: idx,
    signName: RASHIS[idx],
    totalBindus,
    strengthGrade: totalBindus >= 30 ? 'High' : totalBindus >= 25 ? 'Moderate' : 'Low'
  }));
}
