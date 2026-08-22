export function evaluateCombustionWithSpeed(isCombust: boolean, isSheeghra: boolean): string {
  if (isCombust && isSheeghra) return 'Volatile Combustion: High velocity under intense solar rays.';
  if (isCombust) return 'Dormant Combustion: Purifying internal potential.';
  return 'Uncombust Luminous Independence.';
}
