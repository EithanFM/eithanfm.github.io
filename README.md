# Eithan Flores

Personal professional website for Eithan Flores. Static site built with Astro and Tailwind CSS, ready to deploy on Netlify.

Page copy lives in [`src/data/site.ts`](src/data/site.ts). The portrait is [`src/assets/eithan-flores.jpg`](src/assets/eithan-flores.jpg), with alt text “Portrait of Eithan Flores.”

The Download CV control stays visible and does not link to a file.

Keep the site a professional presence. Do not add hiring, services, rates, freelance, or contact-for-work language.

## Requirements

- Node.js 22.12 or newer

## Run locally

```bash
npm install
npm run dev
```

The dev server prints a local URL.

## Build

```bash
npm run build
npm run preview
```

`npm run build` writes the static site to `dist/`.

## Deploy

[`netlify.toml`](netlify.toml) sets the build command to `npm run build` and the publish directory to `dist`. The site URL in `astro.config.mjs` and `src/data/site.ts` is `https://eithanflores.netlify.app`. Change it if the production domain differs.

## Content

| Kind | Where to edit |
| --- | --- |
| Page copy and links | `src/data/site.ts` |
| Portrait file | `src/assets/eithan-flores.jpg` |
| Open Graph image | `public/og.png` |
