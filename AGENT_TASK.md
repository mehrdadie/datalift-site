# Agent Task — Navigation & Responsive Header

Work only on branch `agent/navigation-responsive`.

## Objective
Fix all navigation, dropdown, mobile-header, and horizontal-overflow issues across the Datalift website.

## Requirements
- Desktop dropdowns open reliably and stay inside the viewport.
- Dropdown parent items should behave as dropdown triggers first; avoid accidental parent-page navigation when opening a menu.
- Every navbar destination should point to a real page route; use internal links correctly.
- Mobile header and menu must be fully usable on touch devices.
- Mobile dropdowns must open/close correctly.
- The mobile menu must not become an unintended full-width panel.
- Eliminate horizontal scrolling on desktop and mobile caused by nav/header/dropdowns.
- Preserve existing visual language unless a change is required for usability.
- Add keyboard accessibility where practical: focus states, Escape close, sensible tab order.

## Do Not Touch
- Hero redesign/motion.
- Main page copy/content except link labels strictly required for navigation.
- Unrelated page sections.

## QA
Test common widths including 1440, 1024, 768, 390, and 360px. Run build/lint/typecheck and report changed files and remaining risks.