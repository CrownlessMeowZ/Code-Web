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
        producerKey: 'producer_sega_crypton',
        songKey: 'song_intense_voice',
        descKey: 'skin_miku_infinity_desc',
      },
      {
        id: 'miku-sakura1',
        name: 'Ichi-no-Sakura Blossom',
        img: '/skins/miku-sakura-blossom.webp',
        producerKey: 'producer_sega_crypton',
        songKey: 'song_senbonzakura',
        descKey: 'skin_miku_sakura1_desc',
      },
      {
        id: 'miku-sakura2',
        name: 'Sakura Miku',
        img: '/skins/miku-sakura.webp',
        producerKey: 'producer_sega_crypton',
        songKey: 'song_none',
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
        producerKey: 'producer_sega_crypton',
        songKey: 'song_colorful_melody',
        descKey: 'skin_rin_cheerful_candy_desc',
      },
      {
        id: 'rin-cheerful',
        name: 'Cheerful Rin',
        img: '/skins/rin-cheerful.webp',
        producerKey: 'producer_sega_crypton',
        songKey: 'song_sing_and_smile',
        descKey: 'skin_rin_cheerful_desc',
      },
      {
        id: 'rin-sakura2',
        name: 'Ni-no-Sakura Butterfly',
        img: '/skins/rin-sakura-butterfly.webp',
        producerKey: 'producer_sega_crypton',
        songKey: 'song_senbonzakura',
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
        producerKey: 'producer_sega_crypton',
        songKey: 'song_butterfly_right_shoulder',
        descKey: 'skin_len_punkish_desc',
      },
      {
        id: 'len-bluemoon',
        name: 'Blue Moon',
        img: '/skins/len-blue-moon.webp',
        producerKey: 'producer_sega_crypton',
        songKey: 'song_to_end_of_infinity',
        descKey: 'skin_len_bluemoon_desc',
      },
      {
        id: 'len-eraser',
        name: 'Eraser',
        img: '/skins/len-eraser.webp',
        producerKey: 'producer_sega_crypton',
        songKey: 'song_erase_or_zero',
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
        producerKey: 'producer_sega_crypton',
        songKey: 'song_magnet',
        descKey: 'skin_luka_blossom_desc',
      },
      {
        id: 'luka-chiffon-dress',
        name: 'Chiffon Dress',
        img: '/skins/luka-chiffon-dress.webp',
        producerKey: 'producer_sega_crypton',
        songKey: 'song_just_be_friends',
        descKey: 'skin_luka_chiffon_dress_desc',
      },
      {
        id: 'luka-cybernation',
        name: 'Cybernation',
        img: '/skins/luka-cybernation.webp',
        producerKey: 'producer_sega_crypton',
        songKey: 'song_luka_night_fever',
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
        producerKey: 'producer_sega_crypton',
        songKey: 'song_snowman',
        descKey: 'skin_kaito_diamond_dust_desc',
      },
      {
        id: 'kaito-originator',
        name: 'Originator',
        img: '/skins/kaito-originator.webp',
        producerKey: 'producer_sega_crypton',
        songKey: 'song_erase_or_zero',
        descKey: 'skin_kaito_originator_desc',
      },
      {
        id: 'kaito-requiem',
        name: 'Requiem',
        img: '/skins/kaito-requiem.webp',
        producerKey: 'producer_sega_crypton',
        songKey: 'song_cantarella',
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
        producerKey: 'producer_sega_crypton',
        songKey: 'song_nostalogic',
        descKey: 'skin_meiko_blue_crystal_desc',
      },
      {
        id: 'meiko-sakura-camellia',
        name: 'Sakura Camellia',
        img: '/skins/meiko-sakura-camellia.webp',
        producerKey: 'producer_kurousa',
        songKey: 'song_senbonzakura',
        descKey: 'skin_meiko_sakura_camellia_desc',
      },
      {
        id: 'meiko-scarlet',
        name: 'Scarlet',
        img: '/skins/meiko-scarlet.webp',
        producerKey: 'producer_sega_crypton',
        songKey: 'song_change_me',
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
        producerKey: 'producer_twindrill_sega',
        songKey: 'song_none',
        descKey: 'skin_teto_default_desc',
      },
      {
        id: 'teto-msj',
        name: 'M.S.J',
        img: '/skins/teto-msj.webp',
        producerKey: 'producer_twindrill_sega',
        songKey: 'song_none',
        descKey: 'skin_teto_msj_desc',
      },
      {
        id: 'teto-swimwear',
        name: 'Swimwear',
        img: '/skins/teto-swimwear.webp',
        producerKey: 'producer_twindrill_sega',
        songKey: 'song_none',
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
        producerKey: 'producer_sega_crypton',
        songKey: 'song_none',
        descKey: 'skin_neru_aborigine_desc',
      },
      {
        id: 'neru-school-club',
        name: 'School Club',
        img: '/skins/neru-school-club.webp',
        producerKey: 'producer_sega_crypton',
        songKey: 'song_none',
        descKey: 'skin_neru_school_club_desc',
      },
      {
        id: 'neru-swimwear',
        name: 'Swimwear',
        img: '/skins/neru-swimwear.webp',
        producerKey: 'producer_sega_crypton',
        songKey: 'song_none',
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
        producerKey: 'producer_sega_crypton',
        songKey: 'song_none',
        descKey: 'skin_haku_cyber_dive_desc',
      },
      {
        id: 'haku-gothic-purple',
        name: 'Gothic Purple',
        img: '/skins/haku-gothic-purple.webp',
        producerKey: 'producer_sega_crypton',
        songKey: 'song_none',
        descKey: 'skin_haku_gothic_purple_desc',
      },
      {
        id: 'haku-swimwear',
        name: 'Swimwear',
        img: '/skins/haku-swimwear.webp',
        producerKey: 'producer_sega_crypton',
        songKey: 'song_none',
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
