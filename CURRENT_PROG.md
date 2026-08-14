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
- **Workflow `architecture-review`:** `.grok/workflows/architecture-review.rhai` — 3 phases (code smell + adversarial verify, architecture/deps, Vietnamese roadmap report); 7 smell dimensions (dead-code, god-file, DRY, coupling, security, performance, error-handling); args `focus` (`all`|`frontend`|`backend`), `max_verify` (default 16)
- **Architecture-review run (focus=all, max_verify=16):** 13/55 smell findings confirmed; 0 security; 0 architecture defects confirmed. Report: session scratch `report.md`. Visual freeze still holds.
- **Batch 1 — React Performance & Resilience (LOCKED):**
  - `t` removed from `AppContext` value; `useApp()` merges `useTranslation().t` (call sites unchanged)
  - 7 pages + `NotFound` via `React.lazy` / `Suspense` (100vh empty fallback)
  - `DEFAULT_COLORS` / `DEFAULT_CHARS` hoisted in `useCanvasParticles.js`
  - `ErrorBoundary` around routes; catch-all `path="*"` → `NotFound` (`PageHero` 404)
- **Batch 2 — Data encapsulation, Hash Map filter, video resilience (LOCKED):**
  - `data/public.js` — getter-only surface for future AI tools (no raw maps)
  - `filterGames(activeFilter)` — O(1) `GAMES_BY_PLATFORM` / `GAMES_BY_SERIES` only; linear `source.filter` removed
  - `GameHistory.jsx` calls `filterGames(activeFilter)`
  - Skin/Version videos: `preload="none"` + `onError` → `t('video_load_error')`; HUD unmounted on fail
- **Batch 3 — CSS Modularization & DRY (LOCKED):**
  - Split `components.css` → `styles/components/{flip-card,gallery-preview,pv-director}.css`
  - Split `pages.css` → `styles/pages/{home,version-timeline,producers,concerts,characters-extras,game-history}.css`
  - Shared `.diva-flip-card` / `.diva-flip-card-inner` primitive; contextual `.char-flip` / `.skin-flip` kept
  - Barrel cascade unchanged: tokens → global → topbar → components → pages → responsive → theme
  - `components.css` / `pages.css` deleted; no visual value changes

## Current Task

**Next (flagship layer stack):** Spring Boot scaffold → `POST /api/chat` (proxy Gemini, secrets server-side) → FE `/chat` + tools over data getters → hybrid system prompt → wire FE→Java → update docs when ship.

Suggested implementation order for a new session:
1. Scaffold Spring Boot (layered: controller/service; host chat API in Java early)
2. Chat UI route `/chat` + `features/chat/` + `services/api.js`
3. Tools map: `getCharacterById`, `filterGames`, `getAll*`, …
4. System prompt hybrid (Tier 1 catalog tools / Tier 2 general DIVA–Vocaloid / Tier 3 refuse off-domain)
5. Env secrets (user adds keys locally; never commit)

## Known Bugs / Pending

Verified by `architecture-review` (13/55 smell; 0 security; 0 architecture confirmed). Do not implement until approved.

**Immediate, no visual change:**
1. ~~Hoist `DEFAULT_COLORS` / `DEFAULT_CHARS` in `useCanvasParticles.js`~~ — Batch 1 done
2. ~~`React.lazy` + `Suspense` + Error Boundary + `path="*"` in `App.jsx`~~ — Batch 1 done
3. ~~Split `t` out of `AppContext`; `useApp()` supplies `t` via `useTranslation()`~~ — Batch 1 done (ThemeProvider split not in this batch)
4. ~~Narrow barrel; add `data/public.js` for future tools~~ — Batch 2 done
5. ~~`filterGames(activeFilter)` Hash Map only~~ — Batch 2 done

**Controlled visual hotfix:**
6. ~~`preload="none"` + `onError` on Skin/Version videos; add `video_load_error`~~ — Batch 2 done
7. ~~Split `pages.css` / `components.css`; shared flip primitive~~ — Batch 3 done

**Not now:** GH empty-branch deletion; extra-character bio UI; Steam; bulk i18n; flip/particles/PV polish.

## Portfolio & career strategy (session handoff — do not re-debate)

- **User:** SE year 2; ~1 year to internship; narrow track Java Core + AI. Java = durable foundation; AI = long-term growth. Want SE / full-stack / AI Eng doors open. One deep flagship, not many shallow repos. Team project already covers “teamwork quantity.”
- **Flagship = this monorepo multi-layer:** FE (near-done) + BE Java + Gemini tool-calling agent (+ mobile later, not urgent). “Best possible” = shippable, extensible, explainable — not perfect every feature.
- **Project 2:** after intern; trend + AI; classical ML train optional later — not required before intern. DIVA agent = LLM/tools signal, not a Kaggle substitute.
- **Avoid:** 10 shallow repos; Steam+social+mobile+train DL all at once pre-intern; claiming “full Spring” while `backend/src` is empty.

### Anti-confusion (corrected misconceptions)

| Wrong | Actual intent |
|-------|----------------|
| Java Core = drop AI / only backend intern | Java = system core; AI stays a DIVA layer + project 2 later |
| AI first forever, BE always secondary | Both layers one product; Java hosts AI |
| Tools-only catalog now; “smart” only after ML/DL | Hybrid agent from day one; separate ML project optional later |
| Two full projects in parallel now | One DIVA flagship; project 2 after intern |

### AI agent design (agreed)

- **Tier 1:** Site catalog Qs (character/game/song…) → **must** use tools → no fabrication
- **Tier 2:** General Vocaloid/DIVA → model may answer with boundaries/disclaimer
- **Tier 3:** Off-domain → refuse
- MVP ≠ mute bot outside Hash Map; MVP ≠ “week 2 done then train DNN.” Gemini is already LLM; next is RAG/eval/backend, not mandatory train.

### Extension vs freeze

- **OK to touch:** `data/` getters, AppContext, route `/chat`, `features/chat/`, `services/api.js`
- **Freeze (hotfix / new route only):** visual pages, flip/particles/PV polish, bulk i18n key renames, Game History filter IDs

### CV one-liner (agreed)

Product DIVA: SPA + Spring (Java foundation) + Gemini tool-calling agent; Java is the system core, AI is a capability on a real product. README should tell the story by **layers** (product / systems / AI).

## Completed (docs / cleanup)

- Full code audit (Phase 1–3) saved to `audit_report.md` (read-only; no code changes applied)
- Repo cleanup: removed unused `hero.png`, `favicon.svg`, `icons.svg`; archive one-shot scripts → `frontend/scripts/archive/`; removed Vite template `frontend/README.md`
- GitHub: `CrownlessMeowZ/Project-DIVA-Web` (master)

## Phase 4 — Manual Test Checklist

| # | Scenario | Expected |
|---|----------|----------|
| 1 | Skin flip back face (en/vi) | Producer/song translated; `—` via `song_none` |
| 2 | Concerts meta (en/vi) | Date + location + figcaption location translated |
| 3 | Settings open via avatar | Modal drawer slides in; focus trapped in dialog |
| 4 | Settings ESC / backdrop / ✕ | Closes; focus returns; `aria-expanded` false |
| 5 | Theme/lang buttons | `aria-pressed` reflects selection |

## Known Bugs / Pending

- **M2-followup — Video playback position restore:** cache `currentTime` per video via `sessionStorage` (`VersionAndGameplay`, `SkinAndSong`)
- Optional deeper i18n: skin module names, concert titles, character `alt` (proper nouns often stay EN)
- **Backend:** only `backend/README.md` plan (Steam/posts/leaderboard vision); `backend/src` empty — **0 Java**. Prefer ship chat API first over full social/Steam stack
- **AI / Mobile:** not started
- Note: older `backend/README.md` still lists Steam/social first and mentions `GROQ_API_KEY` example — strategy now prioritizes **chat proxy (Gemini)** hosted by Spring; social/Steam later if needed
