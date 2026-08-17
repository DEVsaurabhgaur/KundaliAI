/**
 * Ravi Pushya and Guru Pushya Mahayogas
 * Sunday + Pushya Nakshatra (Ravi Pushya) / Thursday + Pushya Nakshatra (Guru Pushya)
 */

export function checkPushyaMahayoga(dayOfWeek: number, nakshatraIndex: number) {
  const isPushya = (nakshatraIndex % 27) === 7; // Pushya is 8th nakshatra (index 7)
  const isRaviPushya = dayOfWeek === 0 && isPushya;
  const isGuruPushya = dayOfWeek === 4 && isPushya;

  return {
    isRaviPushya,
    isGuruPushya,
    isMahayogaActive: isRaviPushya || isGuruPushya,
    virtue: 'Supreme alignment for purchasing gold, consecrating yantras, and beginning major ventures.'
  };
}
