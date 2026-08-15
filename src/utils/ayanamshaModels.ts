/**
 * Multi-Variant Ayanamsha Calculator
 * Supports Lahiri (Chitrapaksha), KP (Krishnamurti), BV Raman, Sri Yukteshwar, and Fagan-Bradley.
 */

export type AyanamshaSystem = 'Lahiri' | 'KP' | 'Raman' | 'Yukteshwar' | 'FaganBradley';

export function getAyanamshaOffset(system: AyanamshaSystem, year: number): number {
  const t = (year - 2000) / 100;
  const precessionRate = 50.290966 / 3600; // deg per year

  switch (system) {
    case 'Lahiri':
      return 23.8596 + (year - 2000) * precessionRate;
    case 'KP':
      return 23.8596 - 0.098 + (year - 2000) * precessionRate;
    case 'Raman':
      return 22.4042 + (year - 2000) * precessionRate;
    case 'Yukteshwar':
      return 21.054 + (year - 2000) * precessionRate;
    case 'FaganBradley':
      return 24.74 + (year - 2000) * precessionRate;
    default:
      return 23.8596 + (year - 2000) * precessionRate;
  }
}
