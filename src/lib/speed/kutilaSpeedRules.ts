export function isKutilaMotion(day1Speed: number, day2Speed: number): boolean {
  return Math.abs(day2Speed - day1Speed) > 0.15;
}
