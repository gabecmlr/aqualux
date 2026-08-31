---
id: 3
title: Separate primary and confirmation email outcomes
status: open
type: open-source
skill: []
proposes_skill: [transactional-form-email-delivery]
siblings_checked: none - no skill family registry or existing candidate covers transactional form email delivery
area: delivery semantics and SMTP diagnostics
date: 2026-08-30
session_context: Repairing a dual-email quote form after an SMTP provider rejected one message stage
parked_until:
resolved:
resolution:
reference:
---

**Issue:** A form endpoint sent a required internal notification and an optional customer confirmation inside one catch block. A rejection at either stage produced the same error, obscured which operation failed, and risked duplicate internal notifications when the user retried. Provider-sensitive headers populated from submitted data also made the primary delivery less reliable.

**Suggested improvement:** A transactional form-email skill should classify each message as required or auxiliary, isolate their error handling, return a partial-success contract when only an auxiliary message fails, log the precise failed stage, and verify provider compatibility before placing submitted addresses in SMTP headers.

**Principle:** Multi-message workflows must preserve and report the outcome of each irreversible side effect independently; an auxiliary failure must not erase a completed primary success or encourage the user to repeat it.
