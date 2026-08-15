/**
 * Varna Koota (1 Point Max)
 * Measures spiritual and ego compatibility according to natural sign caste/temperament:
 * Brahmin: Cancer, Scorpio, Pisces (Water)
 * Kshatriya: Aries, Leo, Sagittarius (Fire)
 * Vaishya: Taurus, Virgo, Capricorn (Earth)
 * Shudra: Gemini, Libra, Aquarius (Air)
 */

const VARNA_RANKS: Record<number, number> = {
  3: 4, 7: 4, 11: 4, // Brahmin
  0: 3, 4: 3, 8: 3,  // Kshatriya
  1: 2, 5: 2, 9: 2,  // Vaishya
  2: 1, 6: 1, 10: 1  // Shudra
};

export function calculateVarnaKoota(boySignIndex: number, girlSignIndex: number) {
  const boyVarna = VARNA_RANKS[boySignIndex] || 1;
  const girlVarna = VARNA_RANKS[girlSignIndex] || 1;

  // Groom varna >= Bride varna yields full 1 point
  const points = boyVarna >= girlVarna ? 1 : 0;
  return {
    koota: 'Varna',
    maxPoints: 1,
    obtainedPoints: points,
    boyVarna,
    girlVarna,
    isCompatible: points === 1
  };
}
