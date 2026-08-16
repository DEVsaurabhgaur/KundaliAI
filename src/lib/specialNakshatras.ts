/**
 * Special Sensitive Nakshatras from Janma Nakshatra
 * 1. Janma (1st) - Self & Constitution
 * 2. Karma (10th) - Profession & Endeavors
 * 3. Sanghatika (16th) - Alliances & Group dynamics
 * 4. Samudayika (18th) - Collective gains
 * 5. Vainashika (23rd) - Vulnerability & Destruction
 * 6. Manasa (25th) - Mental state & Peace
 */

export function calculateSpecialNakshatras(janmaNakshatraIndex: number) {
  const getIndex = (offset: number) => (janmaNakshatraIndex + offset - 1) % 27;

  return {
    janma: getIndex(1),
    karma: getIndex(10),
    sanghatika: getIndex(16),
    samudayika: getIndex(18),
    vainashika: getIndex(23),
    manasa: getIndex(25)
  };
}
