/**
 * Grahan Dosha (Eclipse Affliction of Sun or Moon by Rahu/Ketu)
 */

export function checkGrahanDosha(luminaryName: 'Sun' | 'Moon', luminaryLong: number, rahuLong: number) {
  const diff = Math.abs((luminaryLong - rahuLong + 360) % 360);
  const sep = diff > 180 ? 360 - diff : diff;
  const isAfflicted = sep <= 12;

  return {
    luminary: luminaryName,
    isGrahanDoshaActive: isAfflicted,
    separation: Number(sep.toFixed(2)),
    remedy: `Worship Lord Shiva and perform milk abhishekam to fortify the ${luminaryName}.`
  };
}
