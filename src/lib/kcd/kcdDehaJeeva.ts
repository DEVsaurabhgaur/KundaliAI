/**
 * Kalachakra Dasha: Deha (Body) & Jeeva (Life/Soul) Signs
 * Deha represents the physical vitality and physical manifestations.
 * Jeeva represents consciousness, longevity, and spiritual breath.
 */

export function getKCDDehaJeeva(isSavya: boolean, startSign: number) {
  const deha = startSign % 12;
  const jeeva = (startSign + (isSavya ? 8 : 4)) % 12;

  return {
    dehaSignIndex: deha,
    jeevaSignIndex: jeeva,
    interpretation: 'Protect Deha and Jeeva signs during malefic transits for health and vitality.'
  };
}
