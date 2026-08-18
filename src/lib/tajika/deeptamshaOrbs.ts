/**
 * Deeptamsha (Moiety / Orb Ranges) in Tajika
 * Sun: 15° | Moon: 12° | Mars: 8° | Mercury: 7° | Jupiter: 9° | Venus: 7° | Saturn: 9° | Rahu/Ketu: 6°
 */

export const DEEPTAMSHA_ORBS: Record<string, number> = {
  Sun: 15,
  Moon: 12,
  Mars: 8,
  Mercury: 7,
  Jupiter: 9,
  Venus: 7,
  Saturn: 9,
  Rahu: 6,
  Ketu: 6
};

export function getMoietyOrb(planetA: string, planetB: string): number {
  const orbA = DEEPTAMSHA_ORBS[planetA] || 8;
  const orbB = DEEPTAMSHA_ORBS[planetB] || 8;
  return (orbA + orbB) / 2;
}
