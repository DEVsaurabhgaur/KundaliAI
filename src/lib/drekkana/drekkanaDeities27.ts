export function getDrekkanaDeity(decanateIndex1to3: number): string {
  const DEITIES = ['Narada (Sage / Wisdom)', 'Agastya (Healer / Transformation)', 'Durvasa (Ascetic / High Power)'];
  return DEITIES[(decanateIndex1to3 - 1) % 3] || 'Universal Rishi';
}
