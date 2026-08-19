/**
 * Karaka Dasha Timeline (AK -> AmK -> BK -> MK -> PK -> GK -> DK)
 */

export const KARAKA_ORDER = ['AK', 'AmK', 'BK', 'MK', 'PK', 'GK', 'DK'];

export function generateKarakaDashaTimeline(karakaSigns: Record<string, number>) {
  return KARAKA_ORDER.map(k => ({
    karaka: k,
    signIndex: karakaSigns[k] ?? 0,
    durationYears: 12
  }));
}
