/**
 * Vedic Gemstone Prescription Engine (Ratna Dharana)
 * Wear gemstones for Lagna Lord (Health), 5th Lord (Intellect/Progeny), 9th Lord (Bhagya/Fortune).
 * STRICTLY AVOID gemstones of 6th, 8th, or 12th lords unless functioning as functional benefics.
 */

export const GEMS_BY_PLANET: Record<string, { gem: string; metal: string; finger: string }> = {
  Sun: { gem: 'Ruby (Manikya)', metal: 'Gold / Copper', finger: 'Ring Finger' },
  Moon: { gem: 'Pearl (Moti)', metal: 'Silver', finger: 'Little / Ring Finger' },
  Mars: { gem: 'Red Coral (Moonga)', metal: 'Gold / Copper', finger: 'Ring Finger' },
  Mercury: { gem: 'Emerald (Panna)', metal: 'Gold / Bronze', finger: 'Little Finger' },
  Jupiter: { gem: 'Yellow Sapphire (Pukhraj)', metal: 'Gold', finger: 'Index Finger' },
  Venus: { gem: 'Diamond (Heera)', metal: 'Platinum / White Gold', finger: 'Middle / Little Finger' },
  Saturn: { gem: 'Blue Sapphire (Neelam)', metal: 'Panchadhatu / Iron', finger: 'Middle Finger' },
  Rahu: { gem: 'Hessonite (Gomed)', metal: 'Silver / Panchadhatu', finger: 'Middle Finger' },
  Ketu: { gem: "Cat's Eye (Lehsuniya)", metal: 'Silver / Panchadhatu', finger: 'Middle / Ring Finger' }
};

export function prescribeGemstone(beneficPlanet: string) {
  return GEMS_BY_PLANET[beneficPlanet] || { gem: 'Navaratna', metal: 'Gold', finger: 'Ring Finger' };
}
