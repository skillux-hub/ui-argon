# UI Argon — an AI design skill for coding agents

Generate a Bootstrap 4 design-system / UI kit website in the Argon style — purple-to-violet gradients with cyan accents — including a component showcase, landing, profile, login, and register example pages.

This is a [Skillux](https://skillux.dev) design skill for AI coding agents such as Claude Code, Cursor, and Codex. It is free on Skillux: [skillux.dev/skills/ui-argon](https://skillux.dev/skills/ui-argon).

## What it does

Argon is a self-contained, multi-page static starter (Bootstrap 4, Nucleo and Font Awesome icons, Headroom sticky nav, noUiSlider, datepicker, carousel, local Open Sans), so generation does not depend on an external template marketplace, CDN fonts, or another skill.

- Components showcase home, plus Landing / Profile / Login / Register pages
- Purple-to-violet hero gradient, cyan (#11CDEF) CTAs, indigo (#5E72E4) primary
- Headroom navbar, carousel, tabs, modals, tooltips, sliders, and datepicker demos
- Login / register forms that save **unsent local drafts only** — no remote authentication
- Brand swap via the generator while preserving the composition
- Motion modes: `full` (default), `auto`, or `off`

## Who it's for

- Product teams documenting a Bootstrap UI kit or design system
- Agencies packaging Landing + Profile + Auth demos without a build step
- Teams that want fully local assets and honest "draft only" auth behavior

## Install

```bash
npx skills add https://github.com/skillux-hub/ui-argon --skill ui-argon
```

Or clone this repository into your agent's skills folder, keeping the directory structure intact.

## Use

Ask your agent for an Argon-style design-system site, for example:

```text
Use $ui-argon to create a Bootstrap design system website with components, landing, profile, and local auth drafts.
```

Generate a site directly with the bundled script:

```bash
python scripts/create_site.py /path/to/output --brand "Your Brand" --motion full
```

Then open the generated `index.html` in a browser or serve the folder with any static server.

## What's included

| Path | Contents |
|---|---|
| `SKILL.md` | The skill definition your agent follows (generate / adapt / verify workflow) |
| `scripts/create_site.py` | Generator that copies the starter to a new directory and applies brand + motion settings |
| `references/design-spec.md` | Composition and layout contracts |
| `references/effects.md` | Interaction and motion behavior to preserve |
| `references/site-config.json` | Brand token configuration used by the generator |
| `tokens.css` | Locked palette tokens |
| `assets/starter/` | The complete multi-page starter site (HTML, CSS, JS, fonts, images) |

> Note: this repository contains the skill definition, generator, references, and starter source. Binary media and font files are distributed with the free pack download on Skillux.

## Adapting it

Read `references/design-spec.md` and `references/effects.md` before changing composition or interactions. This is a UI demo: do not present its auth, pricing, or example content as live functionality. Keep UI labels in English unless another language is requested.

## More

- Product page (free): https://skillux.dev/skills/ui-argon
- Topic: AI design skills for dashboards — https://skillux.dev/ai-design-skills-for-dashboards
- More AI design skills for Claude Code, Cursor & Codex: https://skillux.dev
