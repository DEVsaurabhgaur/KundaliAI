/**
 * Swamsha Analysis (Navamsha sign of Atmakaraka)
 */

export function getSwamshaVocation(swamshaSign: string): string {
  const VOCATIONS: Record<string, string> = {
    Aries: 'Pioneer, martial leadership, executive courage.',
    Taurus: 'Wealth management, fine arts, commerce.',
    Gemini: 'Authorship, journalism, communication, linguistics.',
    Cancer: 'Public welfare, hospitality, social architecture.',
    Leo: 'Governmental leadership, sovereign authority.',
    Virgo: 'Medicine, analytics, detailed engineering.',
    Libra: 'Judiciary, diplomacy, luxury commerce.',
    Scorpio: 'Occult wisdom, research, deep investigation.',
    Sagittarius: 'Philosophy, jurisprudence, spiritual teaching.',
    Capricorn: 'Mass industry, structural governance.',
    Aquarius: 'Humanitarian innovation, higher inventions.',
    Pisces: 'Moksha, transcendence, compassionate mysticism.'
  };
  return VOCATIONS[swamshaSign] || 'Spiritual evolution and worldly fulfillment.';
}
