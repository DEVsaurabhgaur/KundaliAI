/** useChartHistory â€” persist and retrieve recent kundali chart generations */
import { useState, useCallback } from 'react';
import { getStoredJSON, setStoredJSON, STORAGE_KEYS } from '../lib/storageKeys';
import { MAX_HISTORY_ITEMS } from '../lib/constants';

export interface ChartHistoryItem {
  id: string;
  name: string;
  date: string;
  place: string;
  generatedAt: string;
  ascendant: string;
}

export function useChartHistory() {
  const [history, setHistory] = useState<ChartHistoryItem[]>(() => {
    return getStoredJSON<ChartHistoryItem[]>(STORAGE_KEYS.CHART_HISTORY) ?? [];
  });

  const addToHistory = useCallback((item: Omit<ChartHistoryItem, 'id'>) => {
    setHistory(prev => {
      const newItem: ChartHistoryItem = {
        ...item,
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      };
      const updated = [newItem, ...prev].slice(0, MAX_HISTORY_ITEMS);
      setStoredJSON(STORAGE_KEYS.CHART_HISTORY, updated);
      return updated;
    });
  }, []);

  const clearHistory = useCallback(() => {
    setHistory([]);
    setStoredJSON(STORAGE_KEYS.CHART_HISTORY, []);
  }, []);

  const removeFromHistory = useCallback((id: string) => {
    setHistory(prev => {
      const updated = prev.filter(item => item.id !== id);
      setStoredJSON(STORAGE_KEYS.CHART_HISTORY, updated);
      return updated;
    });
  }, []);

  return { history, addToHistory, clearHistory, removeFromHistory };
}
