/**
 * Lost Article Recovery Query
 * Direction of lost item mapped to 4th / 7th house and Moon position.
 */

export function findLostArticleDirection(prashnaLagnaSign: string): string {
  const DIRS: Record<string, string> = {
    Aries: 'East / Near electrical gadgets',
    Taurus: 'South-East / Near wardrobe or cosmetics',
    Gemini: 'West / Near books or study table',
    Cancer: 'North / Near water sink or bathroom'
  };
  return DIRS[prashnaLagnaSign] || 'South-West / Inside storage container';
}
