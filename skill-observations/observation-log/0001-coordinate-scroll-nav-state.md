---
id: 1
title: Coordinate scroll tween, scroll spy, and navigation indicator state
status: open
type: open-source
skill:
  - ui-ux-pro-max
  - ui-styling
proposes_skill: []
siblings_checked: "No registry; scanned UI/design skills: ui-ux-pro-max, ui-styling, design-system, design, banner-design — shared web-interaction guidance applies to ui-ux-pro-max and ui-styling; the others are not implementation-focused for this issue"
area: Navigation motion implementation
date: 2026-08-30
session_context: Improving smooth single-page navigation on an Astro service website
parked_until:
resolved:
resolution:
reference:
---

**Issue:** A programmatic anchor tween and a normal scroll spy can compete during the first frames of travel, briefly restoring the section being left. Separately, positioning a moving navigation pill from an anchor's `offsetLeft` can return zero when the anchor's offset parent is its list item rather than the navigation list.

**Suggested improvement:** Add a single-page navigation recipe that temporarily locks the intended active destination while a programmatic tween runs, releases the lock on completion or user interruption, and measures indicator geometry using link and list bounding-rectangle differences. Verify the interaction at multiple timestamps rather than checking only its final resting state.

**Principle:** Coordinated motion needs one state owner during transitions, geometry measured in a shared coordinate system, and time-sampled tests that can expose intermediate-state regressions hidden by a correct final frame.
