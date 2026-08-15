/**
 * Solar and Lunar Eclipse Proximity Checker
 * Checks if Sun/Moon conjunction/opposition is within nodal eclipse limits (< 18.5° for Solar, < 12.25° for Lunar).
 */

export interface EclipseAlert {
  isEclipsePossible: boolean;
  type: 'None' | 'Solar Eclipse' | 'Lunar Eclipse';
  distanceToNode: number;
  severity: 'Low' | 'Moderate' | 'High';
}

export function checkEclipseProximity(
  sunLongitude: number,
  moonLongitude: number,
  rahuLongitude: number
): EclipseAlert {
  const diffSunMoon = Math.abs((sunLongitude - moonLongitude + 360) % 360);
  const diffSunRahu = Math.min(
    Math.abs((sunLongitude - rahuLongitude + 360) % 360),
    Math.abs((sunLongitude - ((rahuLongitude + 180) % 360) + 360) % 360)
  );

  // New Moon (Solar Eclipse) check
  if (diffSunMoon < 15 || diffSunMoon > 345) {
    if (diffSunRahu < 18.5) {
      return {
        isEclipsePossible: true,
        type: 'Solar Eclipse',
        distanceToNode: Number(diffSunRahu.toFixed(2)),
        severity: diffSunRahu < 9 ? 'High' : 'Moderate'
      };
    }
  }

  // Full Moon (Lunar Eclipse) check
  if (Math.abs(diffSunMoon - 180) < 15) {
    if (diffSunRahu < 12.25) {
      return {
        isEclipsePossible: true,
        type: 'Lunar Eclipse',
        distanceToNode: Number(diffSunRahu.toFixed(2)),
        severity: diffSunRahu < 6 ? 'High' : 'Moderate'
      };
    }
  }

  return {
    isEclipsePossible: false,
    type: 'None',
    distanceToNode: Number(diffSunRahu.toFixed(2)),
    severity: 'Low'
  };
}
