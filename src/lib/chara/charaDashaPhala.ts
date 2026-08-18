/**
 * Chara Dasha Phala Predictive Matrices
 */

const SIGN_DASHAPHALA: Record<string, string> = {
  Aries: 'Dynamic initiation, vocational enterprise, pioneering ambition, travel.',
  Taurus: 'Financial consolidation, asset accumulation, domestic celebrations.',
  Gemini: 'Intellectual growth, writing, commerce, networking, skill mastery.',
  Cancer: 'Emotional introspection, real estate purchases, maternal bonds.',
  Leo: 'Leadership prominence, public recognition, sovereign authority.',
  Virgo: 'Analytical breakthroughs, health vigilance, service advancement.',
  Libra: 'Partnership fruition, legal triumphs, commercial expansion.',
  Scorpio: 'Transformative research, occult insights, deep financial restructuring.',
  Sagittarius: 'Philosophical elevation, pilgrimage, mentor guidance, higher education.',
  Capricorn: 'Professional elevation, corporate responsibility, disciplined labor.',
  Aquarius: 'Humanitarian alliances, innovative gains, widespread networking.',
  Pisces: 'Spiritual liberation, international voyages, philanthropic surrender.'
};

export function getCharaDashaPhala(signName: string): string {
  return SIGN_DASHAPHALA[signName] || 'Auspicious unfolding of karmic potentials.';
}
