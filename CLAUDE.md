# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Jack McGuire's personal portfolio website built with:
- **Quasar Framework v2** (Vue 3 framework)
- **TypeScript** 
- **Vue Router** for routing
- **Google Analytics** (vue-gtag) for tracking
- **VueWordCloud** for visual effects

The site is deployed as a static site in the `docs/` directory for GitHub Pages hosting.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server with hot reload (opens browser automatically)
quasar dev

# Lint files
npm run lint

# Format code with Prettier
npm run format

# Build for production (outputs to /dist)
quasar build

# Run tests (currently no tests implemented)
npm test
```

## Architecture Overview

### Routing Structure
- Routes defined in `src/router/routes.ts`
- Main routes:
  - `/` - Home page (IndexPage.vue)
  - `/stat-milestones/` - Stat Milestones project page
  - `/:catchAll(.*)*` - 404 error page

### Component Architecture
- **MainLayout.vue**: Main layout wrapper containing:
  - Header with navigation menu
  - Drawer navigation with Pages, Projects, and Essential Links sections
  - Footer with social media links
  - Google Analytics cookie banner
  - All pages use this layout

### Boot Files
- `src/boot/ga.ts` - Initializes Google Analytics tracking
- `src/boot/wordcloud.ts` - Registers VueWordCloud component globally

### Build Configuration
- Configured via `quasar.config.js`
- Uses Vite as the build tool
- ESLint enabled with warnings and errors
- Vue Router in history mode
- Animations enabled globally
- Targets modern browsers (ES2019+)

### Deployment
The site builds to the `dist/` directory but is served from `docs/` for GitHub Pages. The production build outputs optimized static files ready for deployment.

## Key Files to Know

- `quasar.config.js` - Main Quasar configuration
- `src/layouts/MainLayout.vue` - Main layout component used by all pages
- `src/pages/IndexPage.vue` - Home page component
- `src/pages/StatMilestonesPage.vue` - Stat Milestones project page
- `src/router/routes.ts` - Route definitions