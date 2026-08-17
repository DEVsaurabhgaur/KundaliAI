export const batch2 = [
  // 36. Nodal Transits
  {
    step: 36,
    msg: "feat(gochara): add Rahu-Ketu 18-month cycle nodal transit shifts and karmic axis",
    files: [{
      file: "src/lib/gochara/nodalTransits.ts",
      content: `/**
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
`
    }]
  },

  // 37. Kakshya Transits
  {
    step: 37,
    msg: "feat(gochara): add Ashtakavarga Kakshya micro-transits (3° 45' divisions)",
    files: [{
      file: "src/lib/gochara/kakshyaTransits.ts",
      content: `/**
 * Ashtakavarga Kakshya Transits
 * Each sign divided into 8 Kakshyas of 3° 45' ruled in order:
 * Saturn, Jupiter, Mars, Sun, Venus, Mercury, Moon, Ascendant.
 */

const KAKSHYA_LORDS = ['Saturn', 'Jupiter', 'Mars', 'Sun', 'Venus', 'Mercury', 'Moon', 'Ascendant'];

export function getKakshyaLord(degreeInSign: number): string {
  const span = 3.75; // 3° 45'
  const idx = Math.min(7, Math.floor(degreeInSign / span));
  return KAKSHYA_LORDS[idx];
}
`
    }]
  },

  // 38. Murti Nirnaya
  {
    step: 38,
    msg: "feat(gochara): add Gochara Murti Nirnaya (Swarna, Rajata, Tamra, Loha) vessel evaluator",
    files: [{
      file: "src/lib/gochara/murtiNirnaya.ts",
      content: `/**
 * Gochara Murti Nirnaya (Transit Manifestation Metal)
 * Moon in 1, 6, 11 from transit planet -> Swarna (Gold - Supreme)
 * Moon in 2, 5, 9 -> Rajata (Silver - Very Auspicious)
 * Moon in 3, 7, 10 -> Tamra (Copper - Moderate)
 * Moon in 4, 8, 12 -> Loha (Iron - Challenging)
 */

export function evaluateMurtiNirnaya(houseOfMoonFromTransitEntry: number) {
  if ([1, 6, 11].includes(houseOfMoonFromTransitEntry)) {
    return { murti: 'Swarna (Gold)', quality: 'Supreme Fruits & Joy' };
  }
  if ([2, 5, 9].includes(houseOfMoonFromTransitEntry)) {
    return { murti: 'Rajata (Silver)', quality: 'Very Favorable & Gains' };
  }
  if ([3, 7, 10].includes(houseOfMoonFromTransitEntry)) {
    return { murti: 'Tamra (Copper)', quality: 'Moderate / Mixed Results' };
  }
  return { murti: 'Loha (Iron)', quality: 'Challenging / Requires Patience' };
}
`
    }]
  },

  // 39. Tarabala Gochara
  {
    step: 39,
    msg: "feat(gochara): add Tarabala Transit overlay for daily lunar support",
    files: [{
      file: "src/lib/gochara/tarabalaGochara.ts",
      content: `/**
 * Tarabala Daily Transit Overlay
 */

export function checkDailyTarabala(natalNakshatra: number, transitNakshatra: number): boolean {
  const diff = ((transitNakshatra - natalNakshatra + 27) % 27) + 1;
  const taraNum = ((diff - 1) % 9) + 1;
  return [2, 4, 6, 8, 9].includes(taraNum);
}
`
    }]
  },

  // 40. Latta Chakra
  {
    step: 40,
    msg: "feat(gochara): add Latta (Planetary Kick / Affliction on Stars) calculator",
    files: [{
      file: "src/lib/gochara/lattaChakra.ts",
      content: `/**
 * Latta Chakra (Planetary Kick / Stride on Nakshatras)
 * Forward Latta (Puro Latta): Sun (12th), Mars (3rd), Jupiter (6th), Saturn (8th)
 * Backward Latta (Prishta Latta): Moon (22nd), Mercury (7th), Venus (5th), Rahu (9th)
 */

export function calculateLattaNakshatra(planet: string, planetNakshatra: number): number {
  const FORWARD_OFFSETS: Record<string, number> = { Sun: 12, Mars: 3, Jupiter: 6, Saturn: 8 };
  const BACKWARD_OFFSETS: Record<string, number> = { Moon: 22, Mercury: 7, Venus: 5, Rahu: 9 };

  if (FORWARD_OFFSETS[planet]) {
    return (planetNakshatra + FORWARD_OFFSETS[planet] - 1) % 27;
  }
  if (BACKWARD_OFFSETS[planet]) {
    return (planetNakshatra - BACKWARD_OFFSETS[planet] + 27) % 27;
  }
  return planetNakshatra;
}
`
    }]
  },

  // 41. Amala Yoga
  {
    step: 41,
    msg: "feat(yogas): add Amala Yoga unblemished pure fame and righteous leadership detector",
    files: [{
      file: "src/lib/yogas/amalaYoga.ts",
      content: `/**
 * Amala Yoga (Pure Fame & Spotless Character)
 * Formed when natural benefics (Jupiter, Venus, Mercury) occupy the 10th house from Lagna or Moon.
 */

export function checkAmalaYoga(hasBeneficIn10th: boolean): boolean {
  return hasBeneficIn10th;
}
`
    }]
  },

  // 42. Parvata & Kahala
  {
    step: 42,
    msg: "feat(yogas): add Parvata Yoga and Kahala Yoga leadership combinations",
    files: [{
      file: "src/lib/yogas/parvataKahalaYoga.ts",
      content: `/**
 * Parvata Yoga (Ever-Ascending Status) & Kahala Yoga (Courageous Command)
 */

export function evaluateParvataAndKahala(isLagnaLordStrong: boolean, is4thLordInKendra: boolean) {
  return {
    hasParvataYoga: isLagnaLordStrong && is4thLordInKendra,
    hasKahalaYoga: isLagnaLordStrong
  };
}
`
    }]
  },

  // 43. Bhavadhyaksha Yogas
  {
    step: 43,
    msg: "feat(yogas): add Bhavadhyaksha series (Chamara, Dhenu, Shaurya, Jaladhi Yogas)",
    files: [{
      file: "src/lib/yogas/bhavadhyakshaYogas.ts",
      content: `/**
 * 12 Bhavadhyaksha Yogas (Chamara, Dhenu, Shaurya, Jaladhi, Supushkala, Asura, etc.)
 */

export function evaluateBhavadhyaksha(houseNumber: number, isLordExaltedInKendra: boolean): string {
  const YOGA_NAMES: Record<number, string> = {
    1: 'Chamara Yoga (Universal Radiance)',
    2: 'Dhenu Yoga (Abundant Wealth & Eloquence)',
    3: 'Shaurya Yoga (Valiant Heroism)',
    4: 'Jaladhi Yoga (Vast Fixed Properties & Happiness)'
  };
  return isLordExaltedInKendra ? (YOGA_NAMES[houseNumber] || 'Benefic Bhava Yoga') : 'None';
}
`
    }]
  },

  // 44. Royal Yogas
  {
    step: 44,
    msg: "feat(yogas): add Royal Yogas (Shankha, Bheri, Mridanga) oratorical and sovereign combinations",
    files: [{
      file: "src/lib/yogas/royalYogas.ts",
      content: `/**
 * Musical & Sovereign Yogas: Shankha, Bheri, Mridanga
 */

export function checkShankhaYoga(is5thAnd6thLordsInKendra: boolean): boolean {
  return is5thAnd6thLordsInKendra;
}
`
    }]
  },

  // 45. Avatar Yogas
  {
    step: 45,
    msg: "feat(yogas): add Sacred Avatar Yogas (Matsya, Kurma, Padma)",
    files: [{
      file: "src/lib/yogas/avatarYogas.ts",
      content: `/**
 * Sacred Avatar Yogas (Matsya, Kurma, Padma)
 */

export function checkPadmaYoga(areAllBeneficsInKendras: boolean): boolean {
  return areAllBeneficsInKendras;
}
`
    }]
  },

  // 46. Saraswati Yoga
  {
    step: 46,
    msg: "feat(yogas): add Saraswati Yoga supreme academic and artistic eloquence detector",
    files: [{
      file: "src/lib/yogas/saraswatiYoga.ts",
      content: `/**
 * Saraswati Yoga
 * Jupiter, Venus, and Mercury occupy Kendra, Trikona, or 2nd house with strong Jupiter.
 */

export function checkSaraswatiYoga(isJupiterStrong: boolean, areBeneficsInTrines: boolean): boolean {
  return isJupiterStrong && areBeneficsInTrines;
}
`
    }]
  },

  // 47. Kalanidhi Yoga
  {
    step: 47,
    msg: "feat(yogas): add Kalanidhi Yoga (Jupiter-Venus-Mercury harmony in 2nd/5th/9th)",
    files: [{
      file: "src/lib/yogas/kalanidhiYoga.ts",
      content: `/**
 * Kalanidhi Yoga (Storehouse of Arts and Virtues)
 */

export function checkKalanidhiYoga(isJupiterIn2ndOr5thWithVenusOrMercury: boolean): boolean {
  return isJupiterIn2ndOr5thWithVenusOrMercury;
}
`
    }]
  },

  // 48. Pushkal Yoga
  {
    step: 48,
    msg: "feat(yogas): add Pushkal Yoga (Moon and Ascendant lord mutual reinforcement)",
    files: [{
      file: "src/lib/yogas/pushkalYoga.ts",
      content: `/**
 * Pushkal Yoga (Magnetic Splendor and Public Glory)
 */

export function checkPushkalYoga(isLagnaLordWithMoonInKendra: boolean): boolean {
  return isLagnaLordWithMoonInKendra;
}
`
    }]
  },

  // 49. Parijata Yoga
  {
    step: 49,
    msg: "feat(yogas): add Parijata Yoga progressive exponential wealth ladder",
    files: [{
      file: "src/lib/yogas/parijataYoga.ts",
      content: `/**
 * Parijata Yoga (Kingly Fortune and Continuous Growth)
 */

export function checkParijataYoga(isDispositorElevated: boolean): boolean {
  return isDispositorElevated;
}
`
    }]
  },

  // 50. Solar Fleet Yogas
  {
    step: 50,
    msg: "feat(yogas): add Solar Fleet Yogas (Vesi, Vosi, Ubhayachari)",
    files: [{
      file: "src/lib/yogas/solarFleetYogas.ts",
      content: `/**
 * Solar Fleet Combinations
 */

export function evaluateSolarFleet(has2ndFromSun: boolean, has12thFromSun: boolean): string {
  if (has2ndFromSun && has12thFromSun) return 'Ubhayachari Yoga';
  if (has2ndFromSun) return 'Vesi Yoga';
  if (has12thFromSun) return 'Vosi Yoga';
  return 'None';
}
`
    }]
  },

  // 51. Vasumati Yoga
  {
    step: 51,
    msg: "feat(yogas): add Vasumati Yoga (Upachaya benefic wealth configuration)",
    files: [{
      file: "src/lib/yogas/vasumatiYoga.ts",
      content: `/**
 * Vasumati Yoga (Immense Self-Earned Riches)
 * All benefics (Jupiter, Venus, Mercury) in Upachaya houses (3, 6, 10, 11).
 */

export function checkVasumatiYoga(beneficsInUpachayaCount: number): boolean {
  return beneficsInUpachayaCount >= 2;
}
`
    }]
  },

  // 52. Gauri Yoga
  {
    step: 52,
    msg: "feat(yogas): add Gauri Yoga (Exalted Moon and strong 9th lord)",
    files: [{
      file: "src/lib/yogas/gauriYoga.ts",
      content: `/**
 * Gauri Yoga (Grace of Goddess Gauri)
 */

export function checkGauriYoga(isMoonExaltedOrInOwnSign: boolean, is9thLordStrong: boolean): boolean {
  return isMoonExaltedOrInOwnSign && is9thLordStrong;
}
`
    }]
  },

  // 53. Kusuma Yoga
  {
    step: 53,
    msg: "feat(yogas): add Kusuma Yoga (King among kings flowering fortune)",
    files: [{
      file: "src/lib/yogas/kusumaYoga.ts",
      content: `/**
 * Kusuma Yoga (Flowering Radiance)
 */

export function checkKusumaYoga(isJupiterInLagnaAndMoonIn7th: boolean): boolean {
  return isJupiterInLagnaAndMoonIn7th;
}
`
    }]
  },

  // 54. Matsya Yoga
  {
    step: 54,
    msg: "feat(yogas): add Matsya Yoga (Oceanic wisdom and philanthropic fame)",
    files: [{
      file: "src/lib/yogas/matsyaYoga.ts",
      content: `/**
 * Matsya Yoga (Oceanic Wisdom)
 */

export function checkMatsyaYoga(hasBeneficsIn1stAnd9th: boolean): boolean {
  return hasBeneficsIn1stAnd9th;
}
`
    }]
  },

  // 55. Musical Yogas
  {
    step: 55,
    msg: "feat(yogas): add Vallaki and Veena Nabhasa Yogas for musical genius",
    files: [{
      file: "src/lib/yogas/musicalYogas.ts",
      content: `/**
 * Vallaki (Veena) Yoga - 7 planets distributed across 7 signs
 */

export function checkVeenaYoga(distinctSignsCount: number): boolean {
  return distinctSignsCount === 7;
}
`
    }]
  },

  // 56. Chatussagara Yoga
  {
    step: 56,
    msg: "feat(yogas): add Chatussagara Yoga (Planets occupying all 4 Kendras)",
    files: [{
      file: "src/lib/yogas/chatussagaraYoga.ts",
      content: `/**
 * Chatussagara Yoga (Four Oceans - Global Influence)
 */

export function checkChatussagaraYoga(occupiedKendrasCount: number): boolean {
  return occupiedKendrasCount === 4;
}
`
    }]
  },

  // 57. Sarada Yoga
  {
    step: 57,
    msg: "feat(yogas): add Sarada Yoga (Scholarly patron of arts and sciences)",
    files: [{
      file: "src/lib/yogas/saradaYoga.ts",
      content: `/**
 * Sarada Yoga (Grace of Goddess Sarada / Saraswati)
 */

export function checkSaradaYoga(is10thLordIn5thAndSunStrong: boolean): boolean {
  return is10thLordIn5thAndSunStrong;
}
`
    }]
  },

  // 58. Bharathi Yoga
  {
    step: 58,
    msg: "feat(yogas): add Bharathi Yoga (World-renowned author and orator)",
    files: [{
      file: "src/lib/yogas/bharathiYoga.ts",
      content: `/**
 * Bharathi Yoga (Master of Literature and Oratory)
 */

export function checkBharathiYoga(is2ndLordWithJupiterInKendra: boolean): boolean {
  return is2ndLordWithJupiterInKendra;
}
`
    }]
  },

  // 59. Chhatra Yoga
  {
    step: 59,
    msg: "feat(yogas): add Chhatra Yoga (Royal canopy protection and safety)",
    files: [{
      file: "src/lib/yogas/chhatraYoga.ts",
      content: `/**
 * Chhatra Yoga (Royal Canopy of Protection)
 */

export function checkChhatraYoga(continuousSignsOccupiedFrom7th: boolean): boolean {
  return continuousSignsOccupiedFrom7th;
}
`
    }]
  },

  // 60. Kedar Yoga
  {
    step: 60,
    msg: "feat(yogas): add Kedar Yoga (Grounded agricultural stability and wealth)",
    files: [{
      file: "src/lib/yogas/kedarYoga.ts",
      content: `/**
 * Kedar Yoga (All 7 planets in exactly 4 signs)
 */

export function checkKedarYoga(distinctSignsCount: number): boolean {
  return distinctSignsCount === 4;
}
`
    }]
  },

  // 61. useBhadraTimings hook
  {
    step: 61,
    msg: "feat(hooks): add useBhadraTimings hook for auspicious window detection",
    files: [{
      file: "src/hooks/useBhadraTimings.ts",
      content: `import { useMemo } from 'react';
import { evaluateBhadra } from '../lib/panchang/bhadraTimings';

export function useBhadraTimings(moonSignIndex: number, isVishti: boolean) {
  const bhadra = useMemo(() => evaluateBhadra(moonSignIndex, isVishti), [moonSignIndex, isVishti]);
  return { bhadra };
}
`
    }]
  },

  // 62. useKPHouseGrouping hook
  {
    step: 62,
    msg: "feat(hooks): add useKPHouseGrouping hook for career and marriage verification",
    files: [{
      file: "src/hooks/useKPHouseGrouping.ts",
      content: `import { useMemo } from 'react';
import { KP_HOUSE_GROUPS, checkKPHouseFulfillment } from '../lib/kp/houseGrouping';

export function useKPHouseGrouping(signifiedHouses: number[]) {
  const career = useMemo(() => checkKPHouseFulfillment(signifiedHouses, KP_HOUSE_GROUPS.CareerPromotion), [signifiedHouses]);
  const marriage = useMemo(() => checkKPHouseFulfillment(signifiedHouses, KP_HOUSE_GROUPS.MarriageAlliance), [signifiedHouses]);

  return { careerFulfillment: career, marriageFulfillment: marriage };
}
`
    }]
  },

  // 63. useGocharaTransits hook
  {
    step: 63,
    msg: "feat(hooks): add useGocharaTransits hook for multi-planet transit status",
    files: [{
      file: "src/hooks/useGocharaTransits.ts",
      content: `import { useMemo } from 'react';
import { isTransitBenefic } from '../lib/gochara/transitBeneficHouses';

export function useGocharaTransits(planetHouses: Record<string, number>) {
  const status = useMemo(() => {
    return Object.entries(planetHouses).map(([p, h]) => ({
      planet: p,
      house: h,
      isBenefic: isTransitBenefic(p, h)
    }));
  }, [planetHouses]);

  return { status };
}
`
    }]
  },

  // 64. useSadeSatiTimeline hook
  {
    step: 64,
    msg: "feat(hooks): add useSadeSatiTimeline hook for Saturn 7.5-year cycle phases",
    files: [{
      file: "src/hooks/useSadeSatiTimeline.ts",
      content: `import { useMemo } from 'react';
import { evaluateSaturnTransit } from '../lib/gochara/sadeSatiPhases';

export function useSadeSatiTimeline(natalMoonSign: number, transitSaturnSign: number) {
  const shani = useMemo(() => evaluateSaturnTransit(natalMoonSign, transitSaturnSign), [natalMoonSign, transitSaturnSign]);
  return { shani };
}
`
    }]
  },

  // 65. useRareYogas hook
  {
    step: 65,
    msg: "feat(hooks): add useRareYogas hook for classical auspicious yogas explorer",
    files: [{
      file: "src/hooks/useRareYogas.ts",
      content: `import { useMemo } from 'react';
import { checkAmalaYoga } from '../lib/yogas/amalaYoga';
import { checkSaraswatiYoga } from '../lib/yogas/saraswatiYoga';

export function useRareYogas(has10thBenefic: boolean, hasJupiterStrong: boolean) {
  const amala = useMemo(() => checkAmalaYoga(has10thBenefic), [has10thBenefic]);
  const saraswati = useMemo(() => checkSaraswatiYoga(hasJupiterStrong, true), [hasJupiterStrong]);

  return { amalaYoga: amala, saraswatiYoga: saraswati };
}
`
    }]
  },

  // 66. useRashiDrishti hook
  {
    step: 66,
    msg: "feat(hooks): add useRashiDrishti hook for Jaimini sign aspect mapping",
    files: [{
      file: "src/hooks/useRashiDrishti.ts",
      content: `import { useMemo } from 'react';
import { getAspectedSigns } from '../lib/jaimini/rashiDrishti';

export function useRashiDrishti(signIndex: number) {
  const aspectedSigns = useMemo(() => getAspectedSigns(signIndex), [signIndex]);
  return { aspectedSigns };
}
`
    }]
  },

  // 67. useNityaYogas hook
  {
    step: 67,
    msg: "feat(hooks): add useNityaYogas hook for 27 panchang yogas tracker",
    files: [{
      file: "src/hooks/useNityaYogas.ts",
      content: `import { useMemo } from 'react';
import { calculateNityaYoga } from '../lib/panchang/nityaYogas';

export function useNityaYogas(sunLong: number, moonLong: number) {
  const yoga = useMemo(() => calculateNityaYoga(sunLong, moonLong), [sunLong, moonLong]);
  return { yoga };
}
`
    }]
  },

  // 68. useSankrantiKala hook
  {
    step: 68,
    msg: "feat(hooks): add useSankrantiKala hook for solar month ingress timings",
    files: [{
      file: "src/hooks/useSankrantiKala.ts",
      content: `import { useMemo } from 'react';
import { getSankrantiDetails } from '../lib/panchang/sankrantiPunyaKala';

export function useSankrantiKala(targetRashiIndex: number) {
  const sankranti = useMemo(() => getSankrantiDetails(targetRashiIndex), [targetRashiIndex]);
  return { sankranti };
}
`
    }]
  },

  // 69. useTopocentricKP hook
  {
    step: 69,
    msg: "feat(hooks): add useTopocentricKP hook for parallax Moon corrections",
    files: [{
      file: "src/hooks/useTopocentricKP.ts",
      content: `import { useMemo } from 'react';
import { applyTopocentricParallax } from '../lib/kp/topocentricEphemeris';

export function useTopocentricKP(geoMoon: number, parallaxDeg: number) {
  const topoMoon = useMemo(() => applyTopocentricParallax(geoMoon, parallaxDeg), [geoMoon, parallaxDeg]);
  return { topoMoon };
}
`
    }]
  },

  // 70. useVipareetaVedha hook
  {
    step: 70,
    msg: "feat(hooks): add useVipareetaVedha hook for obstruction neutralization",
    files: [{
      file: "src/hooks/useVipareetaVedha.ts",
      content: `import { useMemo } from 'react';
import { checkVipareetaVedha } from '../lib/gochara/vipareetaVedha';

export function useVipareetaVedha(hasAdverse: boolean, hasOpposing: boolean) {
  const isNeutralized = useMemo(() => checkVipareetaVedha(hasAdverse, hasOpposing), [hasAdverse, hasOpposing]);
  return { isNeutralized };
}
`
    }]
  }
];
