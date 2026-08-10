# Samuel Kyere Portfolio

A static-export Next.js portfolio for a Systems/Infrastructure Engineer focused on integration automation, webhook workflows, and technical operations.

## Project structure

- `app/` — Next.js App Router pages and global layout
- `public/` — static assets served by the exported site
- `next.config.js` — configured for `output: 'export'` and unoptimized images for static export
- `tailwind.config.js` — Tailwind CSS content paths for the app
- `postcss.config.js` — PostCSS setup for Tailwind
- `package.json` — development scripts and dependencies

## Run locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```
3. Build and export static files:
   ```bash
   npm run build
   ```

## Deploy to GitHub Pages

1. Push the repository to GitHub.
2. In repository settings, enable GitHub Pages.
3. Use the `main` branch and `/` root folder for deployment.

## Notes

- `public/samuel_kyere_n8n.pdf` is available as the downloadable technical resume.
- The site is built for static export, so all routes and assets remain compatible with GitHub Pages.
