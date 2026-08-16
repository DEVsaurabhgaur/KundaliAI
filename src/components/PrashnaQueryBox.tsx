import React, { useState } from 'react';
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
