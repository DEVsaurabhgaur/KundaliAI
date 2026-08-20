/**
 * 9 Special Sensitive Stars in Sarvatobhadra Chakra (from Janma Nakshatra):
 * 1: Janma | 10: Karma | 16: Sanghatika | 18: Samudayika |
 * 19: Aadhana | 23: Vainashika | 25: Jati | 26: Desha | 27: Abhisheka
 */

export function calculateSpecialSBCStars(janmaStarIdx28: number) {
  return {
    janma: janmaStarIdx28 % 28,
    karma: (janmaStarIdx28 + 9) % 28,
    sanghatika: (janmaStarIdx28 + 15) % 28,
    samudayika: (janmaStarIdx28 + 17) % 28,
    aadhana: (janmaStarIdx28 + 18) % 28,
    vainashika: (janmaStarIdx28 + 22) % 28,
    jati: (janmaStarIdx28 + 24) % 28,
    desha: (janmaStarIdx28 + 25) % 28,
    abhisheka: (janmaStarIdx28 + 26) % 28
  };
}
