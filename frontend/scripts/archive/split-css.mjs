/**
 * Archived - one-shot migration script, kept for reference, not part of active build.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const stylesDir = path.join(root, 'src/styles');
const purgedPath = path.join(stylesDir, '_purged_full.css');
const barrelPath = path.join(root, 'src/index.css');

/**
 * Prefer pre-purged snapshot if present; else rebuild purge from git-less
 * recovery is not needed â€” _purged_full.css must exist for this run.
 */
if (!fs.existsSync(purgedPath)) {
  console.error('Missing _purged_full.css â€” abort');
  process.exit(1);
}

const cleaned = fs
  .readFileSync(purgedPath, 'utf8')
  .split(/\r?\n/);

/** 1-based inclusive slice */
function slice1(a, b) {
  return cleaned
    .slice(a - 1, b)
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

/**
 * Find 1-based line of a multi-line banner comment whose body matches `titlePart`.
 * Banner format:
 *   /* ================
 *      TITLE HERE
 *      ================ *\/
 */
function findBanner(titlePart) {
  for (let i = 0; i < cleaned.length; i++) {
    if (!/^\s*\/\* =+/.test(cleaned[i])) continue;
    // look at next 3 lines for title
    for (let j = i; j < Math.min(i + 4, cleaned.length); j++) {
      if (cleaned[j].includes(titlePart)) return i + 1;
    }
  }
  throw new Error(`Banner not found: ${titlePart}`);
}

function findSingle(marker) {
  const i = cleaned.findIndex((l) => l.includes(marker));
  if (i < 0) throw new Error(`Marker not found: ${marker}`);
  return i + 1;
}

const L = {
  tokens: findSingle('---- TOKENS ----'),
  reset: findSingle('---- RESET ----'),
  topbar: findBanner('TOPBAR â€” sticky'),
  hero: findBanner('HERO SECTION'),
  pageHero: findBanner('PAGE HERO'),
  sectionTitles: findBanner('SHARED SECTION TITLES'),
  cards: findBanner('GLASSMORPHISM CARDS'),
  flip: findBanner('FLIP CARDS'),
  images: findBanner('IMAGES'),
  navLinks: findBanner('NAV LINKS (preview'),
  grid: findBanner('GRID & FLEX'),
  about: findBanner('ABOUT SECTION'),
  timeline: findBanner('VERSION TIMELINE'),
  pv: findBanner('PV DIRECTOR'),
  footer: findBanner('FOOTER'),
  mq1: findBanner('MEDIA QUERY 1'),
  light: findBanner('LIGHT MODE'),
  topbarControls: findBanner('TOPBAR CONTROLS'),
  settings: findBanner('SETTINGS PANEL'),
  heroQuickFix: findBanner('HERO QUICK BAR â€” fix'),
  topbarAvatar: findBanner('FIX 2 â€” Topbar'),
  pageTransition: findBanner('FIX 3 â€” Page transition'),
  producers: findBanner('PRODUCERS page'),
  charsLabel: findBanner('CHARACTERS â€” Section labels'),
  skin: findBanner('SKIN SPOTLIGHT'),
  galleryCta: findSingle('Spotlight â†’ Gallery') || findSingle('spotlight-gallery-cta'),
  gameHistory: findBanner('GAME HISTORY'),
};

// gallery CTA marker is a short comment; resolve line
try {
  L.galleryCta = findSingle('Spotlight â†’ Gallery');
} catch {
  L.galleryCta = findSingle('spotlight-gallery-cta') - 1;
}

const end = cleaned.length;

const files = {
  'tokens.css': `/* ================================================================
   TOKENS
   ================================================================ */
${slice1(L.tokens, L.reset - 1)}
`,

  'global.css': `/* ================================================================
   GLOBAL â€” reset, body, keyframes, shared primitives
   ================================================================ */
${slice1(L.reset, L.topbar - 1)}

${slice1(L.pageHero, L.flip - 1)}

${slice1(L.images, L.navLinks - 1)}

${slice1(L.grid, L.about - 1)}

${slice1(L.footer, L.mq1 - 1)}

${slice1(L.pageTransition, L.producers - 1)}
`,

  'topbar.css': `/* ================================================================
   TOPBAR + SETTINGS DRAWER
   ================================================================ */
${slice1(L.topbar, L.hero - 1)}

${slice1(L.topbarControls, L.heroQuickFix - 1)}

${slice1(L.topbarAvatar, L.pageTransition - 1)}
`,

  'components.css': `/* ================================================================
   COMPONENTS â€” flip cards, gallery, PV, tech zone, skin flip
   ================================================================ */
${slice1(L.flip, L.images - 1)}

${slice1(L.navLinks, L.grid - 1)}

${slice1(L.pv, L.footer - 1)}

${slice1(L.skin, L.galleryCta - 1)}
`,

  'pages.css': `/* ================================================================
   PAGES â€” Home, Version, Producers, Concerts, Characters, GH
   ================================================================ */
${slice1(L.hero, L.pageHero - 1)}

${slice1(L.about, L.timeline - 1)}

${slice1(L.timeline, L.pv - 1)}

${slice1(L.heroQuickFix, L.topbarAvatar - 1)}

${slice1(L.producers, L.skin - 1)}

${slice1(L.galleryCta, end)}
`,

  'responsive.css': `/* ================================================================
   RESPONSIVE breakpoints
   ================================================================ */
${slice1(L.mq1, L.light - 1)}
`,

  'theme-light.css': `/* ================================================================
   LIGHT THEME overrides (load last)
   ================================================================ */
${slice1(L.light, L.topbarControls - 1)}
`,
};

fs.mkdirSync(stylesDir, { recursive: true });

for (const [name, content] of Object.entries(files)) {
  const out = content.replace(/\n{3,}/g, '\n\n').trim() + '\n';
  // Validate comment balance
  const opens = (out.match(/\/\*/g) || []).length;
  const closes = (out.match(/\*\//g) || []).length;
  if (opens !== closes) {
    console.error(`UNBALANCED ${name}: opens=${opens} closes=${closes}`);
  }
  fs.writeFileSync(path.join(stylesDir, name), out);
  console.log('Wrote', name, out.split('\n').length, 'lines', `/* ${opens}/${closes} */`);
}

const barrel = `/* ================================================================
   PROJECT DIVA â€” CSS entry barrel
   Cascade order is intentional:
   tokens â†’ global â†’ topbar â†’ components â†’ pages â†’ responsive â†’ theme
   ================================================================ */
@import './styles/tokens.css';
@import './styles/global.css';
@import './styles/topbar.css';
@import './styles/components.css';
@import './styles/pages.css';
@import './styles/responsive.css';
@import './styles/theme-light.css';
`;

fs.writeFileSync(barrelPath, barrel);
console.log('Wrote index.css barrel');

// Remove temp artifact
fs.unlinkSync(purgedPath);
console.log('Removed _purged_full.css');
