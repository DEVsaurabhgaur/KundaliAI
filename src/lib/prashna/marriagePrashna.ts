/**
 * Marriage & Alliance Prashna
 */

export function evaluateMarriagePrashna(is7thLordInKendra: boolean, isVenusStrong: boolean) {
  const willMaterialize = is7thLordInKendra && isVenusStrong;
  return {
    allianceMaterialization: willMaterialize ? 'Favorable Matrimonial Alliance' : 'Delays or Mismatched Expectations',
    harmonyIndex: willMaterialize ? 88 : 50
  };
}
