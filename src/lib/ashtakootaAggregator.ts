/**
 * Full 36-Guna Ashtakoota Matchmaking Aggregator
 */

import { calculateVarnaKoota } from './kootas/varnaKoota';
import { calculateVashyaKoota } from './kootas/vashyaKoota';
import { calculateTaraKoota } from './kootas/taraKoota';
import { calculateYoniKoota } from './kootas/yoniKoota';
import { calculateGrahaMaitriKoota } from './kootas/grahaMaitriKoota';
import { calculateGanaKoota } from './kootas/ganaKoota';
import { calculateBhakootKoota } from './kootas/bhakootKoota';
import { calculateNadiKoota } from './kootas/nadiKoota';

export interface AshtakootaScorecard {
  totalScore: number;
  maxScore: 36;
  matchPercentage: number;
  verdict: 'Excellent' | 'Good' | 'Average' | 'Not Recommended';
  breakdown: Record<string, { obtained: number; max: number }>;
}

export function computeAshtakootaMatch(
  boySign: number,
  girlSign: number,
  boyNak: number,
  girlNak: number
): AshtakootaScorecard {
  const varna = calculateVarnaKoota(boySign, girlSign);
  const vashya = calculateVashyaKoota(boySign, girlSign);
  const tara = calculateTaraKoota(boyNak, girlNak);
  const yoni = calculateYoniKoota(boyNak, girlNak);
  const maitri = calculateGrahaMaitriKoota(boySign, girlSign);
  const gana = calculateGanaKoota(boyNak, girlNak);
  const bhakoot = calculateBhakootKoota(boySign, girlSign);
  const nadi = calculateNadiKoota(boyNak, girlNak);

  const total = varna.obtainedPoints + vashya.obtainedPoints + tara.obtainedPoints +
                yoni.obtainedPoints + maitri.obtainedPoints + gana.obtainedPoints +
                bhakoot.obtainedPoints + nadi.obtainedPoints;

  const percentage = Math.round((total / 36) * 100);
  let verdict: AshtakootaScorecard['verdict'] = 'Not Recommended';
  if (total >= 28) verdict = 'Excellent';
  else if (total >= 21) verdict = 'Good';
  else if (total >= 18) verdict = 'Average';

  return {
    totalScore: Number(total.toFixed(1)),
    maxScore: 36,
    matchPercentage: percentage,
    verdict,
    breakdown: {
      Varna: { obtained: varna.obtainedPoints, max: 1 },
      Vashya: { obtained: vashya.obtainedPoints, max: 2 },
      Tara: { obtained: tara.obtainedPoints, max: 3 },
      Yoni: { obtained: yoni.obtainedPoints, max: 4 },
      GrahaMaitri: { obtained: maitri.obtainedPoints, max: 5 },
      Gana: { obtained: gana.obtainedPoints, max: 6 },
      Bhakoot: { obtained: bhakoot.obtainedPoints, max: 7 },
      Nadi: { obtained: nadi.obtainedPoints, max: 8 }
    }
  };
}
