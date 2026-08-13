# Agent Task — QA, Accessibility & Performance

Work only on branch `agent/qa-performance`.

## Objective
Audit and improve the current Datalift website without redesigning it.

## Scope
- Find and fix horizontal overflow across desktop/tablet/mobile.
- Check responsive layout problems, spacing, clipping, stacking, and viewport issues.
- Verify keyboard navigation, visible focus, semantic landmarks, labels, contrast, and reduced-motion behavior.
- Check broken internal links and route consistency.
- Improve obvious performance issues: oversized assets, unnecessary client work, layout shift, expensive animation, and avoidable render cost.
- Review basic technical SEO: titles/meta, sitemap/robots, canonical consistency, headings, alt text, structured data only where already appropriate.
- Do not make subjective visual redesigns.

## Coordination rule
Do not rewrite the hero, navbar behavior, or body copy unless fixing an objective bug. Those areas are owned by parallel branches.

## QA output
Run build/lint/typecheck/tests available in the repo. Document every issue found, what was fixed, what remains, and any merge conflicts likely with the other agent branches.