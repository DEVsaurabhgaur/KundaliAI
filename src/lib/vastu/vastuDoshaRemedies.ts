/**
 * Vastu Dosha Elemental Balancing Remedies
 */

export const VASTU_REMEDIES: Record<string, string> = {
  Northeast: 'Install a clear water fountain, brass idol of Shiva, or sacred copper swastika.',
  Southeast: 'Install a red energy bulb, Agni copper pyramid, or camphor diffuser.',
  Southwest: 'Place yellow heavy stone slabs, lead pyramids, or grounding earth crystals.',
  Northwest: 'Install a white wind chime, silver pyramid, or moonstone diffuser.',
  North: 'Place a green jade plant, Kuber yantra, or crystal tortoise.'
};

export function getVastuRemedy(afflictedDirection: string): string {
  return VASTU_REMEDIES[afflictedDirection] || 'Place a Vastu Maha Yantra in the central foyer.';
}
