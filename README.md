# elianasachs.com

Official website of Eliana Sachs (אליענה זקס). Plain HTML/CSS/JS — no build step. Bilingual: English and Hebrew (RTL), with a toggle in the header. Hebrew loads automatically for visitors whose browser is set to Hebrew; `?lang=he` / `?lang=en` force a language.

## Before launch

1. **Photos** — add them to `assets/img/` (names and sizes in `assets/img/README.md`). Until then the site shows an "ES" monogram.
2. **Email** — create `contact@elianasachs.com` (or change `email` at the top of `assets/js/main.js`).
3. **Contact form (optional)** — by default it opens the visitor's email app pre-filled. To receive submissions directly, make a free form at formspree.io and paste its URL into `formEndpoint` in `assets/js/main.js`.
4. **Instagram (optional)** — paste the profile URL into `instagram` in the same file.

## Hosting + domain

Any static host works. Easiest options:

- **Vercel / Netlify**: import this repo, no settings needed, then add `elianasachs.com` under Domains and follow the DNS records they show.
- **GitHub Pages**: Settings → Pages → deploy from `main`, root. `CNAME` is already set to `elianasachs.com`. At the domain registrar add A records `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` and a `www` CNAME to `<user>.github.io`.

## Editing content

- Text lives in `index.html`; every line exists twice (`data-l="en"` and `data-l="he"`).
- Press links live in the `MEDIA` list at the top of `assets/js/main.js` — add new coverage there.
- After the election, update the "Sep–Oct 2026" and "Next" timeline entries and the "No. 38" fact as needed.

## Sources used for the copy

Ynet / Ynetnews (Oct 2025, Oct 29 2025, Mar 2026, Aug 2026), Mako – Channel 12 (Mar 2026), Walla! (Jul–Aug 2026), Israel Hayom, Maariv, Davar, BR7, Channel 14 (Jul 2026), The Jerusalem Post (Sep 2026), JNS (Sep 2026), and the Yashar! team page. Quotes in English are translations of her Hebrew interviews.
