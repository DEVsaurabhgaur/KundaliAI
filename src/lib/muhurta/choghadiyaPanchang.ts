/**
 * 8 Choghadiyas of Day and Night
 * Amrit, Shubh, Labh (Auspicious) | Char (Neutral/Good for travel) | Rog, Kaal, Udveg (Inauspicious)
 */

export interface ChoghadiyaResult {
  name: 'Amrit' | 'Shubh' | 'Labh' | 'Char' | 'Rog' | 'Kaal' | 'Udveg';
  nature: 'Auspicious' | 'Neutral' | 'Inauspicious';
}

export function evaluateChoghadiya(choghadiyaName: ChoghadiyaResult['name']): ChoghadiyaResult {
  const nature = ['Amrit', 'Shubh', 'Labh'].includes(choghadiyaName)
    ? 'Auspicious'
    : choghadiyaName === 'Char'
    ? 'Neutral'
    : 'Inauspicious';

  return { name: choghadiyaName, nature };
}
