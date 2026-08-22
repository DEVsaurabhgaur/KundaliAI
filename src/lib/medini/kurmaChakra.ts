/**
 * Kurma Chakra (Cosmic Turtle Mundane Topology)
 * Center (Hridaya), East (Purva), Southeast (Agneya), South (Dakshina),
 * Southwest (Nairritya), West (Pashchima), Northwest (Vayavya), North (Uttara), Northeast (Ishanya).
 */

export const KURMA_SECTORS: Record<string, string[]> = {
  Center: ['Krittika', 'Rohini', 'Mrigashira'],
  East: ['Ardra', 'Punarvasu', 'Pushya'],
  Southeast: ['Ashlesha', 'Magha', 'Purva Phalguni'],
  South: ['Uttara Phalguni', 'Hasta', 'Chitra'],
  Southwest: ['Swati', 'Vishakha', 'Anuradha'],
  West: ['Jyeshtha', 'Moola', 'Purva Ashadha'],
  Northwest: ['Uttara Ashadha', 'Shravana', 'Dhanishta'],
  North: ['Shatabhisha', 'Purva Bhadrapada', 'Uttara Bhadrapada'],
  Northeast: ['Revati', 'Ashwini', 'Bharani']
};

export function getKurmaSector(starName: string): string {
  for (const [sector, stars] of Object.entries(KURMA_SECTORS)) {
    if (stars.includes(starName)) return sector;
  }
  return 'Center';
}
