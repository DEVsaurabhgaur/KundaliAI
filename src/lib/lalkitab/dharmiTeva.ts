/**
 * Lal Kitab: Dharmi Teva vs Andha Teva
 * - Dharmi Teva (Righteous Horoscope): Jupiter in 1st/4th/9th/10th or Moon in 4th. Shielded from sudden catastrophe.
 * - Andha Teva (Blind Horoscope): Saturn in 4th and 10th vacant or inimical planets in 10th.
 */

export function evaluateLalKitabTeva(jupiterHouse: number, moonHouse: number, saturnHouse: number, is10thVacant: boolean) {
  const isDharmi = [1, 4, 9, 10].includes(jupiterHouse) || moonHouse === 4;
  const isAndha = saturnHouse === 4 && is10thVacant;

  return {
    isDharmiTeva: isDharmi,
    isAndhaTeva: isAndha,
    classification: isDharmi ? 'Dharmi Teva (Righteous & Divine Protection)' : isAndha ? 'Andha Teva (Requires eye/vision charity remedies)' : 'Sadharan Teva'
  };
}
