/**
 * Highly Auspicious Vedic Timings
 * 1. Brahma Muhurta: 2 Muhurtas (96 min) before sunrise
 * 2. Abhijit Muhurta: 8th Muhurta of day (midday solar zenith)
 */

export interface AuspiciousSlot {
  name: string;
  startTime: string;
  endTime: string;
  description: string;
}

export function calculateAuspiciousSlots(
  sunriseMinutes: number = 360,
  sunsetMinutes: number = 1080
): AuspiciousSlot[] {
  const formatMin = (m: number) => {
    const hr = Math.floor(m / 60);
    const min = Math.floor(m % 60);
    const ampm = hr >= 12 ? 'PM' : 'AM';
    const hr12 = hr % 12 || 12;
    return `${hr12}:${String(min).padStart(2, '0')} ${ampm}`;
  };

  // Brahma Muhurta starts 96 mins before sunrise, ends 48 mins before sunrise
  const brahmaStart = Math.max(0, sunriseMinutes - 96);
  const brahmaEnd = Math.max(0, sunriseMinutes - 48);

  // Abhijit Muhurta is the 8th of 15 day muhurtas (around local noon)
  const dayLength = sunsetMinutes - sunriseMinutes;
  const muhurtaLength = dayLength / 15;
  const abhijitStart = sunriseMinutes + 7 * muhurtaLength;
  const abhijitEnd = abhijitStart + muhurtaLength;

  return [
    {
      name: 'Brahma Muhurta',
      startTime: formatMin(brahmaStart),
      endTime: formatMin(brahmaEnd),
      description: 'Ideal time for meditation, mantra sadhana, and creative focus'
    },
    {
      name: 'Abhijit Muhurta',
      startTime: formatMin(abhijitStart),
      endTime: formatMin(abhijitEnd),
      description: 'Universal auspicious window for starting new ventures and journeys'
    }
  ];
}
