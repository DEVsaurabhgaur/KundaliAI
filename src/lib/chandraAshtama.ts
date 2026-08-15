/**
 * Chandra Ashtama (Chandrashtama) Detector
 * Transit of Moon through the 8th sign from natal Moon sign.
 * Period of 2.25 days considered sensitive for important decisions.
 */

export interface ChandrashtamaStatus {
  isChandrashtamaActive: boolean;
  natalMoonSign: string;
  currentMoonSign: string;
  ashtamaSign: string;
  recommendation: string;
}

const RASHIS = [
  'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
  'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

export function checkChandrashtama(
  natalMoonSignIndex: number,
  currentTransitMoonSignIndex: number
): ChandrashtamaStatus {
  const ashtamaSignIndex = (natalMoonSignIndex + 7) % 12;
  const isActive = currentTransitMoonSignIndex === ashtamaSignIndex;

  return {
    isChandrashtamaActive: isActive,
    natalMoonSign: RASHIS[natalMoonSignIndex],
    currentMoonSign: RASHIS[currentTransitMoonSignIndex],
    ashtamaSign: RASHIS[ashtamaSignIndex],
    recommendation: isActive
      ? 'Avoid major investments, heated arguments, and signing high-stakes contracts today.'
      : 'Favorable transit Moon position for routine and auspicious activities.'
  };
}
