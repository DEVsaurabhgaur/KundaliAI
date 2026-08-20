import { useMemo } from 'react';
import { calculateSBCVedhas } from '../lib/sbc/sbcVedhaRays';
import { calculateSpecialSBCStars } from '../lib/sbc/sbcSpecialStars';

export function useSarvatobhadraChakra(janmaStar28: number) {
  const specialStars = useMemo(() => calculateSpecialSBCStars(janmaStar28), [janmaStar28]);
  const vedhaRays = useMemo(() => calculateSBCVedhas(janmaStar28), [janmaStar28]);

  return { specialStars, vedhaRays };
}
