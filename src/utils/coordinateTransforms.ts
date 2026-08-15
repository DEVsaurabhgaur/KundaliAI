/**
 * Coordinate Transformations: Ecliptic (lambda, beta) <-> Equatorial (alpha, delta)
 */

export function eclipticToEquatorial(
  eclipticLongitudeDeg: number,
  eclipticLatitudeDeg: number = 0,
  obliquityDeg: number = 23.4392911
) {
  const rad = Math.PI / 180;
  const deg = 180 / Math.PI;

  const lambda = eclipticLongitudeDeg * rad;
  const beta = eclipticLatitudeDeg * rad;
  const eps = obliquityDeg * rad;

  // Right Ascension (alpha)
  const sinAlpha = Math.sin(lambda) * Math.cos(eps) - Math.tan(beta) * Math.sin(eps);
  const cosAlpha = Math.cos(lambda);
  let alpha = Math.atan2(sinAlpha, cosAlpha) * deg;
  alpha = ((alpha % 360) + 360) % 360;

  // Declination (delta)
  const sinDelta = Math.sin(beta) * Math.cos(eps) + Math.cos(beta) * Math.sin(eps) * Math.sin(lambda);
  const delta = Math.asin(sinDelta) * deg;

  return { rightAscension: alpha, declination: delta };
}
