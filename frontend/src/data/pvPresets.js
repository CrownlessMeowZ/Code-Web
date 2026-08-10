export const PV_PRESETS = [
  { id: 'wide', labelKey: 'pv_wide' },
  { id: 'close', labelKey: 'pv_close' },
  { id: 'dynamic', labelKey: 'pv_dynamic' },
];

export const PV_PRESET_IDS = PV_PRESETS.map((p) => p.id);

/** O(1) membership for preset validation */
export const PV_PRESET_ID_SET = new Set(PV_PRESET_IDS);
