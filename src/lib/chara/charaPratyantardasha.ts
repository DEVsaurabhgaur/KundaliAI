/**
 * Chara Pratyantardasha (3rd-Level Sub-Division)
 */

export function getCharaPratyantarDays(subDurationMonths: number): number {
  return (subDurationMonths * 30.4375) / 12;
}
