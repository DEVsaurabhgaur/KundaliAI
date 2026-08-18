/**
 * Naisargika Bala (Permanent Natural Strength)
 * Sun: 60 | Moon: 51.43 | Venus: 42.86 | Jupiter: 34.29 | Mercury: 25.71 | Mars: 17.14 | Saturn: 8.57 Virupas
 */

export const NAISARGIKA_BALA: Record<string, number> = {
  Sun: 60.0,
  Moon: 51.43,
  Venus: 42.86,
  Jupiter: 34.29,
  Mercury: 25.71,
  Mars: 17.14,
  Saturn: 8.57
};

export function getNaisargikaBala(planet: string): number {
  return NAISARGIKA_BALA[planet] || 15.0;
}
