# Argon Effects

| Effect | Trigger | Implementation |
| --- | --- | --- |
| Headroom navbar | scroll | `assets/vendor/headroom/headroom.min.js` via `argon.js` (gated by `__arAuto`) |
| Bootstrap carousel | load / auto | `data-ride="carousel"`; paused when motion off |
| On-screen class toggle | scroll into view | `assets/vendor/onscreen/onscreen.min.js` |
| Datepicker | focus / click | `bootstrap-datepicker` |
| noUiSlider | load | `nouislider.min.js` |
| Tooltips / popovers / modals | click / focus | Bootstrap JS |
| Motion modes | `data-motion-mode` / `?motion=` | `assets/js/local-site.js` + `assets/css/motion-local.css` |

Default generation uses `data-motion-mode="full"`. No visitor-facing Motion UI.
