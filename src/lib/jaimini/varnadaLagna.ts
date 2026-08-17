/**
 * Varnada Lagna (VL - Social Standing and Socioeconomic Vocation)
 */

export function calculateVarnadaLagna(lagnaSignIndex: number, horaLagnaSignIndex: number): number {
  return (lagnaSignIndex + horaLagnaSignIndex) % 12;
}
