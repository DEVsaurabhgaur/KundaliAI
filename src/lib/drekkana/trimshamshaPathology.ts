export function evaluateTrimshamsha(d30SignLord: string): string {
  const PATHOLOGIES: Record<string, string> = {
    Mars: 'Impulsive courage, high adrenaline, risk-taking drive.',
    Saturn: 'Resilient endurance, overcoming early delays.',
    Jupiter: 'Virtuous morality, wisdom, dharma protection.',
    Mercury: 'Sharp commercial intellect, versatility.',
    Venus: 'Refined artistic taste, sensuality, diplomacy.'
  };
  return PATHOLOGIES[d30SignLord] || 'Balanced Character Strength.';
}
