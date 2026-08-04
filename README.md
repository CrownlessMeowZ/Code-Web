# Project DIVA Web

Fan-facing web experience for the **Hatsune Miku: Project DIVA** series — characters, modules (skins), iconic songs, version timeline, series history, producers, and live concerts — with a cyberpop glassmorphism UI and bilingual **English / Vietnamese** support.

> Frontend is production-ready as a Vite SPA. Backend (Spring Boot) is planned; see `backend/README.md`.

---

## Tech Stack

| Layer | Stack |
|-------|--------|
| **Frontend** | React 19, Vite, React Router, react-i18next (en/vi), pure CSS (no Tailwind) |
| **Backend (planned)** | Java 17/21, Spring Boot 3.x, PostgreSQL, Spring Security |
| **Tooling** | ESLint 9 flat config, npm |

```
project-diva-web/
├── frontend/          # React SPA (active)
├── backend/           # Spring Boot plan / scaffold (not implemented yet)
├── CURRENT_PROG.md    # Living progress log for contributors / AI sessions
└── AGENTS.md          # Engineering conventions
```

---

## Key Features

### Product surface
- **Home** — hero particles, about, character teaser grid
- **Characters** — Crypton 6 + extras, 3D flip cards, **Diva Room accent sync** (`--page-accent`)
- **Skin & Song** — spotlight modules, gallery previews, music videos + Technical Zone HUD
- **Version & Gameplay** — scroll-reveal timeline, gameplay videos, **PV Director Mode**
- **Series History** — platform / series filter tabs with persisted selection
- **Producers** & **Concerts** — curated content; concerts include penlight canvas FX
- **Settings** — dark/light theme + language, persisted via safe `localStorage` helpers

### Architectural highlights
- **PV Director Mode** — camera presets (`wide` / `close` / `dynamic`) on gameplay videos via `usePvDirector` + `PvDirectorControls`
- **Magical Mirai Penlight Sync (Canvas)** — `useCanvasParticles` burst mode on Concerts; per-event `penlightColor` on click/keyboard
- **Series History DS&A-oriented filters** — games keyed by `platformKeys` / `seriesKey`, tab IDs validated against a fixed filter set, results memoized for O(1)-friendly membership checks as the catalog grows
- **Shared flip shell** — `FlipCard` (click + Enter/Space, `aria-pressed`, accent CSS variable)
- **Safe storage utilities** — `readStorage` / `writeStorage` with try/catch for private mode / quota
- **i18n** — `i18next` + `react-i18next` with en/vi locale JSON

---

## Local Setup & Run

### Prerequisites
- **Node.js** 20+ recommended
- **npm** (ships with Node)

### Install & develop

```bash
cd frontend
npm install
npm run dev
```

Vite prints a local URL (typically `http://localhost:5173`). Open it in the browser.

### Other scripts

```bash
cd frontend
npm run lint      # ESLint
npm run build     # Production build → frontend/dist
npm run preview   # Preview the production build
```

### Notes
- Static media lives under `frontend/public/` (characters, skins, videos, history covers).
- Do **not** commit secrets: `.env` / `.env.local` are gitignored.
- Local AI/CLI folders (`terminals/`, `agent-tools/`, `mcps/`) stay on disk but are **not** tracked by Git.

---

## Project status

See **`CURRENT_PROG.md`** for completed features, current task, and backlog (backend, RAG chatbot, remaining audit items).

Backend roadmap (Steam OpenID, posts, leaderboard, scores) is documented in **`backend/README.md`**.

---

## License & credits

Unofficial fan project. **Project DIVA**, Hatsune Miku, and related trademarks belong to **SEGA** and **Crypton Future Media**. Content and assets are for educational / portfolio demonstration only.
