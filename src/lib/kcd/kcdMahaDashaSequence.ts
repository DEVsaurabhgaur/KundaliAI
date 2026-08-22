import { getKCDDuration } from './kcdSignDurations';

export function generateKCDSequence(startSign: number) {
  return Array.from({ length: 9 }, (_, i) => {
    const sign = (startSign + i) % 12;
    return {
      stage: i + 1,
      signIndex: sign,
      durationYears: getKCDDuration(sign)
    };
  });
}
