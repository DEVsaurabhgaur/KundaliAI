/**
 * Nadi Vocational Profiler (Saturn + Associated Planets)
 */

export function getNadiProfession(saturnCompanion: string): string {
  const VOCATIONS: Record<string, string> = {
    Jupiter: 'Teaching, advisory, judiciary, temple administration, spiritual leadership.',
    Mercury: 'Auditing, IT, trade, commercial brokerage, publishing, accounting.',
    Venus: 'Luxury hospitality, finance, architectural design, media production.',
    Mars: 'Engineering, defense, surgery, real estate, manufacturing.',
    Sun: 'Public administration, government contracting, political executive.',
    Moon: 'Culinary trade, marine transit, nursing, psychology, international trade.',
    Rahu: 'Artificial intelligence, aviation, foreign diplomacy, biotechnology.',
    Ketu: 'Data encryption, astrology, jurisprudence, spiritual monkhood.'
  };

  return VOCATIONS[saturnCompanion] || 'Versatile multifaceted profession.';
}
