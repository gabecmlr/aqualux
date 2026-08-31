---
id: 2
title: Check content against rounded clipping masks
status: open
type: open-source
skill:
  - ui-ux-pro-max
  - ui-styling
proposes_skill: []
siblings_checked: "No registry; scanned UI/design skills: ui-ux-pro-max, ui-styling, design-system, design, banner-design - responsive overflow guidance applies to ui-ux-pro-max and ui-styling; the others are not implementation-focused for this clipping check"
area: Responsive layout and overflow validation
date: 2026-08-30
session_context: Correcting a desktop-only badge clipped by a rounded overflow-hidden illustration while mobile remained correct
parked_until:
resolved:
resolution:
reference:
---

**Issue:** A badge's rectangular bounds were inside its container, but the badge was still visibly clipped because the parent used a large rounded border radius with `overflow: hidden`. The issue appeared only at the desktop shape; the mobile shape rendered correctly.

**Suggested improvement:** In the responsive layout and overflow checklist, add a check for children placed near non-rectangular clipping boundaries. Validate the visible mask at each breakpoint, not only `getBoundingClientRect()` containment or page-level horizontal overflow. For automated checks, pair geometry assertions with a targeted rendered screenshot when a parent combines `border-radius` and `overflow: hidden`.

**Principle:** Rectangular containment does not guarantee visual containment inside a rounded or otherwise masked surface; responsive UI verification must account for the actual clipping shape.
