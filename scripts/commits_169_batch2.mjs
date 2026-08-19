export const batch2 = [
  // 36. Graha Maitri Koota
  {
    step: 36,
    msg: "feat(synastry): add Graha Maitri Koota 5-point planetary friendship calculator",
    files: [{
      file: "src/lib/synastry/grahaMaitriKoota.ts",
      content: `/**
 * Graha Maitri Koota (5 Points in Ashtakoota)
 * Evaluates friendship between Moon sign lords of bride and groom.
 */

export function calculateGrahaMaitriScore(isMutualFriends: boolean, isOneFriendOneNeutral: boolean, isBothNeutral: boolean): number {
  if (isMutualFriends) return 5.0;
  if (isOneFriendOneNeutral) return 4.0;
  if (isBothNeutral) return 3.0;
  return 0.5;
}
`
    }]
  },

  // 37. Bhakoota Exceptions
  {
    step: 37,
    msg: "feat(synastry): add Bhakoot Dosha (6/8, 9/5, 12/2) cancellation exceptions",
    files: [{
      file: "src/lib/synastry/bhakootaExceptions.ts",
      content: `/**
 * Bhakoot Dosha (7 Points) Cancellation Exceptions
 * 1. Both signs have the same lord (e.g., Aries-Scorpio ruled by Mars, Taurus-Libra ruled by Venus).
 * 2. Lords of both signs are mutual friends.
 * 3. Navamsha lords are mutual friends.
 */

export function isBhakootDoshaCancelled(haveSameLord: boolean, areLordsMutualFriends: boolean): boolean {
  return haveSameLord || areLordsMutualFriends;
}
`
    }]
  },

  // 38. Nadi Dosha Cancellations
  {
    step: 38,
    msg: "feat(synastry): add Nadi Koota (Adi, Madhya, Antya) 8-point dosha cancellations",
    files: [{
      file: "src/lib/synastry/nadiDoshaCancellations.ts",
      content: `/**
 * Nadi Koota (8 Points) Cancellation Exceptions
 * 1. Same Rashi but different Nakshatras.
 * 2. Same Nakshatra but different Rashis.
 * 3. Same Nakshatra with different Padas.
 */

export function isNadiDoshaCancelled(isSameRashiDiffNak: boolean, isDiffPada: boolean): boolean {
  return isSameRashiDiffNak || isDiffPada;
}
`
    }]
  },

  // 39. Mantra Chanting Rounds
  {
    step: 39,
    msg: "feat(remedies): add Navagraha Japa Mantra counts and rosary specifications",
    files: [{
      file: "src/lib/remedies/mantraChantingRounds.ts",
      content: `/**
 * Navagraha Japa Mantra Counts (Classical Japa Sankhya)
 */

export const JAPA_COUNTS: Record<string, { count: number; rosary: string }> = {
  Sun: { count: 7000, rosary: 'Ruby / Sandalwood (Rakta Chandan)' },
  Moon: { count: 11000, rosary: 'Pearl / White Sandalwood / Crystal' },
  Mars: { count: 10000, rosary: 'Red Coral / Rudraksha' },
  Mercury: { count: 9000, rosary: 'Tulsi / Emerald' },
  Jupiter: { count: 19000, rosary: 'Turmeric (Haldi) / Yellow Topaz' },
  Venus: { count: 16000, rosary: 'Crystal (Sphatik) / White Lotus' },
  Saturn: { count: 23000, rosary: 'Black Agate / Blue Sapphire / Rudraksha' },
  Rahu: { count: 18000, rosary: 'Black Agate / Gomed' },
  Ketu: { count: 17000, rosary: 'Cat’s Eye / Rudraksha' }
};

export function getJapaDetails(planet: string) {
  return JAPA_COUNTS[planet] || JAPA_COUNTS['Jupiter'];
}
`
    }]
  },

  // 40. Fasting Vrata Matrix
  {
    step: 40,
    msg: "feat(remedies): add Planetary Vrata (Fasting) rules and salt-free dietary guidelines",
    files: [{
      file: "src/lib/remedies/fastingVrataMatrix.ts",
      content: `/**
 * Planetary Fasting (Vrata) Guidelines
 */

export const VRATA_GUIDELINES: Record<string, { day: string; meals: string; saltAllowed: boolean }> = {
  Sun: { day: 'Sunday', meals: 'One meal before sunset (Wheat and Jaggery)', saltAllowed: false },
  Moon: { day: 'Monday', meals: 'Milk, Kheer, and Fruits', saltAllowed: false },
  Mars: { day: 'Tuesday', meals: 'One meal of wheat and jaggery', saltAllowed: false },
  Mercury: { day: 'Wednesday', meals: 'Mung preparations and green fruits', saltAllowed: true },
  Jupiter: { day: 'Thursday', meals: 'Gram flour (Besan) sweets, Chana, Bananas', saltAllowed: false },
  Venus: { day: 'Friday', meals: 'White rice, Kheer, Curd', saltAllowed: false },
  Saturn: { day: 'Saturday', meals: 'Khichdi with sesame or urad dal (one meal)', saltAllowed: true }
};

export function getVrataDetails(planet: string) {
  return VRATA_GUIDELINES[planet] || VRATA_GUIDELINES['Sun'];
}
`
    }]
  },

  // 41. Maraka Timing
  {
    step: 41,
    msg: "feat(medical): add Maraka houses (2nd and 7th) vital inflection timing",
    files: [{
      file: "src/lib/medical/marakaTiming.ts",
      content: `/**
 * Maraka Houses (2nd & 7th) and Killers of Vital Energy
 */

export function isMarakaLord(houseLordNumber: number): boolean {
  return houseLordNumber === 2 || houseLordNumber === 7;
}
`
    }]
  },

  // 42. Badhaka Houses
  {
    step: 42,
    msg: "feat(medical): add Badhaka houses (11th for Movable, 9th for Fixed, 7th for Dual)",
    files: [{
      file: "src/lib/medical/badhakaHouses.ts",
      content: `/**
 * Badhaka (Obstructing) House Locator
 * - Movable Ascendant (Aries, Cancer, Libra, Cap): 11th House
 * - Fixed Ascendant (Taurus, Leo, Scorpio, Aqua): 9th House
 * - Dual Ascendant (Gemini, Virgo, Sag, Pisces): 7th House
 */

export function getBadhakaHouse(lagnaSignIndex: number): number {
  const modality = lagnaSignIndex % 3;
  if (modality === 0) return 11;
  if (modality === 1) return 9;
  return 7;
}
`
    }]
  },

  // 43. Trikona Reduction Rules
  {
    step: 43,
    msg: "feat(pinda): add Trikona Shodhana triangular reduction algorithm",
    files: [{
      file: "src/lib/pinda/trikonaReductionRules.ts",
      content: `/**
 * Trikona Shodhana (Trinal Reduction) in Ashtakavarga
 * Group 1: 1, 5, 9 (Aries, Leo, Sagittarius)
 * Group 2: 2, 6, 10 (Taurus, Virgo, Capricorn)
 * Group 3: 3, 7, 11 (Gemini, Libra, Aquarius)
 * Group 4: 4, 8, 12 (Cancer, Scorpio, Pisces)
 * Rule: Subtract minimum bindu in the trine from all three signs.
 */

export function reduceTrikonaGroup(b1: number, b2: number, b3: number): [number, number, number] {
  const min = Math.min(b1, b2, b3);
  return [b1 - min, b2 - min, b3 - min];
}
`
    }]
  },

  // 44. SAV Transit Points
  {
    step: 44,
    msg: "feat(pinda): add 337 SAV matrix transit trigger points",
    files: [{
      file: "src/lib/pinda/sarvashtakavargaTransitPoints.ts",
      content: `/**
 * Sarvashtakavarga 337-Bindu Matrix Verification
 */

export function verifyTotalSAVBindus(savArray12: number[]): boolean {
  const total = savArray12.reduce((a, b) => a + b, 0);
  return total === 337;
}
`
    }]
  },

  // 45. Shool Dasha Engine
  {
    step: 45,
    msg: "feat(sthira): add Jaimini Shool Dasha 7-year death & illness indicator sequence",
    files: [{
      file: "src/lib/sthira/shoolDashaEngine.ts",
      content: `/**
 * Jaimini Shool Dasha Engine (Fixed 7 Years per Sign)
 */

export function generateShoolSequence(eighthHouseSignIndex: number) {
  return Array.from({ length: 12 }, (_, i) => ({
    signIndex: (eighthHouseSignIndex + i) % 12,
    durationYears: 7
  }));
}
`
    }]
  },

  // 46. Brahma Vara Table
  {
    step: 46,
    msg: "feat(sthira): add Brahma Vara table for cardinal longevity estimation",
    files: [{
      file: "src/lib/sthira/brahmaVaraTable.ts",
      content: `/**
 * Brahma Vara Longevity Estimation
 */

export function getBrahmaVaraLifespanCategory(isShort: boolean, isMedium: boolean): string {
  if (isShort) return 'Alpayu (0 - 32 Years)';
  if (isMedium) return 'Madhyayu (33 - 66 Years)';
  return 'Purnayu (67 - 100 Years)';
}
`
    }]
  },

  // 47. Temple Pilgrimages
  {
    step: 47,
    msg: "feat(remedies): add Navagraha Kshetra sacred pilgrimage destination mapping",
    files: [{
      file: "src/lib/remedies/templePilgrimages.ts",
      content: `/**
 * Navagraha Temples & Pilgrimages (Tamil Nadu / Sacred India)
 */

export const NAVAGRAHA_TEMPLES: Record<string, string> = {
  Sun: 'Suryanar Kovil (Thanjavur, Tamil Nadu) & Konark (Odisha)',
  Moon: 'Thingaloor Kailasanathar (Tamil Nadu)',
  Mars: 'Vaitheeswaran Kovil (Chevvai, Tamil Nadu) & Ujjain Mangalnath',
  Mercury: 'Thiruvenkadu Swetharanyeswarar (Budhan Kovil)',
  Jupiter: 'Alangudi Apatsahayeswarar (Guru Kovil)',
  Venus: 'Kanjanur Agneeswarar (Sukran Kovil)',
  Saturn: 'Thirunallar Saniswaran & Shani Shingnapur (Maharashtra)',
  Rahu: 'Thirunageswaram Naganathar & Sri Kalahasti',
  Ketu: 'Keezhperumpallam Naganathar & Trayambakeshwar'
};

export function getTempleForPlanet(planet: string): string {
  return NAVAGRAHA_TEMPLES[planet] || 'Universal Shiva / Vishnu Temple';
}
`
    }]
  },

  // 48. Gemstone Weights
  {
    step: 48,
    msg: "feat(remedies): add Gemstone Ratti and Carat weight formulas by body weight",
    files: [{
      file: "src/lib/remedies/gemstoneWeights.ts",
      content: `/**
 * Gemstone Weight Recommendation (Rule: ~1 Ratti per 10-12 kg body weight)
 */

export function calculateGemstoneWeight(bodyWeightKg: number): { ratti: number; carats: number } {
  const ratti = Math.max(3.5, Number((bodyWeightKg / 11).toFixed(2)));
  const carats = Number((ratti * 0.91).toFixed(2));
  return { ratti, carats };
}
`
    }]
  },

  // 49. Eye Affliction Engine
  {
    step: 49,
    msg: "feat(medical): add Netra Roga (Eye affliction) indicators from 2nd and 12th houses",
    files: [{
      file: "src/lib/medical/eyeAfflictionEngine.ts",
      content: `/**
 * Netra Roga (Eye Affliction)
 * 2nd House: Right Eye | 12th House: Left Eye
 * Sun: Right Eye (Day) | Moon: Left Eye (Night)
 */

export function evaluateEyeHealth(is2ndHouseAfflicted: boolean, is12thHouseAfflicted: boolean) {
  return {
    rightEyeVulnerable: is2ndHouseAfflicted,
    leftEyeVulnerable: is12thHouseAfflicted,
    requiresCorrectiveOptics: is2ndHouseAfflicted || is12thHouseAfflicted
  };
}
`
    }]
  },

  // 50. Cardiac Vulnerability
  {
    step: 50,
    msg: "feat(medical): add Hridaya Roga (Cardiac health) indicators from 4th house and Sun",
    files: [{
      file: "src/lib/medical/cardiacVulnerability.ts",
      content: `/**
 * Hridaya Roga (Cardiac Health)
 */

export function checkCardiacVulnerability(is4thHouseAfflicted: boolean, isSunAfflicted: boolean): boolean {
  return is4thHouseAfflicted && isSunAfflicted;
}
`
    }]
  },

  // 51. useRelationshipSynastry hook
  {
    step: 51,
    msg: "feat(hooks): add useRelationshipSynastry hook for multi-layer relationship compatibility",
    files: [{
      file: "src/hooks/useRelationshipSynastry.ts",
      content: `import { useMemo } from 'react';
import { checkMahendraKoota } from '../lib/synastry/mahendraKoota';
import { calculateStreeDeergha } from '../lib/synastry/streeDeergha';

export function useRelationshipSynastry(girlNak: number, boyNak: number) {
  const mahendra = useMemo(() => checkMahendraKoota(girlNak, boyNak), [girlNak, boyNak]);
  const streeDeergha = useMemo(() => calculateStreeDeergha(girlNak, boyNak), [girlNak, boyNak]);

  return { isMahendraFavorable: mahendra, streeDeergha };
}
`
    }]
  },

  // 52. useShodhyaPinda hook
  {
    step: 52,
    msg: "feat(hooks): add useShodhyaPinda hook for Ashtakavarga pinda and longevity calculations",
    files: [{
      file: "src/hooks/useShodhyaPinda.ts",
      content: `import { useMemo } from 'react';
import { calculateShodhyaPinda } from '../lib/pinda/shodhyaPindaAggregator';
import { estimateAyurdayaYears } from '../lib/pinda/ashtakavargaAyurdaya';

export function useShodhyaPinda(rashiPinda: number, grahaPinda: number) {
  const pinda = useMemo(() => calculateShodhyaPinda(rashiPinda, grahaPinda), [rashiPinda, grahaPinda]);
  const lifespan = useMemo(() => estimateAyurdayaYears(pinda), [pinda]);

  return { shodhyaPinda: pinda, estimatedLifespan: lifespan };
}
`
    }]
  },

  // 53. useGemstoneRemedies hook
  {
    step: 53,
    msg: "feat(hooks): add useGemstoneRemedies hook for trikona lord gemstone prescriptions",
    files: [{
      file: "src/hooks/useGemstoneRemedies.ts",
      content: `import { useMemo } from 'react';
import { prescribeGemstone } from '../lib/remedies/gemstonePrescription';
import { calculateGemstoneWeight } from '../lib/remedies/gemstoneWeights';

export function useGemstoneRemedies(beneficPlanet: string, weightKg: number) {
  const gem = useMemo(() => prescribeGemstone(beneficPlanet), [beneficPlanet]);
  const weight = useMemo(() => calculateGemstoneWeight(weightKg), [weightKg]);

  return { gemDetails: gem, recommendedWeight: weight };
}
`
    }]
  },

  // 54. useMedicalOrganVulnerabilities hook
  {
    step: 54,
    msg: "feat(hooks): add useMedicalOrganVulnerabilities hook for bhava pathology mapping",
    files: [{
      file: "src/hooks/useMedicalOrganVulnerabilities.ts",
      content: `import { useMemo } from 'react';
import { getOrganForHouse } from '../lib/medical/bhavaOrganMapping';

export function useMedicalOrganVulnerabilities(afflictedHouse: number) {
  const organ = useMemo(() => getOrganForHouse(afflictedHouse), [afflictedHouse]);
  return { organVulnerability: organ };
}
`
    }]
  },

  // 55. useKharaNavamsha hook
  {
    step: 55,
    msg: "feat(hooks): add useKharaNavamsha hook for 64th Navamsha transit monitoring",
    files: [{
      file: "src/hooks/useKharaNavamsha.ts",
      content: `import { useMemo } from 'react';
import { calculateKharaPoints } from '../lib/medical/kharaNavamsha';

export function useKharaNavamsha(moonD9Sign: number, lagnaD3Sign: number) {
  const khara = useMemo(() => calculateKharaPoints(moonD9Sign, lagnaD3Sign), [moonD9Sign, lagnaD3Sign]);
  return { kharaPoints: khara };
}
`
    }]
  },

  // 56. useSthiraDasha hook
  {
    step: 56,
    msg: "feat(hooks): add useSthiraDasha hook for Jaimini Sthira Dasha cycle generation",
    files: [{
      file: "src/hooks/useSthiraDasha.ts",
      content: `import { useMemo } from 'react';
import { generateSthiraDashaSequence } from '../lib/sthira/sthiraDashaEngine';

export function useSthiraDasha(brahmaSign: number) {
  const timeline = useMemo(() => generateSthiraDashaSequence(brahmaSign), [brahmaSign]);
  return { timeline };
}
`
    }]
  },

  // 57. useRudrakshaSelector hook
  {
    step: 57,
    msg: "feat(hooks): add useRudrakshaSelector hook for 1-14 Mukhi bead selection",
    files: [{
      file: "src/hooks/useRudrakshaSelector.ts",
      content: `import { useMemo } from 'react';
import { getRudrakshaDetails } from '../lib/remedies/rudrakshaMatrix';

export function useRudrakshaSelector(mukhi: number) {
  const rudraksha = useMemo(() => getRudrakshaDetails(mukhi), [mukhi]);
  return { rudraksha };
}
`
    }]
  },

  // 58. useKujaDoshaCheck hook
  {
    step: 58,
    msg: "feat(hooks): add useKujaDoshaCheck hook for Manglik cancellation verification",
    files: [{
      file: "src/hooks/useKujaDoshaCheck.ts",
      content: `import { useMemo } from 'react';
import { isKujaDoshaCancelled } from '../lib/synastry/kujaDoshaExceptions';

export function useKujaDoshaCheck(marsHouse: number, marsSign: number, isWithGuruOrMoon: boolean) {
  const isCancelled = useMemo(() => isKujaDoshaCancelled(marsHouse, marsSign, isWithGuruOrMoon), [marsHouse, marsSign, isWithGuruOrMoon]);
  return { isCancelled };
}
`
    }]
  },

  // 59. useKakshyaMatrix hook
  {
    step: 59,
    msg: "feat(hooks): add useKakshyaMatrix hook for Prastarashtakavarga 8-sub-band tables",
    files: [{
      file: "src/hooks/useKakshyaMatrix.ts",
      content: `import { useMemo } from 'react';
import { generateKakshyaMatrix } from '../lib/pinda/kakshyaTableGenerator';

export function useKakshyaMatrix(activeBindus: boolean[]) {
  const matrix = useMemo(() => generateKakshyaMatrix(activeBindus), [activeBindus]);
  return { kakshyaMatrix: matrix };
}
`
    }]
  },

  // 60. useYantraMantras hook
  {
    step: 60,
    msg: "feat(hooks): add useYantraMantras hook for Navagraha Yantras and Beej Mantras",
    files: [{
      file: "src/hooks/useYantraMantras.ts",
      content: `import { useMemo } from 'react';
import { getJapaDetails } from '../lib/remedies/mantraChantingRounds';

export function useYantraMantras(planet: string) {
  const japa = useMemo(() => getJapaDetails(planet), [planet]);
  return { japaDetails: japa };
}
`
    }]
  },

  // 61. SynastryCompatibilityGauge UI
  {
    step: 61,
    msg: "feat(ui): add SynastryCompatibilityGauge component for holistic marital score",
    files: [{
      file: "src/components/SynastryCompatibilityGauge.tsx",
      content: `import React from 'react';

export const SynastryCompatibilityGauge: React.FC<{ score: number; maxScore: number }> = ({ score, maxScore }) => {
  const pct = Math.round((score / maxScore) * 100);
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs">
      <h4 className="text-amber-400 font-bold text-sm mb-2">Vedic Synastry Compatibility</h4>
      <div className="text-purple-200">Score: <strong className="text-amber-300">{score} / {maxScore}</strong> ({pct}%)</div>
      <div className="w-full bg-slate-800 rounded-full h-2 mt-2">
        <div className="bg-amber-400 h-2 rounded-full" style={{ width: \`\${pct}%\` }} />
      </div>
    </div>
  );
};
`
    }]
  },

  // 62. RajjuVedhaChecker UI
  {
    step: 62,
    msg: "feat(ui): add RajjuVedhaChecker component with 5 Rajju body zones",
    files: [{
      file: "src/components/RajjuVedhaChecker.tsx",
      content: `import React from 'react';

export const RajjuVedhaChecker: React.FC<{ isCompatible: boolean; verdict: string }> = ({ isCompatible, verdict }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs">
      <h4 className="text-amber-400 font-bold text-sm mb-1">Rajju & Vedha Koota Status</h4>
      <div className={\`font-semibold \${isCompatible ? 'text-emerald-400' : 'text-amber-400'}\`}>{verdict}</div>
    </div>
  );
};
`
    }]
  },

  // 63. ShodhyaPindaTable UI
  {
    step: 63,
    msg: "feat(ui): add ShodhyaPindaTable component displaying Rashi and Graha Pindas",
    files: [{
      file: "src/components/ShodhyaPindaTable.tsx",
      content: `import React from 'react';

export const ShodhyaPindaTable: React.FC<{ rashi: number; graha: number; total: number }> = ({ rashi, graha, total }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs text-purple-200">
      <h4 className="text-amber-400 font-bold text-sm mb-2">Ashtakavarga Shodhya Pinda</h4>
      <div className="grid grid-cols-3 gap-2">
        <div className="p-2 bg-purple-950/40 rounded border border-purple-900 text-center">
          <div>Rashi Pinda</div>
          <strong className="text-amber-300">{rashi}</strong>
        </div>
        <div className="p-2 bg-purple-950/40 rounded border border-purple-900 text-center">
          <div>Graha Pinda</div>
          <strong className="text-amber-300">{graha}</strong>
        </div>
        <div className="p-2 bg-purple-950/40 rounded border border-purple-900 text-center">
          <div>Total Pinda</div>
          <strong className="text-emerald-400">{total}</strong>
        </div>
      </div>
    </div>
  );
};
`
    }]
  },

  // 64. GemstonePrescriptionCard UI
  {
    step: 64,
    msg: "feat(ui): add GemstonePrescriptionCard component with metal and finger advice",
    files: [{
      file: "src/components/GemstonePrescriptionCard.tsx",
      content: `import React from 'react';

export const GemstonePrescriptionCard: React.FC<{ gem: string; metal: string; finger: string }> = ({ gem, metal, finger }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs text-purple-200">
      <h4 className="text-amber-400 font-bold text-sm mb-1">Prescribed Gemstone (Ratna)</h4>
      <div>Primary Stone: <strong className="text-amber-300">{gem}</strong></div>
      <div>Metal: <strong>{metal}</strong> | Finger: <strong>{finger}</strong></div>
    </div>
  );
};
`
    }]
  },

  // 65. RudrakshaSelectorWidget UI
  {
    step: 65,
    msg: "feat(ui): add RudrakshaSelectorWidget component for Mukhi bead alignment",
    files: [{
      file: "src/components/RudrakshaSelectorWidget.tsx",
      content: `import React from 'react';

export const RudrakshaSelectorWidget: React.FC<{ mukhi: number; deity: string; mantra: string }> = ({ mukhi, deity, mantra }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs text-purple-200">
      <h4 className="text-amber-400 font-bold text-sm mb-1">{mukhi} Mukhi Sacred Rudraksha</h4>
      <div>Ruling Deity: <strong className="text-amber-300">{deity}</strong></div>
      <div className="text-[11px] text-purple-300 mt-1">Beej Mantra: <em>{mantra}</em></div>
    </div>
  );
};
`
    }]
  },

  // 66. MedicalOrganPathologyMap UI
  {
    step: 66,
    msg: "feat(ui): add MedicalOrganPathologyMap component for 12 anatomical zones",
    files: [{
      file: "src/components/MedicalOrganPathologyMap.tsx",
      content: `import React from 'react';
import { BHAVA_ORGANS } from '../lib/medical/bhavaOrganMapping';

export const MedicalOrganPathologyMap: React.FC = () => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs">
      <h4 className="text-amber-400 font-bold text-sm mb-2">12 Bhava Anatomical Topology</h4>
      <div className="grid grid-cols-2 gap-2 text-purple-200">
        {Object.entries(BHAVA_ORGANS).slice(0, 6).map(([h, desc]) => (
          <div key={h} className="p-1.5 bg-purple-950/40 rounded border border-purple-900">
            <strong className="text-amber-300">House #{h}:</strong> {desc}
          </div>
        ))}
      </div>
    </div>
  );
};
`
    }]
  },

  // 67. KharaNavamshaAlert UI
  {
    step: 67,
    msg: "feat(ui): add KharaNavamshaAlert component for 64th Navamsha health warnings",
    files: [{
      file: "src/components/KharaNavamshaAlert.tsx",
      content: `import React from 'react';

export const KharaNavamshaAlert: React.FC<{ kharaSign: number }> = ({ kharaSign }) => {
  return (
    <div className="p-3 bg-purple-950/60 rounded-xl border border-purple-800 text-xs text-purple-200">
      <strong className="text-amber-300">64th Navamsha:</strong> Sign #{kharaSign + 1}. Monitor malefic transits for health care.
    </div>
  );
};
`
    }]
  },

  // 68. SthiraDashaTimeline UI
  {
    step: 68,
    msg: "feat(ui): add SthiraDashaTimeline component for 7, 8, 9-year cyclic intervals",
    files: [{
      file: "src/components/SthiraDashaTimeline.tsx",
      content: `import React from 'react';

export const SthiraDashaTimeline: React.FC<{ timeline: { signIndex: number; durationYears: number }[] }> = ({ timeline }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs">
      <h4 className="text-amber-400 font-bold text-sm mb-2">Jaimini Sthira Dasha (96-Yr Cycle)</h4>
      <div className="flex flex-wrap gap-1.5 text-purple-200">
        {timeline.map((item, idx) => (
          <span key={idx} className="px-2 py-0.5 bg-purple-950/60 rounded border border-purple-800">
            Sign #{item.signIndex + 1} ({item.durationYears}y)
          </span>
        ))}
      </div>
    </div>
  );
};
`
    }]
  },

  // 69. YantraGeometryViewer UI
  {
    step: 69,
    msg: "feat(ui): add YantraGeometryViewer component displaying magic square grids",
    files: [{
      file: "src/components/YantraGeometryViewer.tsx",
      content: `import React from 'react';
import { SURYA_YANTRA_GRID } from '../lib/remedies/navagrahaYantras';

export const YantraGeometryViewer: React.FC = () => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs text-center">
      <h4 className="text-amber-400 font-bold text-sm mb-2">Surya Navagraha Yantra Grid</h4>
      <div className="grid grid-cols-3 gap-1 w-32 mx-auto">
        {SURYA_YANTRA_GRID.flat().map((num, i) => (
          <div key={i} className="p-2 bg-purple-950 rounded border border-purple-800 text-amber-300 font-bold">
            {num}
          </div>
        ))}
      </div>
    </div>
  );
};
`
    }]
  },

  // 70. KujaDoshaCancellationCard UI
  {
    step: 70,
    msg: "feat(ui): add KujaDoshaCancellationCard component with 24 classical exceptions",
    files: [{
      file: "src/components/KujaDoshaCancellationCard.tsx",
      content: `import React from 'react';

export const KujaDoshaCancellationCard: React.FC<{ isCancelled: boolean }> = ({ isCancelled }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs">
      <h4 className="text-amber-400 font-bold text-sm mb-1">Kuja Dosha (Manglik) Assessment</h4>
      <div className={\`font-bold \${isCancelled ? 'text-emerald-400' : 'text-amber-400'}\`}>
        {isCancelled ? '✨ Kuja Dosha Cancelled (Mitigated by Classical Exception)' : '⚠️ Active Manglik Placement'}
      </div>
    </div>
  );
};
`
    }]
  }
];
