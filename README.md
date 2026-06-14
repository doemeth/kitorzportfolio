# Kitorz Portfolio Site

## How to edit content
Almost everything (videos, collabs, pricing, reviews, rules, contact info, colors)
can be changed in **config.js** and the color variables at the top of **style.css**.

## Adding your Komika Axis font
Place `KomikaAxis.woff2` (and/or `.ttf`) inside a `fonts/` folder next to these files.
Until then, the site uses a similar bold display font (Fredoka) automatically.

## Live YouTube subscriber counts & profile pictures
1. Go to https://console.cloud.google.com/
2. Create a project → enable **YouTube Data API v3**
3. Create an API Key (Credentials tab)
4. Paste it into `config.js` as `youtubeApiKey: "YOUR_KEY_HERE"`

Once set, the collab cards will automatically pull live subscriber counts
and current profile pictures for MrBaconyt0 and Bauix.

Without an API key, the `fallbackSubs` and `fallbackPfp` values in config.js are used —
edit those to update manually.

## Pages
- `index.html` — Editing portfolio (home)
- `development.html` — Development portfolio

## Hosting
Just upload all files (keeping the same folder structure) to any static host
(GitHub Pages, Netlify, Vercel, etc.) — no build step needed.
