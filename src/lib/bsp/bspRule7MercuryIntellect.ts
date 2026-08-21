/**
 * BSP Rule 7: Mercury awakens intellect, commercial enterprise, and learning in 4th and 10th from itself in the 34th year.
 */

export function calculateBSP7MercuryAwakening(mercuryHouse: number) {
  return {
    learning4th: ((mercuryHouse + 3) % 12) + 1,
    enterprise10th: ((mercuryHouse + 9) % 12) + 1
  };
}
