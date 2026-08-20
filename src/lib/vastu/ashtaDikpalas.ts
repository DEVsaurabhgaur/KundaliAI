/**
 * Ashta Dikpalas (8 Cardinal & Ordinal Directions) & Planetary Rulers
 */

export const ASHTA_DIKPALAS: Record<string, { deity: string; planet: string; element: string }> = {
  East: { deity: 'Indra', planet: 'Sun', element: 'Ether / Light' },
  Southeast: { deity: 'Agni', planet: 'Venus', element: 'Fire' },
  South: { deity: 'Yama', planet: 'Mars', element: 'Earth / Fire' },
  Southwest: { deity: 'Nirriti', planet: 'Rahu', element: 'Earth' },
  West: { deity: 'Varuna', planet: 'Saturn', element: 'Water / Air' },
  Northwest: { deity: 'Vayu', planet: 'Moon', element: 'Air' },
  North: { deity: 'Kubera', planet: 'Mercury', element: 'Water / Earth' },
  Northeast: { deity: 'Ishanya (Shiva)', planet: 'Jupiter', element: 'Water / Space' }
};

export function getDirectionInfo(direction: string) {
  return ASHTA_DIKPALAS[direction] || ASHTA_DIKPALAS['East'];
}
