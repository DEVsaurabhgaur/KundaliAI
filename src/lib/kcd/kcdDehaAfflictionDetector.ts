export function checkDehaJeevaTransitAffliction(transitingMalefics: number[], dehaSign: number, jeevaSign: number) {
  const isDehaAfflicted = transitingMalefics.includes(dehaSign);
  const isJeevaAfflicted = transitingMalefics.includes(jeevaSign);

  return {
    isDehaAfflicted,
    isJeevaAfflicted,
    warning: (isDehaAfflicted || isJeevaAfflicted) ? 'Caution: Malefic transiting Deha/Jeeva point. Perform protective Mrityunjaya japa.' : 'Deha and Jeeva points clean and vibrant.'
  };
}
