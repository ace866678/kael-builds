# Kael Builds

**Ideas into real projects.**

A personal portfolio exploring web applications, research workflows, and connected-system projects.

## Preview

The site is built as a responsive single-page portfolio with:
- A custom editorial/technical visual identity.
- Responsive navigation and accessible keyboard focus.
- Interactive project filters.
- Project-specific illustrative artwork, clearly labeled when it's not a real screenshot.
- Process, about, tools, and contact sections.
- Reduced-motion support and basic social/search metadata.

## Stack

- React + TypeScript
- Vite
- Lucide React icons
- Custom responsive CSS
- GitHub for source control
- Vercel for hosting

No database or secrets are required for the portfolio's first version.

## Run locally

Requires Node.js 20+ and npm.

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

The Vite build output is `dist/`.

## Deploy on Vercel

1. Import `https://github.com/ace866678/kael-builds` as a new Vercel project.
2. Choose the Vite framework preset if auto-detection does not select it.
3. Use `npm run build` as the build command and `dist` as the output directory.
4. Deploy the `main` branch to production; future pushes can trigger redeployments when Git integration is enabled.

No environment variables are required.

## Featured work & accuracy notes

- **Research Room** — a collaborative research workspace in progress. A public repository/demo link still needs to be added once verified.
- **Alvora** — an early opportunity-discovery prototype. [Public source repository](https://github.com/ace866678/alvora). Its README describes the current listings as illustrative demo content rather than a verified live feed.
- **IoT Crash Detection** — a research project exploring crash detection and emergency alerts for motorcycle and tricycle drivers in Kalibo. It is not presented as a certified or field-validated emergency device.
- **MCL Server** — public server tooling. [Public source repository](https://github.com/ace866678/MCL-server).

The card illustrations are portfolio artwork, not screenshots from the actual products. Only verified public repositories have source links. StudyVault is omitted from the featured section because its repository is private.

## Before sharing widely

- Replace project artwork with genuine screenshots when available.
- Add a Research Room source/demo URL only after testing the exact link.
- Confirm the current state of the IoT project and label it accordingly.
- Check all external links, mobile layouts, color contrast, and keyboard navigation.
- Run `npm run build` before deploying.
