import { calculateSBCVedhas } from './sbcVedhaRays';

export function detectSBCVedhaHits(transitingMaleficStars: number[], natalSensitiveStars: number[]): boolean {
  for (const tStar of transitingMaleficStars) {
    const vedhas = calculateSBCVedhas(tStar);
    if (natalSensitiveStars.includes(vedhas.frontalVedhaStar) ||
        natalSensitiveStars.includes(vedhas.leftVedhaStar) ||
        natalSensitiveStars.includes(vedhas.rightVedhaStar)) {
      return true;
    }
  }
  return false;
}
