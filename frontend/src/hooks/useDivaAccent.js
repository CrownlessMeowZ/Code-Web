import { useCallback, useEffect } from 'react';
import { readStorage, writeStorage } from '../utils/storage';

const STORAGE_KEY = 'diva-accent';

function applyAccent(color) {
  if (color) {
    document.documentElement.style.setProperty('--page-accent', color);
  } else {
    document.documentElement.style.removeProperty('--page-accent');
  }
}

export function useDivaAccent() {
  useEffect(() => {
    const saved = readStorage(STORAGE_KEY);
    if (saved) applyAccent(saved);
  }, []);

  const setAccent = useCallback((color) => {
    if (!color) return;
    writeStorage(STORAGE_KEY, color);
    applyAccent(color);
  }, []);

  return { setAccent };
}
