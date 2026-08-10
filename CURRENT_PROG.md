# Project DIVA Web — Progress

## Completed Features

- Frontend: React 19 + Vite + React Router + react-i18next (en/vi)
- **Diva Room Accent Sync:** `useDivaAccent` hook, localStorage `diva-accent`, `--page-accent` CSS variable, Characters flip triggers accent
- **DIVA History Scroller:** `useScrollReveal` + `.version-timeline--reveal` on Version & Gameplay
- **PV Director Mode:** `usePvDirector` + `PvDirectorControls` — camera presets (wide/close/dynamic) on gameplay videos
- **Technical Zone HUD:** `useTechnicalZone` + `TechZoneBar` on Version & Gameplay and Skin & Song videos
- **Magical Mirai Penlight Sync:** `useCanvasParticles` burst mode + `penlightColor` on CONCERTS, click concert items to trigger burst
- `useParticles` refactored as wrapper around `useCanvasParticles` (ambient mode for Home)
- Dead code removed: `PLATFORMS` / `REGIONS` from `content.js`
- Home UI: scroll hint + characters link i18n; video accessibility (aria-label, captions track)
- App.jsx `isHome` prop correct
- **Audit Batch 1 (L1/L2/L4/L5/L12):** `settings_lang`, `footer_producers_src`, `nav_toggle` keys; orphan `gh_*`/`btn_*`/`lbl_official_*` keys removed; Home `chars_sub` strip removed; Producers footer i18n; Topbar hamburger aria-label i18n
- **Audit Batch 2 (L3/L6/L7/L8/L9/L10/L11):** removed dead `game` field on EXTRA_CHARACTERS; flip-card keyboard a11y (Characters + SkinSpotlight); scroll `behavior: 'auto'`; try/catch on all localStorage writes; GameHistory uses `useApp()`; `resolveVideoRef` unexported; local favicon + `fonts.gstatic.com` preconnect
- **Audit Batch 3 (M1/M2/M3/M4/M5/M8) — LOCKED:** `useScrollReveal` pending-queue fix; Routes no remount key; dead GH filter v1 CSS + `body:not(#introduce)` removed; shared `NAV_LINKS` + `PV_PRESETS`; `body.home-page` class via React (removed `id="introduce"`)
- **Phase 1 DRY & Utilities:**
  - `utils/storage.js` — `readStorage` / `writeStorage` (try/catch safe)
  - `AppContext.jsx` — removed dead `toggleTheme`; theme/lang persist via storage utils; lean context contract
  - `FlipCard.jsx` — shared flip shell (state, click, Enter/Space, `aria-pressed`, `--accent-c`)
  - Consumers: `Characters.jsx`, `SkinSpotlight.jsx` wired to `FlipCard` (zero visual/a11y regression)
- **Phase 2 Data Layer Decoupling:**
  - Removed monolith `data/content.js`
  - Domain modules: `characters`, `skins`, `gallery`, `songs`, `versions`, `producers`, `concerts` (+ enhanced `gameHistory`)
  - Barrel: `data/index.js`
  - Hash Maps `*_BY_ID` + ordered ID lists + `getAll*()` / `get*ById()` for O(1) lookup
  - Skins: denormalized `charName`/`accent` resolved via `getCharacterById` (DRY)
  - Game History: `GAMES_BY_PLATFORM` / `GAMES_BY_SERIES` / `VALID_FILTER_ID_SET` O(1) filter buckets
  - All pages import from `../data` barrel
- **Phase 3 CSS Modularization & Storage Migration:**
  - Storage: `useDivaAccent`, `i18n.js`, `GameHistory` → `readStorage` / `writeStorage` only
  - Dead CSS purge + `styles/*` split; `index.css` CSS barrel
- **Phase 4 Deep i18n & Accessibility (M6 & M7):**
  - **M6:** skins `producerKey`/`songKey`; concerts `dateKey`/`locationKey`; keys in `en.json` + `vi.json`; `SkinSpotlight` / `Concerts` use `t()`
  - **M7:** `SettingsPanel` → native HTML5 `<dialog>` (`showModal`/`close`, `::backdrop`, focus trap); CSS in `topbar.css`; Topbar `aria-haspopup`/`aria-controls`

## Current Task

_Phase 4 complete. Awaiting next priorities (backend scaffold, remaining proper-name i18n, video position restore, RAG)._

## Completed (docs)

- Full code audit (Phase 1–3) saved to `audit_report.md` (read-only; no code changes applied)

## Phase 4 — Manual Test Checklist

| # | Scenario | Expected |
|---|----------|----------|
| 1 | Skin flip back face (en/vi) | Producer/song translated; `—` via `song_none` |
| 2 | Concerts meta (en/vi) | Date + location + figcaption location translated |
| 3 | Settings open via avatar | Modal drawer slides in; focus trapped in dialog |
| 4 | Settings ESC / backdrop / ✕ | Closes; focus returns; `aria-expanded` false |
| 5 | Theme/lang buttons | `aria-pressed` reflects selection |

## Backlog (deferred)

- **M2-followup — Video playback position restore:** cache `currentTime` per video via `sessionStorage`. Scope: `VersionAndGameplay`, `SkinAndSong`.
- Optional deeper i18n: skin module **names**, concert **titles**, character `alt` strings (proper nouns often stay English)
- Backend (Spring Boot) not implemented
- RAG chatbot not started
