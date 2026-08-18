/**
 * Dig Bala (Directional Strength: 0 to 60 Virupas)
 * Sun, Mars peak at 10th house (South, 270°)
 * Jupiter, Mercury peak at 1st house (East, 0°)
 * Moon, Venus peak at 4th house (North, 90°)
 * Saturn peaks at 7th house (West, 180°)
 */

export function calculateDigBala(planet: string, houseLongitude: number): number {
  const PEAK_HOUSES: Record<string, number> = {
    Jupiter: 0, Mercury: 0,
    Moon: 90, Venus: 90,
    Saturn: 180,
    Sun: 270, Mars: 270
  };

  const peak = PEAK_HOUSES[planet] ?? 0;
  const diff = Math.abs((houseLongitude - peak + 360) % 360);
  const arc = diff > 180 ? 360 - diff : diff;
  const virupas = (180 - arc) / 3;
  return Number(virupas.toFixed(2));
}
