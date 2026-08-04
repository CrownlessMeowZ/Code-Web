/**
 * Iconic songs domain — Hash Map keyed by id for O(1) lookup.
 */

export const SONGS_BY_ID = {
  'world-is-mine': {
    id: 'world-is-mine',
    title: '1. World is Mine',
    artistKey: 'song_1_artist',
    descKey: 'song_1_desc',
    video: '/media/World-is-Mine.mp4',
  },
  'tell-your-world': {
    id: 'tell-your-world',
    title: '2. Tell Your World',
    artistKey: 'song_2_artist',
    descKey: 'song_2_desc',
    video: '/media/Tell-Your-World.mp4',
  },
  senbonzakura: {
    id: 'senbonzakura',
    title: '3. Senbonzakura (千本桜)',
    artistKey: 'song_3_artist',
    descKey: 'song_3_desc',
    video: '/media/Senbonzakura.mp4',
  },
  disappearance: {
    id: 'disappearance',
    title: '4. The Disappearance of Hatsune Miku',
    artistKey: 'song_4_artist',
    descKey: 'song_4_desc',
    video: '/media/The-disappearance-of-Hatsune-Miku.mp4',
  },
  melt: {
    id: 'melt',
    title: '5. Melt (メルト)',
    artistKey: 'song_5_artist',
    descKey: 'song_5_desc',
    video: '/media/melt.mp4',
  },
};

export const SONG_IDS = [
  'world-is-mine',
  'tell-your-world',
  'senbonzakura',
  'disappearance',
  'melt',
];

/**
 * @param {string} id
 * @returns {object | null}
 */
export function getSongById(id) {
  return SONGS_BY_ID[id] ?? null;
}

export const SONGS = SONG_IDS.map((id) => SONGS_BY_ID[id]);

/** @returns {object[]} */
export function getAllSongs() {
  return SONGS;
}
