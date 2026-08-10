/**
 * Vocaloid producer domain — Hash Map keyed by id.
 */

export const PRODUCERS_BY_ID = {
  ryo: {
    id: 'ryo',
    avatar: '/producers/ryo.webp',
    youtube: 'https://www.youtube.com/@supercell',
    name: 'ryo (supercell)',
    genre: 'J-Rock / Pop',
    famousSong: 'World is Mine',
    descKey: 'prod_ryo_desc',
    songs: ['World is Mine', 'Melt', 'Black Rock Shooter'],
  },
  wowaka: {
    id: 'wowaka',
    avatar: '/producers/wowaka.webp',
    youtube: 'https://www.youtube.com/user/wowaka',
    name: 'wowaka',
    genre: 'Alternative / Rock',
    famousSong: 'Rolling Girl',
    descKey: 'prod_wowaka_desc',
    songs: ['Rolling Girl', 'Ura-Omote Lovers', "World's End Dancehall"],
  },
  cosmo: {
    id: 'cosmo',
    avatar: '/producers/cosmo.webp',
    youtube: 'https://www.youtube.com/@cosMo_bousouP',
    name: 'cosMo@Bousou-P',
    genre: 'Speed / Hardcore',
    famousSong: 'The Disappearance of Hatsune Miku',
    descKey: 'prod_cosmo_desc',
    songs: ['The Disappearance of Hatsune Miku', 'Holy Lance Explosion Boy', 'Melt (remix)'],
  },
  kz: {
    id: 'kz',
    avatar: '/producers/kz.webp',
    youtube: 'https://www.youtube.com/@livetune',
    name: 'kz (livetune)',
    genre: 'Synth-pop / Electronic',
    famousSong: 'Tell Your World',
    descKey: 'prod_kz_desc',
    songs: ['Tell Your World', 'Last Night, Good Night', 'Palette'],
  },
  kurousa: {
    id: 'kurousa',
    avatar: '/producers/kurousa.webp',
    youtube: 'https://www.youtube.com/user/Kurousa',
    name: 'Kurousa-P',
    genre: 'EDM / Traditional Fusion',
    famousSong: 'Senbonzakura',
    descKey: 'prod_kurousa_desc',
    songs: ['Senbonzakura', 'Senbonzakura (remix)', 'Karakuri Pierrot'],
  },
  crusher: {
    id: 'crusher',
    avatar: '/producers/crusher.webp',
    youtube: 'https://www.youtube.com/@CrusherP',
    name: 'Crusher-P',
    genre: 'English / Pop-Rock',
    famousSong: 'ECHO',
    descKey: 'prod_crusher_desc',
    songs: ['ECHO', 'RIP=RELEASE', 'Blow My Mind'],
  },
};

export const PRODUCER_IDS = ['ryo', 'wowaka', 'cosmo', 'kz', 'kurousa', 'crusher'];

/**
 * @param {string} id
 * @returns {object | null}
 */
export function getProducerById(id) {
  return PRODUCERS_BY_ID[id] ?? null;
}

export const PRODUCERS = PRODUCER_IDS.map((id) => PRODUCERS_BY_ID[id]);

/** @returns {object[]} */
export function getAllProducers() {
  return PRODUCERS;
}
