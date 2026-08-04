/**
 * Character domain — Hash Maps keyed by id for O(1) lookup.
 * Display order is fixed via ID arrays (not Object.keys order reliance).
 */

export const CHARACTERS_BY_ID = {
  miku: {
    id: 'miku',
    name: 'Hatsune Miku',
    code: 'CV01',
    voice: 'Soprano',
    voiceByKey: 'miku_voiceBy',
    releasedKey: 'miku_released',
    heightKey: 'miku_height',
    signatureKey: 'miku_signature',
    accent: '#00d4ff',
    songs: ['World is Mine', 'Melt', 'Tell Your World'],
    img: '/characters/miku-card.png',
    homeImg: '/characters/miku-home.jpg',
    alt: 'Hatsune Miku – teal twin-tails, default CV01 outfit',
    wikiUrl: 'https://vocaloid.fandom.com/wiki/Hatsune_Miku',
    descKey: 'miku_desc',
  },
  rin: {
    id: 'rin',
    name: 'Kagamine Rin',
    code: 'CV02',
    voice: 'Soprano',
    voiceByKey: 'rin_voiceBy',
    releasedKey: 'rin_released',
    heightKey: 'rin_height',
    signatureKey: 'rin_signature',
    accent: '#ffe566',
    songs: ['Meltdown', 'Kokoro', 'Remote Control'],
    img: '/characters/rin-card.png',
    homeImg: '/characters/rin-home.jpg',
    alt: 'Kagamine Rin – short blonde hair, yellow sailor uniform',
    wikiUrl: 'https://vocaloid.fandom.com/wiki/Kagamine_Rin_%26_Len',
    descKey: 'rin_desc',
  },
  len: {
    id: 'len',
    name: 'Kagamine Len',
    code: 'CV02',
    voice: 'Tenor',
    voiceByKey: 'len_voiceBy',
    releasedKey: 'len_released',
    heightKey: 'len_height',
    signatureKey: 'len_signature',
    accent: '#ffd060',
    songs: ['Servant of Evil', 'Adolescence', 'Spice!'],
    img: '/characters/len-card.png',
    homeImg: '/characters/len-home.jpg',
    alt: 'Kagamine Len – blonde ponytail, matching yellow uniform',
    wikiUrl: 'https://vocaloid.fandom.com/wiki/Kagamine_Rin_%26_Len',
    descKey: 'len_desc',
  },
  luka: {
    id: 'luka',
    name: 'Megurine Luka',
    code: 'CV03',
    voice: 'Mezzo-soprano',
    voiceByKey: 'luka_voiceBy',
    releasedKey: 'luka_released',
    heightKey: 'luka_height',
    signatureKey: 'luka_signature',
    accent: '#ff66cc',
    songs: ['Just Be Friends', 'Double Lariat', 'Luka Luka★Night Fever'],
    img: '/characters/luka-card.png',
    homeImg: '/characters/luka-home.jpg',
    alt: 'Megurine Luka – long pink hair, elegant stage costume',
    wikiUrl: 'https://vocaloid.fandom.com/wiki/Megurine_Luka',
    descKey: 'luka_desc',
  },
  kaito: {
    id: 'kaito',
    name: 'KAITO',
    code: 'Vocaloid 1',
    voice: 'Baritone',
    voiceByKey: 'kaito_voiceBy',
    releasedKey: 'kaito_released',
    heightKey: 'kaito_height',
    signatureKey: 'kaito_signature',
    accent: '#55aaff',
    songs: ['Cantarella', 'Snowman', 'Thousand Year Solo'],
    img: '/characters/kaito-card.png',
    homeImg: '/characters/kaito-home.jpg',
    alt: 'KAITO – blue scarf, warm expression, navy costume',
    wikiUrl: 'https://vocaloid.fandom.com/wiki/KAITO',
    descKey: 'kaito_desc',
  },
  meiko: {
    id: 'meiko',
    name: 'MEIKO',
    code: 'Vocaloid 1',
    voice: 'Alto',
    voiceByKey: 'meiko_voiceBy',
    releasedKey: 'meiko_released',
    heightKey: 'meiko_height',
    signatureKey: 'meiko_signature',
    accent: '#ff5555',
    songs: ['Nostalogic', 'Kowase Kowase', 'Change Me'],
    img: '/characters/meiko-card.png',
    homeImg: '/characters/meiko-home.jpg',
    alt: 'MEIKO – red jacket, short brown hair, confident pose',
    wikiUrl: 'https://vocaloid.fandom.com/wiki/MEIKO',
    descKey: 'meiko_desc',
  },
};

export const EXTRA_CHARACTERS_BY_ID = {
  teto: {
    id: 'teto',
    name: 'Kasane Teto',
    code: 'UTAU',
    voice: 'Soprano',
    voiceByKey: 'teto_voiceBy',
    releasedKey: 'teto_released',
    heightKey: 'teto_height',
    signatureKey: 'teto_signature',
    accent: '#ff6b9d',
    songs: ['Teto Territory', 'Machine Love', 'BIRDBRAIN'],
    img: '/characters/teto-card.png',
    alt: 'Kasane Teto – pink drill twin-tails, red military outfit',
    wikiUrl: 'https://utau.wiki/kasane_teto',
    descKey: 'teto_desc',
  },
  neru: {
    id: 'neru',
    name: 'Akita Neru',
    code: 'Derivative',
    voice: 'Soprano',
    voiceByKey: 'neru_voiceBy',
    releasedKey: 'neru_released',
    heightKey: 'neru_height',
    signatureKey: 'neru_signature',
    accent: '#f5c518',
    songs: ['FLOP ERA', 'Triple Baka', 'Stop Nagging Me!'],
    img: '/characters/neru-card.png',
    alt: 'Akita Neru – blonde side ponytail, yellow and black outfit',
    wikiUrl: 'https://vocaloid.fandom.com/wiki/Akita_Neru',
    descKey: 'neru_desc',
  },
  haku: {
    id: 'haku',
    name: 'Yowane Haku',
    code: 'Derivative',
    voice: 'Mezzo-soprano',
    voiceByKey: 'haku_voiceBy',
    releasedKey: 'haku_released',
    heightKey: 'haku_height',
    signatureKey: 'haku_signature',
    accent: '#aaaacc',
    songs: ['Unhappy Refrain', 'The Melancholy of Detective Yowane Haku', 'I Wanna Be Your Vampire'],
    img: '/characters/haku-card.png',
    alt: 'Yowane Haku – long silver hair, white and grey outfit',
    wikiUrl: 'https://vocaloid.fandom.com/wiki/Yowane_Haku',
    descKey: 'haku_desc',
  },
};

/** Crypton 6 + extras — single O(1) map for any character id */
export const ALL_CHARACTERS_BY_ID = {
  ...CHARACTERS_BY_ID,
  ...EXTRA_CHARACTERS_BY_ID,
};

/** Stable UI order (Crypton 6) */
export const CHARACTER_IDS = ['miku', 'rin', 'len', 'luka', 'kaito', 'meiko'];

/** Stable UI order (extra / guest) */
export const EXTRA_CHARACTER_IDS = ['teto', 'neru', 'haku'];

/**
 * @param {string} id
 * @returns {object | null}
 */
export function getCharacterById(id) {
  return ALL_CHARACTERS_BY_ID[id] ?? null;
}

/** Cached ordered arrays for list rendering (stable reference) */
export const CHARACTERS = CHARACTER_IDS.map((id) => CHARACTERS_BY_ID[id]);
export const EXTRA_CHARACTERS = EXTRA_CHARACTER_IDS.map((id) => EXTRA_CHARACTERS_BY_ID[id]);

/** @returns {object[]} Crypton 6 in display order */
export function getAllCharacters() {
  return CHARACTERS;
}

/** @returns {object[]} Extra characters in display order */
export function getExtraCharacters() {
  return EXTRA_CHARACTERS;
}
