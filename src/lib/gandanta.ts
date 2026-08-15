/**
 * Gandanta Junctions (Knot / Critical Transition Points)
 * Junctions between Water Signs (Cancer, Scorpio, Pisces) and Fire Signs (Leo, Sagittarius, Aries).
 * Last 3°20' of Water signs and first 3°20' of Fire signs (Ashlesha-Magha, Jyeshtha-Mula, Revati-Ashwini).
 */

export interface GandantaCheck {
  isGandanta: boolean;
  type: 'Lagna Gandanta' | 'Nakshatra Gandanta' | 'None';
  junctionName: string;
}

export function checkGandanta(longitude: number): GandantaCheck {
  const norm = ((longitude % 360) + 360) % 360;

  // Revati-Ashwini (356.666 to 3.333)
  if (norm >= 356.666 || norm <= 3.333) {
    return { isGandanta: true, type: 'Nakshatra Gandanta', junctionName: 'Revati-Ashwini (Abhukta Mula)' };
  }
  // Ashlesha-Magha (116.666 to 123.333)
  if (norm >= 116.666 && norm <= 123.333) {
    return { isGandanta: true, type: 'Nakshatra Gandanta', junctionName: 'Ashlesha-Magha' };
  }
  // Jyeshtha-Mula (236.666 to 243.333)
  if (norm >= 236.666 && norm <= 243.333) {
    return { isGandanta: true, type: 'Nakshatra Gandanta', junctionName: 'Jyeshtha-Mula' };
  }

  return { isGandanta: false, type: 'None', junctionName: 'None' };
}
