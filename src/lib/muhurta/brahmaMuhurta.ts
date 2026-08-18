/**
 * Brahma Muhurta (Starts exactly 2 Muhurtas = 96 minutes before local solar sunrise)
 */

export function calculateBrahmaMuhurta(sunriseTimestamp: number) {
  const start = sunriseTimestamp - 96 * 60000;
  const end = sunriseTimestamp - 48 * 60000;
  return {
    startTime: new Date(start).toISOString(),
    endTime: new Date(end).toISOString(),
    virtue: 'Supreme stillness for Gayatri Japa, Pranayama, and cosmic attunement.'
  };
}
