# George Soto — Portfolio

[![CI](https://github.com/gasoto-dev/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/gasoto-dev/portfolio/actions/workflows/ci.yml)

George Soto's professional portfolio. Live at [codeyoursuccess.com](https://codeyoursuccess.com).

## Stack

- Next.js 15, TypeScript, Tailwind CSS
- Static/SSG — no database, no auth
- Deployed on Vercel

## Sections

- **Nav** — links to sections
- **Hero** — name, title, CTA
- **AI Workflow** — the multi-agent system (Ren + Forge + Vex); stats (500+ tests, 9+ repos)
- **Projects** — 6 demo apps with descriptions, tags, and GitHub links
- **Experience** — work history
- **Skills** — tech stack
- **Contact** — email link

## Local setup

```bash
git clone https://github.com/gasoto-ai/portfolio.git
cd portfolio
npm install
npm run dev
```

Open `http://localhost:3000`.

## Tests

```bash
npm test
```

25 smoke tests covering all sections, project cards, nav links, and footer.

## Deployment (Vercel)

The site is connected to Vercel and deploys automatically on every push to `main`.

**Project:** `gasoto-ai/portfolio` (gasoto-dev Vercel account)
**Domain:** `codeyoursuccess.com` (registered at GoDaddy, nameservers pointed to Vercel)

To redeploy manually:
1. Push to `main`
2. Vercel auto-deploys within 1–2 minutes

**No environment variables required** — the site is fully static.

## Updating content

- **Stats** (`src/components/AiWorkflow.tsx`) — update test count and repo count numbers
- **Projects** (`src/components/Projects.tsx`) — add/remove project cards from `PROJECTS` array
- **GitHub link** (`src/components/Footer.tsx` + `Projects.tsx`) — currently points to `github.com/gasoto-dev`
