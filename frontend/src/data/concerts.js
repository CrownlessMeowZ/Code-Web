/**
 * Concerts & live events domain — Hash Map keyed by id.
 */

export const CONCERTS_BY_ID = {
  'concert-1': {
    id: 'concert-1',
    year: '2013',
    date: 'Aug 31 – Sep 1',
    title: 'Hatsune Miku Magical Mirai 2013',
    location: 'Tokyo Big Sight, Japan',
    descKey: 'concert_1_desc',
    img: '/concerts/magical-mirai-2013.jpg',
    href: 'https://magicalmirai.com/2013/',
    highlightKey: 'concert_1_highlight',
    penlightColor: '#00d4ff',
  },
  'concert-2': {
    id: 'concert-2',
    year: '2014',
    date: 'Oct 2014',
    title: 'Hatsune Miku Expo 2014',
    location: 'Los Angeles → New York, USA',
    descKey: 'concert_2_desc',
    img: '/concerts/miku-expo-2014.jpg',
    href: 'https://www.youtube.com/watch?v=khfe3hvL4g0',
    highlightKey: 'concert_2_highlight',
    penlightColor: '#ff66cc',
  },
  'concert-3': {
    id: 'concert-3',
    year: '2013',
    date: 'Aug 31 – Sep 1, 2013',
    title: 'Magical Mirai (Annual Series)',
    location: 'Tokyo + Osaka + other cities',
    descKey: 'concert_3_desc',
    img: '/concerts/magical-mirai-series.jpg',
    href: 'https://magicalmirai.com/',
    highlightKey: 'concert_3_highlight',
    penlightColor: '#ffe566',
  },
  'concert-4': {
    id: 'concert-4',
    year: '2018',
    date: 'May 2018',
    title: 'Miku Expo 2018 Europe & Asia Tour',
    location: 'Europe + Southeast Asia',
    descKey: 'concert_4_desc',
    img: '/concerts/miku-expo-2018.jpg',
    href: 'https://mikuexpo.com/usamx2018/',
    highlightKey: 'concert_4_highlight',
    penlightColor: '#b388ff',
  },
  'concert-5': {
    id: 'concert-5',
    year: '2022',
    date: 'Dec 2022',
    title: 'Miku Expo 2022 (North America Return)',
    location: 'Multiple US + Canada cities',
    descKey: 'concert_5_desc',
    img: '/concerts/miku-expo-2022.jpg',
    href: 'https://www.youtube.com/watch?v=AufydOsiD6M',
    highlightKey: 'concert_5_highlight',
    penlightColor: '#ffaa55',
  },
};

export const CONCERT_IDS = [
  'concert-1',
  'concert-2',
  'concert-3',
  'concert-4',
  'concert-5',
];

/**
 * @param {string} id
 * @returns {object | null}
 */
export function getConcertById(id) {
  return CONCERTS_BY_ID[id] ?? null;
}

export const CONCERTS = CONCERT_IDS.map((id) => CONCERTS_BY_ID[id]);

/** @returns {object[]} */
export function getAllConcerts() {
  return CONCERTS;
}
