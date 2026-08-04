/**
 * Skin / module spotlight domain.
 * Groups keyed by charId; individual skins keyed by skin id.
 * charName / accent resolved O(1) from characters map (no denormalized duplicates).
 */

import { getCharacterById } from './characters';

/** @type {Record<string, { skins: object[] }>} */
export const SKIN_SPOTLIGHTS_BY_CHAR_ID = {
  miku: {
    skins: [
      {
        id: 'miku-infinity',
        name: '∞',
        img: '/skins/miku-infinity.webp',
        producer: 'SEGA / Crypton Future Media',
        song: 'The Intense Voice of Hatsune Miku',
        descKey: 'skin_miku_infinity_desc',
      },
      {
        id: 'miku-sakura1',
        name: 'Ichi-no-Sakura Blossom',
        img: '/skins/miku-sakura-blossom.webp',
        producer: 'SEGA / Crypton Future Media',
        song: 'Senbonzakura',
        descKey: 'skin_miku_sakura1_desc',
      },
      {
        id: 'miku-sakura2',
        name: 'Sakura Miku',
        img: '/skins/miku-sakura.webp',
        producer: 'SEGA / Crypton Future Media',
        song: '—',
        descKey: 'skin_miku_sakura2_desc',
      },
    ],
  },
  rin: {
    skins: [
      {
        id: 'rin-cheerful-candy',
        name: 'Cheerful Candy',
        img: '/skins/rin-cheerful-candy.webp',
        producer: 'SEGA / Crypton Future Media',
        song: 'Colorful × Melody',
        descKey: 'skin_rin_cheerful_candy_desc',
      },
      {
        id: 'rin-cheerful',
        name: 'Cheerful Rin',
        img: '/skins/rin-cheerful.webp',
        producer: 'SEGA / Crypton Future Media',
        song: 'SING&SMILE',
        descKey: 'skin_rin_cheerful_desc',
      },
      {
        id: 'rin-sakura2',
        name: 'Ni-no-Sakura Butterfly',
        img: '/skins/rin-sakura-butterfly.webp',
        producer: 'SEGA / Crypton Future Media',
        song: 'Senbonzakura',
        descKey: 'skin_rin_sakura2_desc',
      },
    ],
  },
  len: {
    skins: [
      {
        id: 'len-punkish',
        name: 'Punkish',
        img: '/skins/len-punkish.webp',
        producer: 'SEGA / Crypton Future Media',
        song: 'Butterfly on Your Right Shoulder',
        descKey: 'skin_len_punkish_desc',
      },
      {
        id: 'len-bluemoon',
        name: 'Blue Moon',
        img: '/skins/len-blue-moon.webp',
        producer: 'SEGA / Crypton Future Media',
        song: 'To the End of Infinity',
        descKey: 'skin_len_bluemoon_desc',
      },
      {
        id: 'len-eraser',
        name: 'Eraser',
        img: '/skins/len-eraser.webp',
        producer: 'SEGA / Crypton Future Media',
        song: 'Erase or Zero',
        descKey: 'skin_len_eraser_desc',
      },
    ],
  },
  luka: {
    skins: [
      {
        id: 'luka-blossom',
        name: 'Blossom',
        img: '/skins/luka-blossom.webp',
        producer: 'SEGA / Crypton Future Media',
        song: 'Magnet',
        descKey: 'skin_luka_blossom_desc',
      },
      {
        id: 'luka-chiffon-dress',
        name: 'Chiffon Dress',
        img: '/skins/luka-chiffon-dress.webp',
        producer: 'SEGA / Crypton Future Media',
        song: 'Just Be Friends',
        descKey: 'skin_luka_chiffon_dress_desc',
      },
      {
        id: 'luka-cybernation',
        name: 'Cybernation',
        img: '/skins/luka-cybernation.webp',
        producer: 'SEGA / Crypton Future Media',
        song: 'Luka Luka★Night Fever',
        descKey: 'skin_luka_cybernation_desc',
      },
    ],
  },
  kaito: {
    skins: [
      {
        id: 'kaito-diamond-dust',
        name: 'Diamond Dust',
        img: '/skins/kaito-diamond-dust.webp',
        producer: 'SEGA / Crypton Future Media',
        song: 'Snowman',
        descKey: 'skin_kaito_diamond_dust_desc',
      },
      {
        id: 'kaito-originator',
        name: 'Originator',
        img: '/skins/kaito-originator.webp',
        producer: 'SEGA / Crypton Future Media',
        song: 'Erase or Zero',
        descKey: 'skin_kaito_originator_desc',
      },
      {
        id: 'kaito-requiem',
        name: 'Requiem',
        img: '/skins/kaito-requiem.webp',
        producer: 'SEGA / Crypton Future Media',
        song: 'Cantarella',
        descKey: 'skin_kaito_requiem_desc',
      },
    ],
  },
  meiko: {
    skins: [
      {
        id: 'meiko-blue-crystal',
        name: 'Blue Crystal',
        img: '/skins/meiko-blue-crystal.webp',
        producer: 'SEGA / Crypton Future Media',
        song: 'Nostalogic',
        descKey: 'skin_meiko_blue_crystal_desc',
      },
      {
        id: 'meiko-sakura-camellia',
        name: 'Sakura Camellia',
        img: '/skins/meiko-sakura-camellia.webp',
        producer: 'Kurousa-P',
        song: 'Senbonzakura',
        descKey: 'skin_meiko_sakura_camellia_desc',
      },
      {
        id: 'meiko-scarlet',
        name: 'Scarlet',
        img: '/skins/meiko-scarlet.webp',
        producer: 'SEGA / Crypton Future Media',
        song: 'Change Me',
        descKey: 'skin_meiko_scarlet_desc',
      },
    ],
  },
  teto: {
    skins: [
      {
        id: 'teto-default',
        name: 'Default',
        img: '/skins/kasane-teto.webp',
        producer: 'TWINDRILL / SEGA',
        song: '—',
        descKey: 'skin_teto_default_desc',
      },
      {
        id: 'teto-msj',
        name: 'M.S.J',
        img: '/skins/teto-msj.webp',
        producer: 'TWINDRILL / SEGA',
        song: '—',
        descKey: 'skin_teto_msj_desc',
      },
      {
        id: 'teto-swimwear',
        name: 'Swimwear',
        img: '/skins/teto-swimwear.webp',
        producer: 'TWINDRILL / SEGA',
        song: '—',
        descKey: 'skin_teto_swimwear_desc',
      },
    ],
  },
  neru: {
    skins: [
      {
        id: 'neru-aborigine',
        name: 'Aborigine',
        img: '/skins/neru-aborigine.webp',
        producer: 'SEGA / Crypton Future Media',
        song: '—',
        descKey: 'skin_neru_aborigine_desc',
      },
      {
        id: 'neru-school-club',
        name: 'School Club',
        img: '/skins/neru-school-club.webp',
        producer: 'SEGA / Crypton Future Media',
        song: '—',
        descKey: 'skin_neru_school_club_desc',
      },
      {
        id: 'neru-swimwear',
        name: 'Swimwear',
        img: '/skins/neru-swimwear.webp',
        producer: 'SEGA / Crypton Future Media',
        song: '—',
        descKey: 'skin_neru_swimwear_desc',
      },
    ],
  },
  haku: {
    skins: [
      {
        id: 'haku-cyber-dive',
        name: 'Cyber Dive',
        img: '/skins/haku-cyber-dive.webp',
        producer: 'SEGA / Crypton Future Media',
        song: '—',
        descKey: 'skin_haku_cyber_dive_desc',
      },
      {
        id: 'haku-gothic-purple',
        name: 'Gothic Purple',
        img: '/skins/haku-gothic-purple.webp',
        producer: 'SEGA / Crypton Future Media',
        song: '—',
        descKey: 'skin_haku_gothic_purple_desc',
      },
      {
        id: 'haku-swimwear',
        name: 'Swimwear',
        img: '/skins/haku-swimwear.webp',
        producer: 'SEGA / Crypton Future Media',
        song: '—',
        descKey: 'skin_haku_swimwear_desc',
      },
    ],
  },
};

/** Display order for spotlight sections (matches legacy SKIN_SPOTLIGHTS array) */
export const SKIN_SPOTLIGHT_CHAR_IDS = [
  'miku', 'rin', 'len', 'luka', 'kaito', 'meiko', 'teto', 'neru', 'haku',
];

/** Flat map: skinId → skin entity (with charId) — O(1) */
export const SKINS_BY_ID = (() => {
  /** @type {Record<string, object>} */
  const map = {};
  for (const charId of SKIN_SPOTLIGHT_CHAR_IDS) {
    const group = SKIN_SPOTLIGHTS_BY_CHAR_ID[charId];
    if (!group) continue;
    for (const skin of group.skins) {
      map[skin.id] = { ...skin, charId };
    }
  }
  return map;
})();

/**
 * @param {string} skinId
 * @returns {object | null}
 */
export function getSkinById(skinId) {
  return SKINS_BY_ID[skinId] ?? null;
}

/**
 * @param {string} charId
 * @returns {object | null} group with charId, charName, accent, skins
 */
export function getSkinGroupByCharId(charId) {
  const raw = SKIN_SPOTLIGHTS_BY_CHAR_ID[charId];
  if (!raw) return null;
  const char = getCharacterById(charId);
  return {
    charId,
    charName: char?.name ?? charId,
    accent: char?.accent ?? '#00d4ff',
    skins: raw.skins,
  };
}

/** Cached ordered array — same reference for consumers that expect a constant */
export const SKIN_SPOTLIGHTS = SKIN_SPOTLIGHT_CHAR_IDS
  .map((charId) => getSkinGroupByCharId(charId))
  .filter(Boolean);

/**
 * Ordered list of spotlight groups for UI (legacy SKIN_SPOTLIGHTS shape).
 * @returns {Array<{ charId: string, charName: string, accent: string, skins: object[] }>}
 */
export function getAllSkinSpotlights() {
  return SKIN_SPOTLIGHTS;
}
