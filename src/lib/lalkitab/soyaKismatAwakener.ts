export function evaluateSoyaKismat(is9thVacant: boolean, is10thVacant: boolean) {
  const isDormant = is9thVacant && is10thVacant;
  return {
    isDormant,
    remedy: isDormant ? 'Awaken destiny by placing yellow cloth in parent bedroom and donating to priests.' : 'Destiny is naturally vibrant.'
  };
}
