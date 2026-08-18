/**
 * Abhijit Muhurta (8th Muhurta of the day, exactly around midday solar noon)
 */

export function calculateAbhijitMuhurta(sunriseTimestamp: number, sunsetTimestamp: number) {
  const dayDuration = sunsetTimestamp - sunriseTimestamp;
  const muhurtaDuration = dayDuration / 15;
  const start = sunriseTimestamp + 7 * muhurtaDuration;
  const end = sunriseTimestamp + 8 * muhurtaDuration;

  return {
    startTime: new Date(start).toISOString(),
    endTime: new Date(end).toISOString(),
    virtue: 'Supreme all-auspicious midday window ruled by Lord Vishnu that destroys 100,000 doshas.'
  };
}
