/**
 * Jaimini Karaka Replacement & Tie-Breaking Engine
 * When two planets have the exact same degree/arcminute in their respective signs,
 * the 8th Karaka (Rahu) or arcsecond hierarchy is engaged.
 */

export function resolveKarakaTie(planetsWithSameDegree: { name: string; arcSeconds: number }[]) {
  return planetsWithSameDegree.sort((a, b) => b.arcSeconds - a.arcSeconds);
}
