/**
 * Litigation & Dispute Outcome Prashna
 * 1st house = Querent, 7th house = Opponent, 6th house = Litigation process, 10th house = Judge/Verdict
 */

export function evaluateLitigationPrashna(lagnaLordStrength: number, seventhLordStrength: number) {
  const querentWins = lagnaLordStrength > seventhLordStrength;
  return {
    victoryVerdict: querentWins ? 'Victory for Querent' : 'Advantage to Opponent / Out of court settlement advised',
    marginScore: Math.abs(lagnaLordStrength - seventhLordStrength)
  };
}
