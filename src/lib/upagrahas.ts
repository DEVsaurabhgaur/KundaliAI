/**
 * Upagrahas (Secondary shadow planets)
 * Includes Mandi, Gulika, Dhuma, Vyatipata, Parivesha, Indrachapa, Upaketu
 */

export interface UpagrahaPosition {
  name: string;
  longitude: number;
  rashiName: string;
}

const RASHIS = [
  'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
  'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

export function calculateSunUpagrahas(sunLongitude: number): UpagrahaPosition[] {
  const normSun = ((sunLongitude % 360) + 360) % 360;

  // Dhuma = Sun + 133° 20'
  const dhuma = (normSun + 133.3333) % 360;
  // Vyatipata = 360° - Dhuma
  const vyatipata = (360 - dhuma) % 360;
  // Parivesha = Vyatipata + 180°
  const parivesha = (vyatipata + 180) % 360;
  // Indrachapa = 360° - Parivesha
  const indrachapa = (360 - parivesha) % 360;
  // Upaketu = Indrachapa + 16° 40'
  const upaketu = (indrachapa + 16.6667) % 360;

  const getEntry = (name: string, long: number): UpagrahaPosition => ({
    name,
    longitude: Number(long.toFixed(2)),
    rashiName: RASHIS[Math.floor(long / 30)]
  });

  return [
    getEntry('Dhuma', dhuma),
    getEntry('Vyatipata', vyatipata),
    getEntry('Parivesha', parivesha),
    getEntry('Indrachapa', indrachapa),
    getEntry('Upaketu', upaketu)
  ];
}
