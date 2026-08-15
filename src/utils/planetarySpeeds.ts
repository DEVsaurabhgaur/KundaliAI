/**
 * Planetary Speeds and Retrogradation Detector
 * Detects direct, retrograde, and stationary inflection points based on daily motion.
 */

export interface MotionStatus {
  planet: string;
  dailyMotionDegrees: number;
  motionType: 'Direct' | 'Retrograde' | 'Stationary';
  isCombust: boolean;
}

const AVERAGE_DAILY_SPEEDS: Record<string, number> = {
  Sun: 0.9856, Moon: 13.1764, Mars: 0.5240, Mercury: 1.3833,
  Jupiter: 0.0831, Venus: 1.2000, Saturn: 0.0335, Rahu: -0.0529, Ketu: -0.0529
};

export function evaluatePlanetMotion(
  planet: string,
  dailyMotionDeg: number
): MotionStatus {
  let motionType: MotionStatus['motionType'] = 'Direct';

  if (Math.abs(dailyMotionDeg) < 0.005) {
    motionType = 'Stationary';
  } else if (dailyMotionDeg < 0) {
    motionType = 'Retrograde';
  }

  return {
    planet,
    dailyMotionDegrees: dailyMotionDeg,
    motionType,
    isCombust: false
  };
}
