---
name: ui-argon
description: "Generate a Bootstrap 4 design-system / UI kit website with Argon purple and cyan accents, component showcase, landing, profile, login and register example pages, Headroom nav, carousel, and local Open Sans. Use when the user wants an Argon-style design system site, Bootstrap UI kit demo, component library landing, or purple-to-cyan SaaS UI examples (not fashion shops, blogs, or gaming portals)."
---

# Argon Design System Website

## About

Argon is a self-contained website-generation skill for English Bootstrap 4 design-system and UI-kit sites. It ships a multi-page static starter—Bootstrap, Nucleo + Font Awesome icons, Headroom sticky nav, noUiSlider, datepicker, carousel, Open Sans (local), a components showcase home, plus Landing / Profile / Login / Register examples, and auth forms that save unsent local drafts—so generation does not depend on an external template marketplace, CDN fonts, PHP mail, or another skill.

The look centers a purple-to-violet hero gradient with cyan (#11CDEF) CTAs, indigo primary (#5E72E4), and the Argon hexagonal wordmark.

## What you can do

- Generate a ready-to-open design-system showcase from the bundled starter
- Present Components (index), Landing, Profile, Login, and Register pages
- Keep Headroom navbar behavior, Bootstrap carousel, tabs/modals/tooltips, noUiSlider, and datepicker demos
- Capture login/register attempts as unsent local draft downloads (nothing is posted remotely)
- Swap the Argon brand name while preserving the purple–cyan Bootstrap composition
- Choose full / auto / off motion via the generator (default full; no on-page Motion selector)

## Who it's for

- Product teams documenting a Bootstrap UI kit or design system
- Agencies packaging Landing + Profile + Auth demos without a build step
- Teams that want fully local assets and honest “draft only” auth chrome—not live authentication

## How to use it

Install the pack into your agent skills folder, then start a new Agent session. Invoke by naming the skill or describing a design-system scenario, for example:

- `/ui-argon` help me generate a Bootstrap design system website
- Use `ui-argon` to build a UI kit website; brand it Argon
- Follow the skill’s default prompt: `Use $ui-argon to create a Bootstrap design system website with components, landing, profile, and local auth drafts.`

Include the brand name and primary CTA when you can. The agent should follow this skill’s Generate / Adapt steps and use the bundled starter.

## Generate

1. Run the bundled generator (defaults to full motion):

```bash
python scripts/create_site.py /path/to/output --brand "Your Brand"
```

2. Optional motion modes: `--motion full` (default), `--motion auto`, or `--motion off`. URL `?motion=` is also supported.
3. Open `index.html` in a browser (or serve the folder). `landing.html`, `profile.html`, `login.html`, and `register.html` ship with the starter.
4. Do not invent a visitor-facing Motion selector. Login / register save local drafts only—nothing is authenticated remotely.

## Adapt

- Read [design-spec.md](references/design-spec.md) and [effects.md](references/effects.md). Locked palette tokens live in [tokens.css](tokens.css); keep starter CSS aligned when recoloring.
- Replace hero copy, example photos, and logo PNGs for the real product.
- The generator replaces the brand token in [site-config.json](references/site-config.json) on `index.html` (HTML-escaped). Update other HTML pages and brand images if the brand changes.
- **Sample claims only:** this is a UI demo. Do **not** invent live auth, payments, or remote APIs.
- Keep English UI labels and draft messages unless another language is requested.
- Preserve effects in `references/effects.md`. Do not add marketplace credits or Motion UI chrome.

## Verify

- `index.html` is an Argon-style design-system home (not a template marketplace page)
- No mobanwang / 网页模板 credits in visitor chrome
- Runtime assets resolve locally; no CDN CSS/JS/fonts required
- Motion is active on first load with default generation (`data-motion-mode="full"`)
- Login and register stay as local drafts

`ui-argon.png` is the skill product cover, not a site runtime asset.
