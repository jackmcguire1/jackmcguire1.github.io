# jackmcguire1.github.io

Personal portfolio site for **Jack McGuire** — Staff Engineer, AWS Community Builder, and open source contributor.

**Live:** [jackmcguire1.github.io](https://jackmcguire1.github.io)

## Tech Stack

- **Vue 3** + **Vuetify 3** — component framework with dark theme
- **Vite 7** — build tooling with HMR
- **TypeScript** — type-safe development
- **Biome** — linting and formatting
- **Pinia** — state management
- **GitHub Pages** — deployment via GitHub Actions

## Getting Started

### Prerequisites

- Node.js 24+ (see `.node-version`)
- Yarn v1

### Install

```bash
yarn install
```

### Development

```bash
yarn dev          # Dev server on localhost:3000
```

### Build

```bash
yarn build        # Type-check + production build (parallel)
yarn build-only   # Vite build only (no type-check)
yarn type-check   # vue-tsc --build --force
yarn preview      # Preview production build locally
```

### Lint & Format

```bash
yarn lint         # Biome check + auto-fix
yarn lint:check   # Biome check only (used in CI)
yarn format       # Biome format + auto-fix
```

## Project Structure

```
src/
  components/     # Vue components (auto-imported)
  layouts/        # Layout wrappers (default.vue)
  pages/          # File-based routing
  plugins/        # Vuetify config, router, etc.
  styles/         # Global SCSS
  assets/         # Images
```

Two HTML entry points: `index.html` (main site) and `stat-milestones.html` (standalone page).

## CI/CD

| Workflow | Trigger | Purpose |
|---|---|---|
| `deploy.yml` | Push to `master`/`main` | Build + deploy to GitHub Pages |
| `pr.yml` | Pull requests | Lint, type-check, build |
| `dependabot-auto-merge.yml` | Dependabot PRs | Auto-approve + squash merge after checks pass |

Branch protection on `master` requires **Lint**, **Type Check**, and **Build** to pass before merge.

## Claude Code + Vuetify MCP

This project uses [Claude Code](https://claude.ai/claude-code) for AI-assisted development with the Vuetify MCP server for component API lookups.

To install the Vuetify MCP server:

```bash
claude mcp add --transport http vuetify-mcp https://mcp.vuetifyjs.com/mcp
```

## License

MIT
