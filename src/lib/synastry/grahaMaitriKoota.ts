/**
 * Graha Maitri Koota (5 Points in Ashtakoota)
 * Evaluates friendship between Moon sign lords of bride and groom.
 */

export function calculateGrahaMaitriScore(isMutualFriends: boolean, isOneFriendOneNeutral: boolean, isBothNeutral: boolean): number {
  if (isMutualFriends) return 5.0;
  if (isOneFriendOneNeutral) return 4.0;
  if (isBothNeutral) return 3.0;
  return 0.5;
}
