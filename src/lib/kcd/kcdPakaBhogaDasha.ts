export function evaluateKCDPakaBhoga(activeKCDSign: number, dispositorSign: number) {
  return {
    pakaSign: dispositorSign,
    bhogaSign: (activeKCDSign + (dispositorSign - activeKCDSign + 12) % 12) % 12,
    harmony: 'Paka fuels effort; Bhoga delivers tangible realization.'
  };
}
