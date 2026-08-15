/**
 * Vedic Planetary Horas (Hour Lords)
 * Sequence follows Chaldean order descending by planetary speed:
 * Sun -> Venus -> Mercury -> Moon -> Saturn -> Jupiter -> Mars -> Sun...
 */

export interface HoraSlot {
  hourIndex: number;
  ruler: string;
  suitableActivities: string;
}

const CHALDEAN_ORDER = ['Sun', 'Venus', 'Mercury', 'Moon', 'Saturn', 'Jupiter', 'Mars'];
const DAY_FIRST_HORA = ['Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn'];

const HORA_ACTIVITIES: Record<string, string> = {
  Sun: 'Leadership, government matters, fatherly matters, administrative orders',
  Moon: 'Public relations, travels, water-related activities, emotional peace',
  Mars: 'Courage, physical sports, surgery, construction, competitive events',
  Mercury: 'Accounting, contracts, learning, coding, communication, business deals',
  Jupiter: 'Spiritual initiation, education, wealth management, consulting gurus',
  Venus: 'Arts, romance, buying luxury items, design, entertainment',
  Saturn: 'Labor, agriculture, oil/gas deals, grounding, long-term discipline'
};

export function calculateDailyHoras(dayOfWeek: number): HoraSlot[] {
  const dayRuler = DAY_FIRST_HORA[dayOfWeek % 7];
  let startIndex = CHALDEAN_ORDER.indexOf(dayRuler);

  return Array.from({ length: 24 }, (_, h) => {
    const ruler = CHALDEAN_ORDER[(startIndex + h) % 7];
    return {
      hourIndex: h + 1,
      ruler,
      suitableActivities: HORA_ACTIVITIES[ruler] || ''
    };
  });
}
