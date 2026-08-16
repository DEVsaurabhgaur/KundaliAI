/**
 * Pushkara Navamsha & Pushkara Bhaga (Auspicious Cosmic Degrees)
 * Planets in Pushkara Navamsha acquire immense nourishing and healing potency.
 */

export function checkPushkaraNavamsha(signIndex: number, degInSign: number): boolean {
  const isFire = [0, 4, 8].includes(signIndex);
  const isEarth = [1, 5, 9].includes(signIndex);

  if (isFire && ((degInSign >= 20 && degInSign <= 23.33) || (degInSign >= 26.66 && degInSign <= 30))) return true;
  if (isEarth && (degInSign >= 6.66 && degInSign <= 10)) return true;
  return false;
}
