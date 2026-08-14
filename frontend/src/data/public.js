/**
 * Stable catalog getters for future AI / Java tool-calling.
 * Exports functions only — never raw maps or arrays.
 * Pages keep importing from `./index` or domain files.
 */

export {
  getCharacterById,
  getAllCharacters,
  getExtraCharacters,
} from './characters';

export {
  getSkinById,
  getSkinGroupByCharId,
  getAllSkinSpotlights,
} from './skins';

export {
  getGalleryLinkById,
  getAllGalleryLinks,
  getHomeGalleryLinks,
} from './gallery';

export { getSongById, getAllSongs } from './songs';

export {
  getVersionByYear,
  getGameplayVideoById,
  getAllVersions,
  getAllGameplayVideos,
} from './versions';

export { getProducerById, getAllProducers } from './producers';

export { getConcertById, getAllConcerts } from './concerts';

export { getGameById, getAllGames, filterGames } from './gameHistory';
