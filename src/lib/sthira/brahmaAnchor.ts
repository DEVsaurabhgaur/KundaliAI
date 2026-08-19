/**
 * Brahma Planet Anchor Selection
 * Lord of the 6th, 8th, or 12th from Lagna or 7th house, whichever is stronger.
 */

export function selectBrahmaPlanet(strongestDusthanaLord: string, dusthanaSignIndex: number) {
  return {
    brahmaPlanet: strongestDusthanaLord,
    brahmaSignIndex: dusthanaSignIndex,
    role: 'Anchor for Sthira Dasha initiation and vital longevity timing.'
  };
}
