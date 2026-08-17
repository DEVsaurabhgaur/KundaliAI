/**
 * Jaimini Rashi Drishti (Sign Aspects)
 * 1. Movable signs (Aries, Cancer, Libra, Cap) aspect all Fixed signs EXCEPT the adjacent one.
 * 2. Fixed signs (Taurus, Leo, Scorpio, Aqua) aspect all Movable signs EXCEPT the adjacent one.
 * 3. Dual signs (Gemini, Virgo, Sag, Pisces) aspect all other Dual signs.
 */

export function getAspectedSigns(signIndex: number): number[] {
  const modality = signIndex % 3; // 0=Movable, 1=Fixed, 2=Dual
  const result: number[] = [];

  if (modality === 0) {
    // Movable: aspects fixed signs [1, 4, 7, 10] except adjacent ((signIndex + 1) % 12)
    const fixedSigns = [1, 4, 7, 10];
    const adjacent = (signIndex + 1) % 12;
    return fixedSigns.filter(s => s !== adjacent);
  } else if (modality === 1) {
    // Fixed: aspects movable signs [0, 3, 6, 9] except adjacent ((signIndex + 11) % 12)
    const movableSigns = [0, 3, 6, 9];
    const adjacent = (signIndex + 11) % 12;
    return movableSigns.filter(s => s !== adjacent);
  } else {
    // Dual: aspects other 3 dual signs [2, 5, 8, 11]
    const dualSigns = [2, 5, 8, 11];
    return dualSigns.filter(s => s !== signIndex);
  }
}
