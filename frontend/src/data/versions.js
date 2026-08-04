/**
 * Version timeline + gameplay video domain.
 * Versions keyed by year; gameplay keyed by stable id.
 */

export const VERSIONS_BY_YEAR = {
  '2009': {
    year: '2009',
    titleKey: 'ver_2009_title',
    bodyKey: 'ver_2009_body',
  },
  '2010': {
    year: '2010',
    titleKey: 'ver_2010_title',
    bodyKey: 'ver_2010_body',
  },
  '2012': {
    year: '2012',
    titleKey: 'ver_2012_title',
    bodyKey: 'ver_2012_body',
  },
  '2016': {
    year: '2016',
    titleKey: 'ver_2016_title',
    bodyKey: 'ver_2016_body',
  },
  '2020': {
    year: '2020',
    titleKey: 'ver_2020_title',
    bodyKey: 'ver_2020_body',
  },
};

export const VERSION_YEARS = ['2009', '2010', '2012', '2016', '2020'];

export const GAMEPLAY_VIDEOS_BY_ID = {
  'gp-1': {
    id: 'gp-1',
    titleKey: 'gp_1_title',
    descKey: 'gp_1_desc',
    video: '/media/The-World-is-Mine-Gameplay.mp4',
    captionKey: 'gp_1_caption',
  },
  'gp-2': {
    id: 'gp-2',
    titleKey: 'gp_2_title',
    descKey: 'gp_2_desc',
    video: '/media/Senbonzakura-Gameplay.mp4',
    captionKey: 'gp_2_caption',
  },
  'gp-3': {
    id: 'gp-3',
    titleKey: 'gp_3_title',
    descKey: 'gp_3_desc',
    video: '/media/The-Intense-Voice-of-Hatsune-Miku-Gameplay.mp4',
    captionKey: 'gp_3_caption',
  },
};

export const GAMEPLAY_VIDEO_IDS = ['gp-1', 'gp-2', 'gp-3'];

/**
 * @param {string} year
 * @returns {object | null}
 */
export function getVersionByYear(year) {
  return VERSIONS_BY_YEAR[year] ?? null;
}

/**
 * @param {string} id
 * @returns {object | null}
 */
export function getGameplayVideoById(id) {
  return GAMEPLAY_VIDEOS_BY_ID[id] ?? null;
}

export const VERSIONS = VERSION_YEARS.map((year) => VERSIONS_BY_YEAR[year]);
export const GAMEPLAY_VIDEOS = GAMEPLAY_VIDEO_IDS.map((id) => GAMEPLAY_VIDEOS_BY_ID[id]);

/** @returns {object[]} */
export function getAllVersions() {
  return VERSIONS;
}

/** @returns {object[]} */
export function getAllGameplayVideos() {
  return GAMEPLAY_VIDEOS;
}
