/**
 * 64th Navamsha (Khara Navamsha) & 22nd Drekkana (Kharesh)
 * 64th Navamsha from Moon Navamsha = Exactly 4th sign in Navamsha from Moon Navamsha.
 * 22nd Drekkana from Lagna = 8th house in Drekkana (D3).
 */

export function calculateKharaPoints(moonNavamshaSign: number, lagnaDrekkanaSign: number) {
  const kharaNavamsha = (moonNavamshaSign + 3) % 12; // 4th sign in D9
  const khareshDrekkana = (lagnaDrekkanaSign + 7) % 12; // 8th sign in D3

  return {
    kharaNavamshaSignIndex: kharaNavamsha,
    khareshDrekkanaSignIndex: khareshDrekkana,
    warning: 'Transits of Saturn or Mars over Khara Navamsha require protective health vigilance.'
  };
}
