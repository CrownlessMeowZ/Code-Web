/**
 * Gallery / module-reference link domain.
 * Keyed by stable id for O(1) lookup; ordered arrays for rendering.
 */

export const GALLERY_LINKS_BY_ID = {
  'gallery-ft': {
    id: 'gallery-ft',
    captionKey: 'gallery_ft_caption',
    href: 'https://project-diva.fandom.com/wiki/Hatsune_Miku:_Project_DIVA_Arcade_Future_Tone/Modules',
    img: '/gallery/future-tone.png',
    altKey: 'gallery_ft_alt',
  },
  'gallery-x': {
    id: 'gallery-x',
    captionKey: 'gallery_x_caption',
    href: 'https://project-diva.fandom.com/wiki/Hatsune_Miku:_Project_DIVA_X/Modules',
    img: '/gallery/diva-x.jpg',
    altKey: 'gallery_x_alt',
  },
  'gallery-f': {
    id: 'gallery-f',
    captionKey: 'gallery_f_caption',
    href: 'https://project-diva.fandom.com/wiki/Hatsune_Miku:_Project_DIVA_F/Modules',
    img: '/gallery/diva-f.jpg',
    altKey: 'gallery_f_alt',
  },
  'gallery-2nd': {
    id: 'gallery-2nd',
    captionKey: 'gallery_2nd_caption',
    href: 'https://project-diva.fandom.com/wiki/Hatsune_Miku:_Project_DIVA_2nd/Modules',
    img: '/gallery/diva-2nd.jpg',
    altKey: 'gallery_2nd_alt',
  },
  'gallery-mm': {
    id: 'gallery-mm',
    captionKey: 'gallery_mm_caption',
    href: 'https://project-diva.fandom.com/wiki/Category:Project_DIVA_MegaMix_Modules',
    img: '/gallery/megamix.jpg',
    altKey: 'gallery_mm_alt',
  },
};

export const HOME_GALLERY_LINKS_BY_ID = {
  'gallery-wiki': {
    id: 'gallery-wiki',
    captionKey: 'gallery_wiki_caption',
    href: 'https://project-diva.fandom.com/wiki/Project_DIVA_Wiki',
    img: 'https://projectdiva.wiki/w/images/thumb/7/74/PjDWikiHome.png/1200px-PjDWikiHome.png',
    altKey: 'gallery_wiki_alt',
  },
  'gallery-megamix': {
    id: 'gallery-megamix',
    captionKey: 'gallery_megamix_caption',
    href: 'https://miku.sega.com/megamixplus/index.html',
    img: 'https://miku.sega.com/megamixplus/img/og_img.jpg',
    altKey: 'gallery_megamix_alt',
  },
};

export const GALLERY_LINK_IDS = [
  'gallery-ft', 'gallery-x', 'gallery-f', 'gallery-2nd', 'gallery-mm',
];

export const HOME_GALLERY_LINK_IDS = ['gallery-wiki', 'gallery-megamix'];

/**
 * @param {string} id
 * @returns {object | null}
 */
export function getGalleryLinkById(id) {
  return GALLERY_LINKS_BY_ID[id] ?? HOME_GALLERY_LINKS_BY_ID[id] ?? null;
}

export const GALLERY_LINKS = GALLERY_LINK_IDS.map((id) => GALLERY_LINKS_BY_ID[id]);
export const HOME_GALLERY_LINKS = HOME_GALLERY_LINK_IDS.map((id) => HOME_GALLERY_LINKS_BY_ID[id]);

/** @returns {object[]} */
export function getAllGalleryLinks() {
  return GALLERY_LINKS;
}

/** @returns {object[]} */
export function getHomeGalleryLinks() {
  return HOME_GALLERY_LINKS;
}
