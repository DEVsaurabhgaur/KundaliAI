/**
 * Planetary Hora Order: Sun, Venus, Mercury, Moon, Saturn, Jupiter, Mars (Chaldean Order)
 */

const HORA_CYCLE = ['Sun', 'Venus', 'Mercury', 'Moon', 'Saturn', 'Jupiter', 'Mars'];

export function getHoraLord(dayOfWeek: number, hourFromSunrise: number): string {
  const startIdx = dayOfWeek % 7;
  const idx = (startIdx + hourFromSunrise) % 7;
  return HORA_CYCLE[idx];
}
