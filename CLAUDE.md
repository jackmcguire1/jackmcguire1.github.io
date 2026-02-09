# CLAUDE.md

## Commands
```bash
yarn dev          # Dev server on localhost:3000
yarn build        # Type-check + production build (runs type-check and vite build in parallel)
yarn type-check   # vue-tsc --build --force
yarn lint         # biome check --write .
yarn lint:check   # biome check . (CI — no auto-fix)
yarn format       # biome format --write .
yarn preview      # Preview production build locally
```

## Architecture
Vue 3 + Vuetify 3 SPA portfolio site. Uses Vite with these key plugins:
- **unplugin-vue-router** — file-based routing from `src/pages/`
- **vite-plugin-vue-layouts-next** — layout system (`src/layouts/default.vue`)
- **unplugin-auto-import** — auto-imports Vue, Vue Router, and Pinia APIs (no manual imports needed)
- **unplugin-vue-components** — auto-imports all components (including Vuetify)
- **vite-plugin-vuetify** — Vuetify treeshaking and SCSS variable overrides via `src/styles/settings.scss`

Two HTML entry points: `index.html` (main site) and `stat-milestones.html` (standalone page). Both configured in `vite.config.mts` rollup input.

## Conventions
- **Composition API** with `<script setup lang="ts">` everywhere
- **No manual imports** for Vue/Router/Pinia APIs or components — auto-import handles it
- **Dark theme** by default — custom color palette defined in `src/plugins/vuetify.ts`
- **MDI icons** via `@mdi/font`
- **Path alias**: `@` maps to `src/`
- Content is hardcoded in components — no CMS, no API calls
- No test framework — CI runs `yarn type-check` only

## Deployment
GitHub Actions deploys to GitHub Pages on push to `master` or `main`. Workflow: `.github/workflows/deploy.yml`. Build output goes to `dist/`.
