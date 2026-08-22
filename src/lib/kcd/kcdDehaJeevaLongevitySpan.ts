export function estimateKCDLifespan(isDehaStrong: boolean, isJeevaStrong: boolean, baseParamayus: number): number {
  let score = baseParamayus;
  if (isDehaStrong && isJeevaStrong) score = Math.min(100, score + 10);
  else if (!isDehaStrong && !isJeevaStrong) score = Math.max(50, score - 15);
  return score;
}
