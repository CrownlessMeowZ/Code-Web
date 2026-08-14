/**
 * Mainline Project DIVA titles for the Game History page.
 * Hash-indexed by id / platform / series for O(1) filter lookups.
 */

export const GAMES_BY_ID = {
  1: {
    id: 1,
    title: 'Hatsune Miku: Project DIVA',
    platform: 'PSP',
    platformKeys: ['psp'],
    series: 'Classic',
    seriesKey: 'classic',
    year: 2009,
    coverImage: '/history/diva-psp.jpg',
    coverHref: 'https://project-diva.fandom.com/wiki/Hatsune_Miku:_Project_DIVA_(video_game)',
  },
  2: {
    id: 2,
    title: 'Hatsune Miku: Project DIVA 2nd',
    platform: 'PSP',
    platformKeys: ['psp'],
    series: 'Classic',
    seriesKey: 'classic',
    year: 2010,
    coverImage: '/history/diva-2nd.jpg',
    coverHref: 'https://project-diva.fandom.com/wiki/Hatsune_Miku:_Project_DIVA_2nd',
  },
  3: {
    id: 3,
    title: 'Project DIVA Arcade',
    platform: 'Arcade',
    platformKeys: ['arcade'],
    series: 'Classic',
    seriesKey: 'classic',
    year: 2011,
    coverImage: '/history/diva-arcade.jpg',
    coverHref: 'https://project-diva.fandom.com/wiki/Hatsune_Miku:_Project_DIVA_Arcade',
  },
  4: {
    id: 4,
    title: 'Project DIVA Extend',
    platform: 'PSP',
    platformKeys: ['psp'],
    series: 'Classic',
    seriesKey: 'classic',
    year: 2011,
    coverImage: '/history/diva-extend.jpg',
    coverHref: 'https://project-diva.fandom.com/wiki/Hatsune_Miku:_Project_DIVA_Extend',
  },
  5: {
    id: 5,
    title: 'Hatsune Miku: Project DIVA f',
    platform: 'PS Vita',
    platformKeys: ['ps-vita'],
    series: 'F',
    seriesKey: 'f',
    year: 2012,
    coverImage: '/history/diva-f-vita.jpg',
    coverHref: 'https://project-diva.fandom.com/wiki/Hatsune_Miku:_Project_DIVA_f',
  },
  6: {
    id: 6,
    title: 'Hatsune Miku: Project DIVA F',
    platform: 'PS3',
    platformKeys: ['ps3'],
    series: 'F',
    seriesKey: 'f',
    year: 2013,
    coverImage: '/history/diva-f-ps3.jpg',
    coverHref: 'https://project-diva.fandom.com/wiki/Hatsune_Miku:_Project_DIVA_F',
  },
  7: {
    id: 7,
    title: 'Hatsune Miku: Project DIVA f 2nd',
    platform: 'PS Vita · PS3',
    platformKeys: ['ps-vita', 'ps3'],
    series: 'F',
    seriesKey: 'f',
    year: 2014,
    coverImage: '/history/diva-f2nd.jpg',
    coverHref: 'https://project-diva.fandom.com/wiki/Hatsune_Miku:_Project_DIVA_f_2nd',
  },
  8: {
    id: 8,
    title: 'Hatsune Miku: Project DIVA X',
    platform: 'PS Vita · PS4',
    platformKeys: ['ps-vita', 'ps4'],
    series: 'X',
    seriesKey: 'x',
    year: 2016,
    coverImage: '/history/diva-x.jpg',
    coverHref: 'https://project-diva.fandom.com/wiki/Hatsune_Miku:_Project_DIVA_X',
  },
  9: {
    id: 9,
    title: 'Hatsune Miku: Project DIVA Future Tone',
    platform: 'PS4',
    platformKeys: ['ps4'],
    series: 'Future Tone',
    seriesKey: 'future-tone',
    year: 2017,
    coverImage: '/history/future-tone.jpg',
    coverHref: 'https://miku.sega.com/futuretone/',
  },
  10: {
    id: 10,
    title: 'Hatsune Miku: Project DIVA MegaMix',
    platform: 'Switch',
    platformKeys: ['switch'],
    series: 'Mega Mix',
    seriesKey: 'mega-mix',
    year: 2020,
    coverImage: '/history/megamix.jpg',
    coverHref: 'https://project-diva.fandom.com/wiki/Hatsune_Miku:_Project_DIVA_Mega_Mix',
  },
  11: {
    id: 11,
    title: 'Hatsune Miku: Project DIVA MegaMix+',
    platform: 'PC',
    platformKeys: ['pc'],
    series: 'Mega Mix',
    seriesKey: 'mega-mix',
    year: 2022,
    coverImage: '/history/megamix-plus.jpg',
    coverHref: 'https://miku.sega.com/megamixplus/',
  },
};

/** Stable chronological order */
export const GAME_IDS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

/**
 * @param {number|string} id
 * @returns {object | null}
 */
export function getGameById(id) {
  return GAMES_BY_ID[id] ?? GAMES_BY_ID[Number(id)] ?? null;
}

export const GAMES = GAME_IDS.map((id) => GAMES_BY_ID[id]);

/** @returns {object[]} */
export function getAllGames() {
  return GAMES;
}

/** Pre-built O(1) secondary indexes: platform key → game[] */
export const GAMES_BY_PLATFORM = (() => {
  /** @type {Record<string, object[]>} */
  const map = {};
  for (const id of GAME_IDS) {
    const g = GAMES_BY_ID[id];
    for (const pk of g.platformKeys ?? []) {
      if (!map[pk]) map[pk] = [];
      map[pk].push(g);
    }
  }
  return map;
})();

/** Pre-built O(1) secondary indexes: series key → game[] */
export const GAMES_BY_SERIES = (() => {
  /** @type {Record<string, object[]>} */
  const map = {};
  for (const id of GAME_IDS) {
    const g = GAMES_BY_ID[id];
    const sk = g.seriesKey;
    if (!map[sk]) map[sk] = [];
    map[sk].push(g);
  }
  return map;
})();

/** Single-select filter tab definitions (platform + series). */
export const FILTER_TABS = [
  { id: 'all', group: 'all' },
  { id: 'platform:psp', group: 'platform', key: 'psp' },
  { id: 'platform:arcade', group: 'platform', key: 'arcade' },
  { id: 'platform:ps-vita', group: 'platform', key: 'ps-vita' },
  { id: 'platform:ps3', group: 'platform', key: 'ps3' },
  { id: 'platform:ps4', group: 'platform', key: 'ps4' },
  { id: 'platform:switch', group: 'platform', key: 'switch' },
  { id: 'platform:pc', group: 'platform', key: 'pc' },
  { id: 'series:classic', group: 'series', key: 'classic' },
  { id: 'series:f', group: 'series', key: 'f' },
  { id: 'series:x', group: 'series', key: 'x' },
  { id: 'series:future-tone', group: 'series', key: 'future-tone' },
  { id: 'series:mega-mix', group: 'series', key: 'mega-mix' },
];

export const VALID_FILTER_IDS = FILTER_TABS.map((tab) => tab.id);

/** O(1) membership for stored filter validation */
export const VALID_FILTER_ID_SET = new Set(VALID_FILTER_IDS);

/** Pre-partitioned tab lists (avoid filtering FILTER_TABS each render) */
export const PLATFORM_FILTER_TABS = FILTER_TABS.filter(
  (tab) => tab.group === 'all' || tab.group === 'platform',
);
export const SERIES_FILTER_TABS = FILTER_TABS.filter((tab) => tab.group === 'series');

/**
 * Filter catalog via pre-indexed Hash Maps only (O(1) bucket lookup).
 * Unknown group → full catalog. Unknown key → empty list.
 *
 * @param {string} activeFilter
 * @returns {object[]}
 */
export function filterGames(activeFilter) {
  if (!activeFilter || activeFilter === 'all') return GAMES;

  const [group, key] = activeFilter.split(':');
  if (group === 'platform') return GAMES_BY_PLATFORM[key] ?? [];
  if (group === 'series') return GAMES_BY_SERIES[key] ?? [];
  return GAMES;
}
