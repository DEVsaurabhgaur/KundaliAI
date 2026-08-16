/**
 * Kalachakra Dasha (Wheel of Time)
 * Deha (Body sign) and Jeeva (Soul sign) calculation engine.
 */

export interface KalachakraInfo {
  nakshatraPada: number;
  dehaRashi: string;
  jeevaRashi: string;
  direction: 'Savya (Direct)' | 'Apasavya (Reverse)';
}

const RASHIS = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];

export function calculateKalachakraPoints(nakshatraIndex: number, pada: number): KalachakraInfo {
  const isDirect = (nakshatraIndex % 2 === 0);
  const dehaIdx = (nakshatraIndex * 4 + pada) % 12;
  const jeevaIdx = (dehaIdx + 8) % 12;

  return {
    nakshatraPada: pada,
    dehaRashi: RASHIS[dehaIdx],
    jeevaRashi: RASHIS[jeevaIdx],
    direction: isDirect ? 'Savya (Direct)' : 'Apasavya (Reverse)'
  };
}
