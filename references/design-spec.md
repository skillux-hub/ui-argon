# Argon Design Spec

## Composition

- Multi-page: Components showcase (index), Landing, Profile, Login, Register
- Purple-violet hero gradient with Argon logo, cyan/white CTAs
- Component sections: buttons, inputs, navbars, tabs, progress, pagination, typography, modals, datepicker, carousel, Nucleo icons
- Example pages reuse the same indigo/cyan Bootstrap chrome

## Palette

See root `tokens.css`. Primary indigo `#5E72E4`, info cyan `#11CDEF`.

## Typography

- Open Sans 300–700, bundled via `assets/css/local-fonts.css`

## Components

- Rounded primary/outline buttons, alternative form groups, custom checkboxes
- Login / Register `.argon-auth-form` → local drafts via `assets/js/local-site.js`
- Auth is UI chrome only (no remote authentication)
