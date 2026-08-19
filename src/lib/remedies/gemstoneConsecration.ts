/**
 * Gemstone Consecration (Prana Pratishtha) Protocol
 */

export function getConsecrationProcedure(planet: string) {
  return {
    planet,
    mantraJapaCount: 108,
    purificationSubstances: ['Ganga Jal', 'Raw Milk', 'Honey', 'Ghee', 'Tulsi Leaves'],
    auspiciousDay: planet === 'Sun' ? 'Sunday Morning' : planet === 'Jupiter' ? 'Thursday Morning' : 'Wednesday/Friday'
  };
}
