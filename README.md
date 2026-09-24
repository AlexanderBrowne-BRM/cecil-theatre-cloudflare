# Cecil Theatre Project — Cloudflare Pages

This repository contains the Cecil Theatre Project website, its images and fonts, and a ready-to-publish static export. It is separate from the original ChatGPT Sites project.

## Cloudflare Pages settings

Connect this repository's `main` branch to a **Pages** project named `cecil-theatre-cloudflare` with:

| Setting | Value |
| --- | --- |
| Framework preset | None |
| Build command | `pnpm run build` |
| Build output directory | `dist/client` |
| Root directory | `/` (repository root) |

The build places the homepage at `dist/client/index.html`. Content pages are exported as `dist/client/about.html`, `dist/client/productions.html`, and so on. Cloudflare Pages maps clean paths such as `/about` to those HTML files. Do not set the output directory to `app`, `public`, or the repository root: those contain source files, not the finished site.

The built `dist/client` folder is committed as a checked copy of the publishable result. Cloudflare should still run the build command on each push so source edits become live pages. Assets, fonts, the custom `404.html`, `_redirects`, `_headers`, `robots.txt`, and `sitemap.xml` are all in the publish directory.

## Forms and database

The newsletter and get-involved forms call Pages Functions in `functions/api/`. Bind the existing Cloudflare D1 database named `cecil-theatre-site` to the Pages project as **`DB`** in both Production and Preview environments, then redeploy. The database schema is in `drizzle/0000_sudden_darkhawk.sql`; apply it once before accepting submissions. The `wrangler.pages.jsonc` file records the intended local setup but is deliberately not named `wrangler.jsonc`, because the static-site builder would otherwise mistake this Pages project for a Workers build. Configure the live binding in the Cloudflare dashboard.

## Local checks

```sh
pnpm install --frozen-lockfile
pnpm run typecheck
pnpm run build
pnpm exec wrangler pages dev dist/client --d1 DB=d3da3a33-9126-4ec5-94a5-bd6b61d20020
```

After deploying, check `/`, `/about`, `/productions`, `/productions/little-shop-of-horrors`, `/get-involved`, `/contact`, an image, `/sitemap.xml`, and a nonexistent path (which should use `404.html`). The legacy `/season`, `/team`, `/volunteer`, `/donate`, and `/current-production` paths are redirected by `_redirects`.
