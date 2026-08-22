/**
 * Kalachakra Dasha Special Jumps (Gatis):
 * 1. Manduka Gati (Frog Jump): Skipping a sign (e.g. Virgo to Cancer or Leo to Gemini) -> Sudden transformations.
 * 2. Markati Gati (Monkey Leap): Reversing back (e.g. Leo to Cancer) -> Career repositioning.
 * 3. Simhavalokana (Lion's Backward Glance): Major jump (e.g. Pisces to Scorpio or Sagittarius to Aries) -> Karmic culmination.
 */

export function evaluateKCDJump(fromSign: number, toSign: number): string {
  const diff = (toSign - fromSign + 12) % 12;
  if (diff === 10 || diff === 2) return 'Manduka Gati (Frog Jump): Sudden life shifts and financial breakthroughs.';
  if (diff === 11) return 'Markati Gati (Monkey Leap): Re-evaluation of foundational endeavors.';
  if (diff === 8 || diff === 4) return "Simhavalokana (Lion's Backward Gaze): Major karmic milestone and sovereign recognition.";
  return 'Standard Regular Progression';
}
