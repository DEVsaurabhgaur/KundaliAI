/**
 * Lost Property Recovery Probability
 */

export function evaluateLostPropertyRecovery(isBeneficInKendra: boolean, isMoonWaxing: boolean) {
  const isRecoverable = isBeneficInKendra && isMoonWaxing;
  return {
    isRecoverable,
    estimatedDays: isRecoverable ? 3 : 15
  };
}
