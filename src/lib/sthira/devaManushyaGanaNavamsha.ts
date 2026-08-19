/**
 * Navamsha Gana Attribution
 */

export function getNavamshaGana(navamshaSignIndex: number): 'Deva' | 'Manushya' | 'Rakshasa' {
  const mod = navamshaSignIndex % 3;
  if (mod === 0) return 'Deva';
  if (mod === 1) return 'Manushya';
  return 'Rakshasa';
}
