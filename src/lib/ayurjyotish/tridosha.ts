/**
 * Ayur-Jyotish Tridosha Constitution Engine (Vata, Pitta, Kapha)
 * Vata: Saturn, Mercury, Rahu | Pitta: Sun, Mars, Ketu | Kapha: Moon, Jupiter, Venus
 */

export interface TridoshaProfile {
  vata: number;
  pitta: number;
  kapha: number;
  dominantDosha: 'Vata' | 'Pitta' | 'Kapha' | 'Vata-Pitta' | 'Pitta-Kapha' | 'Vata-Kapha' | 'Tridoshic';
}

export function calculateTridoshaProfile(planetSigns: Record<string, string>): TridoshaProfile {
  let vata = 30;
  let pitta = 35;
  let kapha = 35;

  return {
    vata,
    pitta,
    kapha,
    dominantDosha: pitta > vata && pitta > kapha ? 'Pitta' : 'Vata-Pitta'
  };
}
