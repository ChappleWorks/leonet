# LeoNet — GitHub Pages website

A responsive, build-free website based on the supplied copper ribbon-lion brand board. No package installation or paid dependencies.

## Preview
Open index.html directly, or run `python3 -m http.server 8000` from this folder and visit http://localhost:8000.

## Publish on GitHub Pages
1. Extract this ZIP. Upload the CONTENTS of this folder to your chosen repository, with index.html at the repository root. Keep assets, config.js, app.js and styles.css beside it.
2. For simple manual upload: in repository Settings → Pages, choose Deploy from a branch → main → /(root) → Save. The .nojekyll file disables Jekyll processing. This route does not require the workflow file.
3. If pushing through Git: an optional GitHub Actions workflow can also support deployment. For that route, choose GitHub Actions as the Pages source. Use one deployment route.
4. The site uses relative paths and works under a project repository URL.

## Contact setup — before launch
The default forms DOWNLOAD a text enquiry/profile to the visitor's device. They do NOT collect leads or claim to send anything. Set `contactEmail` in config.js to your real shared business email to enable email drafts. Visitors must send the draft themselves using a configured email application. This is not a server-side CRM integration. No personal data is persisted in browser storage.

For automatic lead delivery, connect a real form backend and update the on-page privacy text. GitHub Pages alone cannot receive form submissions.

## Included
Seller and investor forms with native validation; enquiry download or optional email draft; mobile menu; FAQ; privacy dialog; custom generated hero; supplied brand board; GitHub Pages branch deployment.

## Content to review
The site has no fabricated listings, testimonials, phone numbers, returns, completed-deal counts, or guaranteed offers. Review company name and transaction descriptions before publishing. The education/apparel/truck images in the supplied brand board are visual concepts, not represented as available products on this site.

## Assets
lion-hero.png: newly generated website artwork derived from your exact selected image.
The supplied brand board was used as the design reference.
favicon.svg: simple L favicon.
