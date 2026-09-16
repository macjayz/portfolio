# Mangai Machen John – Portfolio

React + Vite portfolio, rebuilt from a WordPress/Elementor template (markup, class names and CSS kept).

Your name, contact details and projects live in `src/data/profile.js`. Edit that file to update them;
project images are in `public/assets/images/projects/`.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs dist/
```

`.npmrc` sets `include=optional`, which Vite's native bundler needs.

## Deploying (Cloudflare Pages)

Connect this GitHub repo in Cloudflare Pages with build command `npm run build` and output directory
`dist`. `.node-version` pins Node 22 (Vite needs 20.19+). Routes like `/about` work without extra config.

## Routes

| Path       | Page                  | Original file  |
|------------|-----------------------|----------------|
| `/`        | `src/pages/Home.jsx`    | `index.html`   |
| `/about`   | `src/pages/About.jsx`   | `about.html`   |
| `/contact` | `src/pages/Contact.jsx` | `contact.html` |
| `/my-work` | `src/pages/MyWork.jsx`  | `my-work.html` |

## Structure

- `src/components/Header.jsx`, `Footer.jsx`, `Layout.jsx`: shared page chrome, `<body>` classes, title.
- `src/components/elementor/`: React versions of the Elementor scripts:
  - `OffCanvas`: the mobile menu
  - `BackgroundSlideshow`: the home hero slideshow with Ken Burns zoom
  - `NestedCarousel`: the About carousels
  - `Animated`: fade-in on scroll
  - `BlurReveal`: letter-by-letter heading reveal
  - `LazyContainer`: lazy-loaded section backgrounds
  - `SocialLinks`: the GitHub, LinkedIn and email buttons on the home page
- `src/styles/`: the original stylesheets. `index.js` loads them in the original order. Each page's
  Elementor CSS has rules that aren't scoped to that page, so only the current page's stylesheet is
  turned on.
- `public/assets/`: images from `wp-content/uploads`.

## Notes

- The contact form has no backend: submitting opens the visitor's email app with the message addressed
  to you (`src/pages/Contact.jsx`). Swap in a form service if you want submissions delivered directly.
- Deep links like `/about` need the server to fall back to `index.html`. `public/.htaccess` does
  this on Apache/Hostinger.
