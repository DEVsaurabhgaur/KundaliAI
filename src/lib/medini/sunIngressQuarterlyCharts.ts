export const CARDINAL_INGRESSES: Record<number, string> = {
  0: 'Mesha Sankranti (Spring Equinox / New Year Epoch)',
  3: 'Karka Sankranti (Summer Solstice / Dakshinayana Ingress)',
  6: 'Tula Sankranti (Autumnal Equinox / Trade Cycle)',
  9: 'Makara Sankranti (Winter Solstice / Uttarayana Ingress)'
};

export function getIngressQuarter(signIndex: number): string {
  return CARDINAL_INGRESSES[signIndex] || 'Intermediate Monthly Transit';
}
