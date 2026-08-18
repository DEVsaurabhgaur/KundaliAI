/**
 * 21 Mahadoshas in Muhurta
 */

export function checkMuhurtaDoshas(hasLatta: boolean, hasPata: boolean, hasJamitra: boolean): string[] {
  const active: string[] = [];
  if (hasLatta) active.push('Latta Dosha (Planetary Kick)');
  if (hasPata) active.push('Mahapata Dosha (Equinoctial Shadow)');
  if (hasJamitra) active.push('Jamitra Dosha (7th House Affliction)');
  return active;
}
