/**
 * Classical Tajika Sahams (Sensitive Arabic/Tajika Points)
 * Punya Saham (Day): Moon - Sun + Ascendant
 * Punya Saham (Night): Sun - Moon + Ascendant
 * Vidya Saham: Sun - Moon + Ascendant
 * Vivaha Saham: Venus - Saturn + Ascendant
 * Karma Saham: Mars - Sun + Ascendant
 */

export function calculateSaham(degA: number, degB: number, ascDeg: number, isDayBirth: boolean): number {
  let saham: number;
  if (isDayBirth) {
    saham = ((degA - degB + ascDeg) % 360 + 360) % 360;
  } else {
    saham = ((degB - degA + ascDeg) % 360 + 360) % 360;
  }
  return Number(saham.toFixed(4));
}
