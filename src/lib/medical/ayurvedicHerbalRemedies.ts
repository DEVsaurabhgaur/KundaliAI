/**
 * Planetary Ayurvedic Herbal Rasayanas
 */

export const PLANET_HERBS: Record<string, string[]> = {
  Sun: ['Ashwagandha', 'Saffron', 'Cinnamon', 'Ginger'],
  Moon: ['Shatavari', 'Brahmi', 'Licorice', 'Gotu Kola'],
  Mars: ['Guduchi', 'Turmeric', 'Manjistha', 'Red Sandalwood'],
  Mercury: ['Gotu Kola', 'Shankhpushpi', 'Tulsi', 'Mint'],
  Jupiter: ['Bala', 'Ashwagandha', 'Gokshura', 'Haritaki'],
  Venus: ['Shatavari', 'Cardamom', 'Rose Petals', 'Lotus Seed'],
  Saturn: ['Guggulu', 'Shilajit', 'Triphala', 'Myrrh']
};

export function getHerbalRemedies(planet: string): string[] {
  return PLANET_HERBS[planet] || ['Tulsi', 'Triphala'];
}
