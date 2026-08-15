/**
 * Bhakoot Dosha Cancellation Exceptions
 * Cancelled if Rashi lords are mutual friends or the same planet.
 */

export function checkBhakootCancellation(boySign: number, girlSign: number) {
  const LORDS = ['Mars', 'Venus', 'Mercury', 'Moon', 'Sun', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Saturn', 'Jupiter'];
  const lordBoy = LORDS[boySign];
  const lordGirl = LORDS[girlSign];

  const isSameLord = lordBoy === lordGirl;
  const isFriendlyPair = (lordBoy === 'Sun' && lordGirl === 'Moon') || (lordBoy === 'Moon' && lordGirl === 'Sun');

  const isCancelled = isSameLord || isFriendlyPair;
  return {
    isCancelled,
    reason: isCancelled ? `Rashi lords (${lordBoy} & ${lordGirl}) are identical or deeply intimate.` : 'None'
  };
}
