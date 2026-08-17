/**
 * Nodal Transits (Rahu-Ketu 18-Month Axis Ingress)
 */

export function checkNodalTransitAxis(natalRahuSign: number, transitRahuSign: number) {
  const isNodalReturn = natalRahuSign === transitRahuSign;
  const isNodalOpposition = ((transitRahuSign - natalRahuSign + 12) % 12) === 6;

  return {
    isNodalReturn,
    isNodalOpposition,
    theme: isNodalReturn
      ? 'Major 18.6-year nodal return: Karmic life-chapter initiation.'
      : isNodalOpposition
      ? 'Half-nodal return (9.3 years): Karmic recalibration and directional pivot.'
      : 'Normal nodal transit progression.'
  };
}
