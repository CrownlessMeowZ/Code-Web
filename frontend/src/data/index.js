/**
 * Data layer barrel — single public entry for domain modules.
 * Prefer this over deep imports of individual domain files.
 */

// Characters
export {
  CHARACTERS_BY_ID,
  EXTRA_CHARACTERS_BY_ID,
  ALL_CHARACTERS_BY_ID,
  CHARACTER_IDS,
  EXTRA_CHARACTER_IDS,
  getCharacterById,
  getAllCharacters,
  getExtraCharacters,
  CHARACTERS,
  EXTRA_CHARACTERS,
} from './characters';

// Skins / modules
export {
  SKIN_SPOTLIGHTS_BY_CHAR_ID,
  SKIN_SPOTLIGHT_CHAR_IDS,
  SKINS_BY_ID,
  getSkinById,
  getSkinGroupByCharId,
  getAllSkinSpotlights,
  SKIN_SPOTLIGHTS,
} from './skins';

// Gallery links
export {
  GALLERY_LINKS_BY_ID,
  HOME_GALLERY_LINKS_BY_ID,
  GALLERY_LINK_IDS,
  HOME_GALLERY_LINK_IDS,
  getGalleryLinkById,
  getAllGalleryLinks,
  getHomeGalleryLinks,
  GALLERY_LINKS,
  HOME_GALLERY_LINKS,
} from './gallery';

// Songs
export {
  SONGS_BY_ID,
  SONG_IDS,
  getSongById,
  getAllSongs,
  SONGS,
} from './songs';

// Versions & gameplay
export {
  VERSIONS_BY_YEAR,
  VERSION_YEARS,
  GAMEPLAY_VIDEOS_BY_ID,
  GAMEPLAY_VIDEO_IDS,
  getVersionByYear,
  getGameplayVideoById,
  getAllVersions,
  getAllGameplayVideos,
  VERSIONS,
  GAMEPLAY_VIDEOS,
} from './versions';

// Producers
export {
  PRODUCERS_BY_ID,
  PRODUCER_IDS,
  getProducerById,
  getAllProducers,
  PRODUCERS,
} from './producers';

// Concerts
export {
  CONCERTS_BY_ID,
  CONCERT_IDS,
  getConcertById,
  getAllConcerts,
  CONCERTS,
} from './concerts';

// Game History (Series History)
export {
  GAMES_BY_ID,
  GAME_IDS,
  getGameById,
  getAllGames,
  GAMES,
  GAMES_BY_PLATFORM,
  GAMES_BY_SERIES,
  FILTER_TABS,
  VALID_FILTER_IDS,
  VALID_FILTER_ID_SET,
  PLATFORM_FILTER_TABS,
  SERIES_FILTER_TABS,
  filterGames,
} from './gameHistory';

// Nav & PV presets (already modular)
export { NAV_LINKS } from './navLinks';
export { PV_PRESETS, PV_PRESET_IDS, PV_PRESET_ID_SET } from './pvPresets';
