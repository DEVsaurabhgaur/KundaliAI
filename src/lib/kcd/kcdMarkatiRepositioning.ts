export function isMarkatiJump(fromSign: number, toSign: number): boolean {
  return (toSign - fromSign + 12) % 12 === 11;
}
