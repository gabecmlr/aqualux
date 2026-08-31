---
id: 4
title: Build branded email for host-independent rendering
status: open
type: open-source
skill: []
proposes_skill: [transactional-form-email-delivery]
siblings_checked: none - no skill family registry; reuses the existing transactional-form-email-delivery candidate
area: HTML email design and asset delivery
date: 2026-08-30
session_context: Converting a plain transactional acknowledgement into a branded responsive email before production hosting existed
parked_until:
resolved:
resolution:
reference:
---

**Issue:** A transactional email needed to match an existing web brand before a stable public asset URL existed. Referencing a local or future website URL would break the logo, while copying browser CSS directly would render inconsistently across email clients. Submitted values also needed safe interpolation into HTML.

**Suggested improvement:** The transactional-form-email-delivery skill should cover brand-token extraction, table-based layouts with inline styles, HTML escaping for submitted values, CID-embedded brand assets when public hosting is unavailable, monitored-reply copy, plain-text fallbacks, and verification of both the built MIME markers and a real SMTP delivery.

**Principle:** Branded transactional email should be self-contained, safely templated and readable without HTML; visual polish is only reliable when assets and fallbacks survive the recipient's mail client independently of the website runtime.
