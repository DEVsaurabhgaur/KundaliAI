/**
 * Sarvatobhadra Chakra Vedha Rays:
 * - Frontal Vedha (Pura Vedha): Straight 180° across the grid.
 * - Left Vedha (Vama Vedha): Direct diagonal left ray.
 * - Right Vedha (Dakshina Vedha): Direct diagonal right ray.
 */

export function calculateSBCVedhas(starIdx28: number) {
  const frontal = (starIdx28 + 14) % 28;
  const left = (starIdx28 + 7) % 28;
  const right = (starIdx28 + 21) % 28;

  return {
    frontalVedhaStar: frontal,
    leftVedhaStar: left,
    rightVedhaStar: right
  };
}
