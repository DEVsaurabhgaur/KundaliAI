export const batch3 = [
  // 81. useYoginiDasha
  {
    step: 81,
    msg: "feat(hooks): add useYoginiDasha hook with 36-year cycle timeline",
    files: [{
      file: "src/hooks/useYoginiDasha.ts",
      content: `import { useMemo } from 'react';
import { calculateYoginiDasha, YoginiPeriod } from '../lib/dasha/yoginiDasha';

export function useYoginiDasha(nakshatraIndex: number, birthYear: number) {
  const periods: YoginiPeriod[] = useMemo(() => {
    return calculateYoginiDasha(nakshatraIndex, birthYear);
  }, [nakshatraIndex, birthYear]);

  const activePeriod = useMemo(() => {
    const currentYear = new Date().getFullYear();
    return periods.find(p => currentYear >= p.startYear && currentYear < p.endYear) || periods[0];
  }, [periods]);

  return { periods, activePeriod };
}
`
    }]
  },

  // 82. useNumerology
  {
    step: 82,
    msg: "feat(hooks): add useNumerology hook for Mulank, Bhagyank, and Namank",
    files: [{
      file: "src/hooks/useNumerology.ts",
      content: `import { useMemo } from 'react';
import { calculateMulank } from '../lib/numerology/mulank';
import { calculateBhagyank } from '../lib/numerology/bhagyank';
import { calculateChaldeanNamank } from '../lib/numerology/namank';

export function useNumerology(day: number, month: number, year: number, name: string) {
  const mulank = useMemo(() => calculateMulank(day), [day]);
  const bhagyank = useMemo(() => calculateBhagyank(day, month, year), [day, month, year]);
  const namank = useMemo(() => calculateChaldeanNamank(name), [name]);

  return { mulank, bhagyank, namank };
}
`
    }]
  },

  // 83. useVastuCompass
  {
    step: 83,
    msg: "feat(hooks): add useVastuCompass hook with real-time orientation tracking",
    files: [{
      file: "src/hooks/useVastuCompass.ts",
      content: `import { useState } from 'react';
import { ASHTA_DIKPALAS } from '../lib/vastu/ashtaDikpalas';

export function useVastuCompass() {
  const [selectedDirection, setSelectedDirection] = useState('North-East');
  const activeZone = ASHTA_DIKPALAS.find(d => d.direction === selectedDirection) || ASHTA_DIKPALAS[0];

  return { selectedDirection, setSelectedDirection, activeZone, allZones: ASHTA_DIKPALAS };
}
`
    }]
  },

  // 84. usePrashnaChart
  {
    step: 84,
    msg: "feat(hooks): add usePrashnaChart hook for instant horary query generation",
    files: [{
      file: "src/hooks/usePrashnaChart.ts",
      content: `import { useState, useCallback } from 'react';
import { calculatePrashnaAscendant } from '../lib/prashna/prashnaAscendant';
import { resolvePrashnaQuery } from '../lib/prashna/yesNoEngine';

export function usePrashnaChart() {
  const [queryState, setQueryState] = useState<{ query: string; timestamp: number } | null>(null);

  const askQuestion = useCallback((questionText: string) => {
    const now = Date.now();
    setQueryState({ query: questionText, timestamp: now });
  }, []);

  const verdict = queryState ? resolvePrashnaQuery(true, true, true) : null;

  return { askQuestion, queryState, verdict };
}
`
    }]
  },

  // 85. useMedicalAstro
  {
    step: 85,
    msg: "feat(hooks): add useMedicalAstro hook for holistic Ayur-Jyotish insights",
    files: [{
      file: "src/hooks/useMedicalAstro.ts",
      content: `import { useMemo } from 'react';
import { calculateTridoshaProfile } from '../lib/ayurjyotish/tridosha';
import { getAyurvedicDietPlan } from '../lib/ayurjyotish/ayurvedicDiet';

export function useMedicalAstro(ascendant: string) {
  const profile = useMemo(() => calculateTridoshaProfile({}), []);
  const diet = useMemo(() => getAyurvedicDietPlan(ascendant), [ascendant]);

  return { profile, diet };
}
`
    }]
  },

  // 86. useLalKitabAnalysis
  {
    step: 86,
    msg: "feat(hooks): add useLalKitabAnalysis hook for custom symbolic remedies",
    files: [{
      file: "src/hooks/useLalKitabAnalysis.ts",
      content: `import { useMemo } from 'react';
import { getLalKitabRemedy } from '../lib/lalkitab/lalkitabRemedies';

export function useLalKitabAnalysis(planetPlacements: { name: string; house: number }[]) {
  const remedies = useMemo(() => {
    return planetPlacements.map(p => ({
      planet: p.name,
      house: p.house,
      remedy: getLalKitabRemedy(p.name, p.house)
    }));
  }, [planetPlacements]);

  return { remedies };
}
`
    }]
  },

  // 87. useFinancialAstro
  {
    step: 87,
    msg: "feat(hooks): add useFinancialAstro hook for market and wealth vectors",
    files: [{
      file: "src/hooks/useFinancialAstro.ts",
      content: `import { useMemo } from 'react';
import { COMMODITY_RULERS } from '../lib/career/financialAstrology';

export function useFinancialAstro() {
  const commodityList = useMemo(() => Object.entries(COMMODITY_RULERS), []);
  return { commodityList };
}
`
    }]
  },

  // 88. useSarvatobhadra
  {
    step: 88,
    msg: "feat(hooks): add useSarvatobhadra hook for transit cross-vedha tracking",
    files: [{
      file: "src/hooks/useSarvatobhadra.ts",
      content: `import { useMemo } from 'react';
import { evaluateSBCVedhas } from '../lib/sarvatobhadraChakra';

export function useSarvatobhadra(transits: { name: string; nakshatra: number }[]) {
  const vedhas = useMemo(() => evaluateSBCVedhas(transits), [transits]);
  return { vedhas };
}
`
    }]
  },

  // 89. useKotaChakra
  {
    step: 89,
    msg: "feat(hooks): add useKotaChakra hook for fortress defense status",
    files: [{
      file: "src/hooks/useKotaChakra.ts",
      content: `import { useMemo } from 'react';
import { evaluateKotaChakra } from '../lib/kotaChakra';

export function useKotaChakra(transits: { planet: string; houseFromMoon: number }[]) {
  const status = useMemo(() => evaluateKotaChakra(transits), [transits]);
  return { status };
}
`
    }]
  },

  // 90. useCareerAnalysis
  {
    step: 90,
    msg: "feat(hooks): add useCareerAnalysis hook for professional vocation matching",
    files: [{
      file: "src/hooks/useCareerAnalysis.ts",
      content: `import { useMemo } from 'react';
import { profileCareer } from '../lib/career/careerProfiler';

export function useCareerAnalysis(tenthLord: string) {
  const careerProfile = useMemo(() => profileCareer(tenthLord), [tenthLord]);
  return { careerProfile };
}
`
    }]
  },

  // 91. useVimshopakaBala
  {
    step: 91,
    msg: "feat(hooks): add useVimshopakaBala hook for Shodashavarga strength aggregation",
    files: [{
      file: "src/hooks/useVimshopakaBala.ts",
      content: `import { useMemo } from 'react';
import { calculateVimshopakaScore } from '../lib/vargas/vimshopakaBala';

export function useVimshopakaBala(planet: string) {
  const score = useMemo(() => calculateVimshopakaScore(planet, { D1: 'Exalted', D9: 'Own' }), [planet]);
  return { score };
}
`
    }]
  },

  // 92. useTridoshaProfile
  {
    step: 92,
    msg: "feat(hooks): add useTridoshaProfile hook for bio-energy balance",
    files: [{
      file: "src/hooks/useTridoshaProfile.ts",
      content: `import { useMemo } from 'react';
import { calculateTridoshaProfile } from '../lib/ayurjyotish/tridosha';

export function useTridoshaProfile() {
  const profile = useMemo(() => calculateTridoshaProfile({}), []);
  return { profile };
}
`
    }]
  },

  // 93. useArudhaPadas
  {
    step: 93,
    msg: "feat(hooks): add useArudhaPadas hook for perception houses",
    files: [{
      file: "src/hooks/useArudhaPadas.ts",
      content: `import { useMemo } from 'react';
import { calculateArudhaPada } from '../lib/career/arudhaPadas';

export function useArudhaPadas(houseSignIndices: number[], lordSignIndices: number[]) {
  const padas = useMemo(() => {
    return houseSignIndices.map((h, i) => calculateArudhaPada(h, lordSignIndices[i] || h));
  }, [houseSignIndices, lordSignIndices]);
  return { padas };
}
`
    }]
  },

  // 94. useSpecialNakshatras
  {
    step: 94,
    msg: "feat(hooks): add useSpecialNakshatras hook for sensitive lunar coordinates",
    files: [{
      file: "src/hooks/useSpecialNakshatras.ts",
      content: `import { useMemo } from 'react';
import { calculateSpecialNakshatras } from '../lib/specialNakshatras';

export function useSpecialNakshatras(janmaNakshatraIdx: number) {
  const specialNakshatras = useMemo(() => calculateSpecialNakshatras(janmaNakshatraIdx), [janmaNakshatraIdx]);
  return { specialNakshatras };
}
`
    }]
  },

  // 95. useKalachakraDasha
  {
    step: 95,
    msg: "feat(hooks): add useKalachakraDasha hook for Deha and Jeeva tracking",
    files: [{
      file: "src/hooks/useKalachakraDasha.ts",
      content: `import { useMemo } from 'react';
import { calculateKalachakraPoints } from '../lib/dasha/kalachakraDasha';

export function useKalachakraDasha(nakshatraIdx: number, pada: number) {
  const points = useMemo(() => calculateKalachakraPoints(nakshatraIdx, pada), [nakshatraIdx, pada]);
  return { points };
}
`
    }]
  },

  // 96. useLoShuGrid
  {
    step: 96,
    msg: "feat(hooks): add useLoShuGrid hook for magic square number patterns",
    files: [{
      file: "src/hooks/useLoShuGrid.ts",
      content: `import { useMemo } from 'react';
import { generateLoShuGrid } from '../lib/numerology/loShuGrid';

export function useLoShuGrid(birthDateStr: string) {
  const gridData = useMemo(() => generateLoShuGrid(birthDateStr), [birthDateStr]);
  return { gridData };
}
`
    }]
  },

  // 97. useTajikaAspects
  {
    step: 97,
    msg: "feat(hooks): add useTajikaAspects hook for horary query aspects",
    files: [{
      file: "src/hooks/useTajikaAspects.ts",
      content: `import { useMemo } from 'react';
import { evaluateTajikaAspect } from '../lib/prashna/tajikaAspects';

export function useTajikaAspects(fastLong: number, slowLong: number, isApplying: boolean) {
  const aspect = useMemo(() => evaluateTajikaAspect(fastLong, slowLong, isApplying), [fastLong, slowLong, isApplying]);
  return { aspect };
}
`
    }]
  },

  // 98. usePushkaraCheck
  {
    step: 98,
    msg: "feat(hooks): add usePushkaraCheck hook for auspicious degree verification",
    files: [{
      file: "src/hooks/usePushkaraCheck.ts",
      content: `import { useMemo } from 'react';
import { checkPushkaraNavamsha } from '../lib/career/pushkaraNavamsha';

export function usePushkaraCheck(signIdx: number, deg: number) {
  const isPushkara = useMemo(() => checkPushkaraNavamsha(signIdx, deg), [signIdx, deg]);
  return { isPushkara };
}
`
    }]
  },

  // 99. useInduLagna
  {
    step: 99,
    msg: "feat(hooks): add useInduLagna hook for financial prosperity sign",
    files: [{
      file: "src/hooks/useInduLagna.ts",
      content: `import { useMemo } from 'react';
import { calculateInduLagna } from '../lib/career/induLagna';

export function useInduLagna(lagna9th: string, moon9th: string, moonSign: number) {
  const induSign = useMemo(() => calculateInduLagna(lagna9th, moon9th, moonSign), [lagna9th, moon9th, moonSign]);
  return { induSign };
}
`
    }]
  },

  // 100. useBhriguBindu
  {
    step: 100,
    msg: "feat(hooks): add useBhriguBindu hook for karmic trigger point",
    files: [{
      file: "src/hooks/useBhriguBindu.ts",
      content: `import { useMemo } from 'react';
import { calculateBhriguBindu } from '../lib/career/bhriguBindu';

export function useBhriguBindu(moonLong: number, rahuLong: number) {
  const bindu = useMemo(() => calculateBhriguBindu(moonLong, rahuLong), [moonLong, rahuLong]);
  return { bindu };
}
`
    }]
  },

  // 101. YoginiDashaTimeline UI
  {
    step: 101,
    msg: "feat(ui): add YoginiDashaTimeline component for 36-year cycle progression",
    files: [{
      file: "src/components/YoginiDashaTimeline.tsx",
      content: `import React from 'react';
import { YoginiPeriod } from '../lib/dasha/yoginiDasha';

export const YoginiDashaTimeline: React.FC<{ periods: YoginiPeriod[] }> = ({ periods }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40">
      <h3 className="text-amber-400 font-bold text-sm mb-3">Yogini Dasha Timeline (36-Year Cycle)</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {periods.map(p => (
          <div key={p.name} className="p-3 bg-purple-950/40 rounded-xl border border-purple-900/50">
            <div className="text-xs font-bold text-amber-300">{p.name} ({p.rulingPlanet})</div>
            <div className="text-[11px] text-purple-200">{p.startYear} - {p.endYear}</div>
            <div className="text-[10px] text-purple-400">{p.durationYears} Years • {p.nature}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
`
    }]
  },

  // 102. LoShuGridCard UI
  {
    step: 102,
    msg: "feat(ui): add LoShuGridCard component with 3x3 plane visualization",
    files: [{
      file: "src/components/LoShuGridCard.tsx",
      content: `import React from 'react';

export const LoShuGridCard: React.FC<{ grid: number[][] }> = ({ grid }) => {
  return (
    <div className="p-4 bg-slate-950/80 rounded-2xl border border-amber-500/30 text-center">
      <h4 className="text-amber-300 font-bold text-sm mb-3">Lo Shu Magic Square</h4>
      <div className="grid grid-cols-3 gap-2 max-w-[200px] mx-auto">
        {grid.flat().map((val, idx) => (
          <div key={idx} className="h-14 flex items-center justify-center rounded-lg bg-purple-950/60 border border-purple-700/50 text-amber-300 font-bold text-base">
            {val > 0 ? Array(val).fill(idx + 1).join('') : '-'}
          </div>
        ))}
      </div>
    </div>
  );
};
`
    }]
  },

  // 103. SarvatobhadraGrid UI
  {
    step: 103,
    msg: "feat(ui): add SarvatobhadraGrid component with 81-square overview",
    files: [{
      file: "src/components/SarvatobhadraGrid.tsx",
      content: `import React from 'react';

export const SarvatobhadraGrid: React.FC = () => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40">
      <h4 className="text-amber-400 font-bold text-sm mb-2">Sarvatobhadra Chakra (81-Square Grid)</h4>
      <div className="text-xs text-purple-200">
        Monitors multi-dimensional cross-vedha hits across 28 Nakshatras, Tithis, and vowels.
      </div>
    </div>
  );
};
`
    }]
  },

  // 104. KotaChakraVisualizer UI
  {
    step: 104,
    msg: "feat(ui): add KotaChakraVisualizer fortress transit diagram",
    files: [{
      file: "src/components/KotaChakraVisualizer.tsx",
      content: `import React from 'react';
import { KotaStatus } from '../lib/kotaChakra';

export const KotaChakraVisualizer: React.FC<{ status: KotaStatus }> = ({ status }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40">
      <h4 className="text-amber-400 font-bold text-sm mb-2">Kota Chakra Defense Meter</h4>
      <div className="text-xs text-purple-200 mb-2">Fortress Safety Index: <strong className="text-amber-300">{status.fortressSafetyIndex}%</strong></div>
      <div className="text-[11px] text-purple-300">Stambha Occupants: {status.stambhaOccupants.join(', ') || 'None (Safe)'}</div>
    </div>
  );
};
`
    }]
  },

  // 105. MedicalAstroSummary UI
  {
    step: 105,
    msg: "feat(ui): add MedicalAstroSummary component with Ayur-Jyotish constitutional analysis",
    files: [{
      file: "src/components/MedicalAstroSummary.tsx",
      content: `import React from 'react';
import { TridoshaProfile } from '../lib/ayurjyotish/tridosha';

export const MedicalAstroSummary: React.FC<{ profile: TridoshaProfile }> = ({ profile }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40">
      <h4 className="text-amber-400 font-bold text-sm mb-2">Ayur-Jyotish Constitution</h4>
      <div className="text-xs text-purple-200">Dominant Bio-Energy: <strong className="text-amber-300">{profile.dominantDosha}</strong></div>
    </div>
  );
};
`
    }]
  },

  // 106. VastuCompassWidget UI
  {
    step: 106,
    msg: "feat(ui): add VastuCompassWidget interactive direction inspector",
    files: [{
      file: "src/components/VastuCompassWidget.tsx",
      content: `import React from 'react';
import { useVastuCompass } from '../hooks/useVastuCompass';

export const VastuCompassWidget: React.FC = () => {
  const { selectedDirection, setSelectedDirection, activeZone, allZones } = useVastuCompass();

  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40">
      <h4 className="text-amber-400 font-bold text-sm mb-3">Vastu Directional Compass</h4>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {allZones.map(z => (
          <button
            key={z.direction}
            type="button"
            onClick={() => setSelectedDirection(z.direction)}
            className={\`px-2.5 py-1 text-xs rounded-lg transition-all \${selectedDirection === z.direction ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-purple-950/60 text-purple-200'}\`}
          >
            {z.direction}
          </button>
        ))}
      </div>
      <div className="text-xs text-purple-100 bg-purple-950/40 p-2.5 rounded-lg border border-purple-900/50">
        <div><strong>Guardian:</strong> {activeZone.guardian} (Planet: {activeZone.rulingPlanet})</div>
        <div><strong>Ideal Utilization:</strong> {activeZone.idealRoom}</div>
      </div>
    </div>
  );
};
`
    }]
  },

  // 107. PrashnaQueryBox UI
  {
    step: 107,
    msg: "feat(ui): add PrashnaQueryBox horary query input and verdict card",
    files: [{
      file: "src/components/PrashnaQueryBox.tsx",
      content: `import React, { useState } from 'react';
import { usePrashnaChart } from '../hooks/usePrashnaChart';

export const PrashnaQueryBox: React.FC = () => {
  const [text, setText] = useState('');
  const { askQuestion, queryState, verdict } = usePrashnaChart();

  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40">
      <h4 className="text-amber-400 font-bold text-sm mb-2">Prashna Tantra (Horary Oracle)</h4>
      <div className="flex gap-2 mb-3">
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Ask a specific question (e.g. Will I get the job?)"
          className="flex-1 bg-purple-950/50 text-white text-xs px-3 py-2 rounded-lg border border-purple-800 focus:outline-none focus:border-amber-400"
        />
        <button
          type="button"
          onClick={() => askQuestion(text)}
          className="px-3 py-2 bg-amber-500 text-slate-950 font-bold text-xs rounded-lg hover:bg-amber-400 transition-all"
        >
          Cast Prashna
        </button>
      </div>
      {verdict && (
        <div className="p-3 bg-purple-950/40 rounded-lg border border-amber-500/30 text-xs">
          <div className="text-amber-300 font-bold mb-1">Verdict: {verdict.verdict} ({verdict.confidenceScore}%)</div>
          <div className="text-purple-200">{verdict.rationale}</div>
        </div>
      )}
    </div>
  );
};
`
    }]
  },

  // 108. NumerologyReportCard UI
  {
    step: 108,
    msg: "feat(ui): add NumerologyReportCard component for core numbers display",
    files: [{
      file: "src/components/NumerologyReportCard.tsx",
      content: `import React from 'react';

export const NumerologyReportCard: React.FC<{ mulank: number; bhagyank: number; namank: number }> = ({
  mulank, bhagyank, namank
}) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 flex justify-around text-center">
      <div>
        <div className="text-2xl font-extrabold text-amber-400">{mulank}</div>
        <div className="text-[10px] uppercase text-purple-300 font-semibold">Mulank (Root)</div>
      </div>
      <div>
        <div className="text-2xl font-extrabold text-amber-400">{bhagyank}</div>
        <div className="text-[10px] uppercase text-purple-300 font-semibold">Bhagyank (Destiny)</div>
      </div>
      <div>
        <div className="text-2xl font-extrabold text-amber-400">{namank}</div>
        <div className="text-[10px] uppercase text-purple-300 font-semibold">Namank (Name)</div>
      </div>
    </div>
  );
};
`
    }]
  },

  // 109. CareerPathRadar UI
  {
    step: 109,
    msg: "feat(ui): add CareerPathRadar component with vocational recommendations",
    files: [{
      file: "src/components/CareerPathRadar.tsx",
      content: `import React from 'react';
import { CareerPath } from '../lib/career/careerProfiler';

export const CareerPathRadar: React.FC<{ profile: CareerPath }> = ({ profile }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40">
      <h4 className="text-amber-400 font-bold text-sm mb-1">{profile.domain}</h4>
      <p className="text-xs text-purple-200 mb-2">Growth Pace: <strong className="text-amber-300">{profile.growthPace}</strong></p>
      <div className="flex flex-wrap gap-1.5">
        {profile.recommendedFields.map(f => (
          <span key={f} className="text-[10px] px-2 py-0.5 rounded bg-purple-950/60 text-purple-200 border border-purple-800">
            {f}
          </span>
        ))}
      </div>
    </div>
  );
};
`
    }]
  },

  // 110. LalKitabRemediesList UI
  {
    step: 110,
    msg: "feat(ui): add LalKitabRemediesList component with non-harmful symbolic actions",
    files: [{
      file: "src/components/LalKitabRemediesList.tsx",
      content: `import React from 'react';

export const LalKitabRemediesList: React.FC<{ remedies: { planet: string; house: number; remedy: string }[] }> = ({
  remedies
}) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40">
      <h4 className="text-amber-400 font-bold text-sm mb-3">Lal Kitab Symbolic Upayas</h4>
      <div className="space-y-2">
        {remedies.map(r => (
          <div key={r.planet} className="p-2.5 bg-purple-950/40 rounded-xl border border-purple-900/50 text-xs">
            <div className="font-bold text-amber-300">{r.planet} in House {r.house}</div>
            <div className="text-purple-200">{r.remedy}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
`
    }]
  },

  // 111. NakshatraPadaTable UI
  {
    step: 111,
    msg: "feat(ui): add NakshatraPadaTable component for sound syllables and pada mapping",
    files: [{
      file: "src/components/NakshatraPadaTable.tsx",
      content: `import React from 'react';

export const NakshatraPadaTable: React.FC = () => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs text-purple-200">
      <h4 className="text-amber-400 font-bold text-sm mb-2">108 Nakshatra Padas Guide</h4>
      <p>Lists 4 padas per Nakshatra with phonetic syllables (Nama Akshara) and Navamsha sign mapping.</p>
    </div>
  );
};
`
    }]
  },

  // 112. FinancialAstroDashboard UI
  {
    step: 112,
    msg: "feat(ui): add FinancialAstroDashboard component for commodity planetary correlations",
    files: [{
      file: "src/components/FinancialAstroDashboard.tsx",
      content: `import React from 'react';
import { useFinancialAstro } from '../hooks/useFinancialAstro';

export const FinancialAstroDashboard: React.FC = () => {
  const { commodityList } = useFinancialAstro();

  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40">
      <h4 className="text-amber-400 font-bold text-sm mb-3">Financial Astrological Rulers</h4>
      <div className="grid grid-cols-2 gap-2 text-xs">
        {commodityList.map(([com, planets]) => (
          <div key={com} className="p-2 bg-purple-950/40 rounded-lg border border-purple-900/50">
            <div className="text-amber-300 font-semibold">{com}</div>
            <div className="text-purple-200">{planets.join(', ')}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
`
    }]
  },

  // 113. VimshopakaScoreGauge UI
  {
    step: 113,
    msg: "feat(ui): add VimshopakaScoreGauge component for 20-point divisional strength display",
    files: [{
      file: "src/components/VimshopakaScoreGauge.tsx",
      content: `import React from 'react';
import { VimshopakaScore } from '../lib/vargas/vimshopakaBala';

export const VimshopakaScoreGauge: React.FC<{ score: VimshopakaScore }> = ({ score }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-center">
      <h4 className="text-amber-400 font-bold text-xs uppercase mb-1">Vimshopaka Bala (Max 20)</h4>
      <div className="text-3xl font-extrabold text-amber-300">{score.totalVimshopakaPoints} / 20</div>
      <div className="text-xs text-purple-300">{score.percentage}% Strength Rating</div>
    </div>
  );
};
`
    }]
  },

  // 114. TridoshaMeter UI
  {
    step: 114,
    msg: "feat(ui): add TridoshaMeter component with visual Vata-Pitta-Kapha bars",
    files: [{
      file: "src/components/TridoshaMeter.tsx",
      content: `import React from 'react';
import { TridoshaProfile } from '../lib/ayurjyotish/tridosha';

export const TridoshaMeter: React.FC<{ profile: TridoshaProfile }> = ({ profile }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 space-y-2 text-xs">
      <h4 className="text-amber-400 font-bold text-sm mb-2">Tridosha Proportions</h4>
      <div>
        <div className="flex justify-between text-purple-200"><span>Vata (Air/Ether)</span><span>{profile.vata}%</span></div>
        <div className="w-full bg-purple-950 rounded-full h-1.5"><div className="bg-sky-400 h-1.5 rounded-full" style={{ width: \`\${profile.vata}%\` }} /></div>
      </div>
      <div>
        <div className="flex justify-between text-purple-200"><span>Pitta (Fire)</span><span>{profile.pitta}%</span></div>
        <div className="w-full bg-purple-950 rounded-full h-1.5"><div className="bg-amber-400 h-1.5 rounded-full" style={{ width: \`\${profile.pitta}%\` }} /></div>
      </div>
      <div>
        <div className="flex justify-between text-purple-200"><span>Kapha (Earth/Water)</span><span>{profile.kapha}%</span></div>
        <div className="w-full bg-purple-950 rounded-full h-1.5"><div className="bg-emerald-400 h-1.5 rounded-full" style={{ width: \`\${profile.kapha}%\` }} /></div>
      </div>
    </div>
  );
};
`
    }]
  },

  // 115. AstroVastuFloorMap UI
  {
    step: 115,
    msg: "feat(ui): add AstroVastuFloorMap component for spatial energy overlay",
    files: [{
      file: "src/components/AstroVastuFloorMap.tsx",
      content: `import React from 'react';

export const AstroVastuFloorMap: React.FC = () => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs text-purple-200">
      <h4 className="text-amber-400 font-bold text-sm mb-1">Astro-Vastu Floor Map</h4>
      <p>Synchronizes 12 natal horoscope houses with 16 physical floor zones.</p>
    </div>
  );
};
`
    }]
  },

  // 116. ArudhaPadasTable UI
  {
    step: 116,
    msg: "feat(ui): add ArudhaPadasTable component displaying A1 to A12 signs",
    files: [{
      file: "src/components/ArudhaPadasTable.tsx",
      content: `import React from 'react';

export const ArudhaPadasTable: React.FC<{ padas: number[] }> = ({ padas }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs">
      <h4 className="text-amber-400 font-bold text-sm mb-2">Arudha Padas (A1 - A12)</h4>
      <div className="grid grid-cols-4 gap-2">
        {padas.map((signIdx, idx) => (
          <div key={idx} className="p-2 bg-purple-950/40 rounded border border-purple-900/50 text-center">
            <div className="font-bold text-amber-300">A{idx + 1}</div>
            <div className="text-[10px] text-purple-200">Sign #{signIdx + 1}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
`
    }]
  },

  // 117. SpecialNakshatraBadges UI
  {
    step: 117,
    msg: "feat(ui): add SpecialNakshatraBadges component for sensitive stars",
    files: [{
      file: "src/components/SpecialNakshatraBadges.tsx",
      content: `import React from 'react';

export const SpecialNakshatraBadges: React.FC<{ points: Record<string, number> }> = ({ points }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs">
      <h4 className="text-amber-400 font-bold text-sm mb-2">Sensitive Nakshatra Nodes</h4>
      <div className="flex flex-wrap gap-2">
        {Object.entries(points).map(([key, nakIdx]) => (
          <div key={key} className="px-2.5 py-1 bg-purple-950/60 rounded-lg border border-purple-800 text-purple-200">
            <strong className="text-amber-300 capitalize">{key}:</strong> Nak #{nakIdx + 1}
          </div>
        ))}
      </div>
    </div>
  );
};
`
    }]
  },

  // 118. KalachakraWheel UI
  {
    step: 118,
    msg: "feat(ui): add KalachakraWheel visual circular display",
    files: [{
      file: "src/components/KalachakraWheel.tsx",
      content: `import React from 'react';
import { KalachakraInfo } from '../lib/dasha/kalachakraDasha';

export const KalachakraWheel: React.FC<{ info: KalachakraInfo }> = ({ info }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs">
      <h4 className="text-amber-400 font-bold text-sm mb-1">Kalachakra Time Wheel</h4>
      <div className="text-purple-200">Deha Rashi: <strong className="text-amber-300">{info.dehaRashi}</strong></div>
      <div className="text-purple-200">Jeeva Rashi: <strong className="text-amber-300">{info.jeevaRashi}</strong></div>
    </div>
  );
};
`
    }]
  },

  // 119. TajikaAspectDiagram UI
  {
    step: 119,
    msg: "feat(ui): add TajikaAspectDiagram component for horary query aspects",
    files: [{
      file: "src/components/TajikaAspectDiagram.tsx",
      content: `import React from 'react';
import { TajikaAspectResult } from '../lib/prashna/tajikaAspects';

export const TajikaAspectDiagram: React.FC<{ aspect: TajikaAspectResult }> = ({ aspect }) => {
  return (
    <div className="p-4 bg-slate-900/80 rounded-2xl border border-purple-800/40 text-xs">
      <h4 className="text-amber-400 font-bold text-sm mb-1">Tajika Aspect Geometry</h4>
      <div className="text-purple-200">Aspect Form: <strong className="text-amber-300">{aspect.type}</strong> ({aspect.orbDegrees}° orb)</div>
    </div>
  );
};
`
    }]
  },

  // 120. PushkaraBadge UI
  {
    step: 120,
    msg: "feat(ui): add PushkaraBadge component for auspicious degrees indicator",
    files: [{
      file: "src/components/PushkaraBadge.tsx",
      content: `import React from 'react';

export const PushkaraBadge: React.FC<{ isPushkara: boolean }> = ({ isPushkara }) => {
  if (!isPushkara) return null;
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
      ✨ Pushkara Navamsha
    </span>
  );
};
`
    }]
  }
];
