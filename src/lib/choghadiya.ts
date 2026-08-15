/**
 * Choghadiya (Day and Night Timings)
 * 7 types: Amrit (Best), Shubh (Good), Labh (Gain), Char (Neutral), Rog (Evil), Kaal (Loss), Udveg (Anxiety)
 */

export interface ChoghadiyaSlot {
  name: string;
  type: 'Best' | 'Good' | 'Gain' | 'Neutral' | 'Evil' | 'Loss' | 'Anxiety';
  isAuspicious: boolean;
}

const DAY_CHOGHADIYA: Record<number, string[]> = {
  0: ['Udveg', 'Char', 'Labh', 'Amrit', 'Kaal', 'Shubh', 'Rog', 'Udveg'], // Sun
  1: ['Amrit', 'Kaal', 'Shubh', 'Rog', 'Udveg', 'Char', 'Labh', 'Amrit'], // Mon
  2: ['Rog', 'Udveg', 'Char', 'Labh', 'Amrit', 'Kaal', 'Shubh', 'Rog'],   // Tue
  3: ['Labh', 'Amrit', 'Kaal', 'Shubh', 'Rog', 'Udveg', 'Char', 'Labh'],  // Wed
  4: ['Shubh', 'Rog', 'Udveg', 'Char', 'Labh', 'Amrit', 'Kaal', 'Shubh'], // Thu
  5: ['Char', 'Labh', 'Amrit', 'Kaal', 'Shubh', 'Rog', 'Udveg', 'Char'],  // Fri
  6: ['Kaal', 'Shubh', 'Rog', 'Udveg', 'Char', 'Labh', 'Amrit', 'Kaal']   // Sat
};

export function getDayChoghadiya(dayOfWeek: number): ChoghadiyaSlot[] {
  const sequence = DAY_CHOGHADIYA[dayOfWeek % 7];
  return sequence.map(name => {
    const isAuspicious = ['Amrit', 'Shubh', 'Labh'].includes(name);
    let type: ChoghadiyaSlot['type'] = 'Neutral';
    if (name === 'Amrit') type = 'Best';
    else if (name === 'Shubh') type = 'Good';
    else if (name === 'Labh') type = 'Gain';
    else if (name === 'Rog') type = 'Evil';
    else if (name === 'Kaal') type = 'Loss';
    else if (name === 'Udveg') type = 'Anxiety';

    return { name, type, isAuspicious };
  });
}
