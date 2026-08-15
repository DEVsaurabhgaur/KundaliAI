import React, { useState } from 'react';

export const CosmicThemeToggle: React.FC = () => {
  const [isVedicGold, setIsVedicGold] = useState(false);

  const toggle = () => {
    setIsVedicGold(prev => !prev);
    document.documentElement.classList.toggle('theme-vedic-gold');
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="px-3 py-1.5 text-xs font-semibold rounded-full bg-purple-900/60 text-amber-300 border border-amber-500/40 hover:bg-purple-800/80 transition-all flex items-center gap-1.5"
    >
      <span>✨</span>
      <span>{isVedicGold ? 'Vedic Gold' : 'Cosmic Nebula'}</span>
    </button>
  );
};
