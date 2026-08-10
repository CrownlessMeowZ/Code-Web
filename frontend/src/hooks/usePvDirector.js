import { useCallback, useState } from 'react';
import { PV_PRESET_ID_SET } from '../data';

export function usePvDirector() {
  const [preset, setPreset] = useState('wide');

  const setPresetSafe = useCallback((next) => {
    if (PV_PRESET_ID_SET.has(next)) setPreset(next);
  }, []);

  return {
    preset,
    setPreset: setPresetSafe,
    frameClass: `pv-frame pv-frame--${preset}`,
  };
}