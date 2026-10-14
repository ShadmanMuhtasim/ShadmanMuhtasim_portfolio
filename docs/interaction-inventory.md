# Portfolio interaction inventory

Recorded 2026-10-15. Correction baseline: c323733 (portfolio-interactive); interactive reference: d381f79, before commits 0b856f7 / 984e00d / c323733. Original files were inspected with git show, rather than inferred from appearance. Working changes carried into the correction are backed up under .audit.local/interactive-20261015-023938; no production branch, Netlify configuration or remote state is changed.

## Original behavior and correction contract

| Interaction | Actual reference implementation | Keep and refine |
|---|---|---|
| I1 Navigation | Rounded link container, active fill, IntersectionObserver, six links, smooth scroll; mobile state closed on link click. Desktop started at 768px but mobile ended at 640px, leaving a navigation gap. Click prevention omitted URL fragments. | Floating pill, observer-selected fill, real fragment anchors, offset scrolling, matching measured collapse threshold, current Escape/outside/resize dismissal and ARIA retained. |
| I2 Theme | Two independently mounted switches toggled .dark and stored theme; saved light worked, otherwise dark. Storage was unguarded and light: utilities were undefined. | One synchronized control, guarded persistence, pre-paint preference initialization, complete dark/light styles, icon feedback without a color flash. |
| I3 Hero | Three desktop zones: name/role, portrait, about/actions; watermark, portrait hover enlargement, Framer entrance motion, image-error initials and continuously bouncing clickable scroll hint. | Three zones, circular photo, factual copy/links, quiet static watermark, bounded fine-pointer tilt, accessible static first-scroll hint and at most one short entrance. |
| I4 Headers | Monospace index, title and extended rule. | Preserve that pattern; shared one-time reveal. |
| I5 Skills | All plus six category filters, actual item counts, selected indicator and Framer item entry/reflow; category icons/rainbow dots. No tab semantics or keyboard navigation. | True counted tabs with roving keys, restrained filter feedback, flat chips/ruled groups; all skills in initial/no-JS content. |
| I6 Projects | Genuine stateful carousel with arrows, dots and mobile drag; responsive 1/2/3-card intent. Transform omitted gap width and resize did not clamp the index. Details opened a body-locking animated custom modal with no focus trap/restoration. | Native scroll-snap, touch/keyboard, one-card controls and actual end state, peek, wrapped context and pinned actions; retain corrected native modal/focus restoration. Native inline details remain for no JS. |
| I7 About | Three numbered pillar cards, separate icon colors, check-circle bullets, once-on-view stagger. | Three cards, one icon tint, exact twelve detail strings and modest shared reveal. |
| I8 Education | Main degree card, two school cards and language panel with GPA/level badges and once-on-view reveal. | Restore layout with one badge treatment; preserve every value and newly visible seven coursework entries. |
| I9 Contact/footer | Contact card, availability text, mail/social links; clipboard success changed label for 2500ms, console-only errors, overlapping timers. Footer button smooth-scrolled but did not restore focus. | Plain authored status, full wrapping email, guarded clipboard plus fallback, 2-second live confirmation, observed back-to-top visibility and heading focus. |
| I10 Feedback | Link/button hover, scaling icons/cards and changing borders; inconsistent focus/light styles. | Unified focus ring, 1px press, <=3px lift and <=2px arrow nudge, fine-hover gating, one accent. |
| I11 Reveal | Framer once-on-view opacity/vertical motion across education, pillars/contact; no shared no-JS resilience. | One observer utility, <=12px/350ms, <=5 staggered items; initial/above-fold/no-JS content remains visible. |

## Factual baseline checklist

- [x] Four project records: Karigor, LearnifyAI, CarriGrow and CampusOS, including contexts, roles, versions, taglines, summaries, twelve implementation bullets, full/surface stacks and all source/demo URLs.
- [x] 39 skills in six categories, including all AI/LLM entries; no new skill or proficiency claims.
- [x] AUST degree, Dhaka location, authored sixth-semester/2027 text and CGPA 3.135 / 4.00.
- [x] HSC: Birshrestha Noor Mohammad Public College, 2022, GPA 5.00; SSC: Faizur Rahman Ideal Institute, 2020, GPA 5.00.
- [x] Bangla Native, English Professional, Hindi Professional; seven coursework entries.
- [x] Three engineering pillars and all twelve technical detail strings.
- [x] Shadman Muhtasim, authored role and availability, theshadman007@gmail.com, original GitHub/LinkedIn URLs, /resume.pdf, six section destinations and source portrait.

Exact source and rendered inventories, four baseline screenshots and initial status/commit are stored in the ignored audit directory. projects.ts and skills.ts are the factual source; they must remain unchanged.

## Repository conventions

README and Oxlint configuration inspected. No AGENTS.md, CLAUDE.md or dedicated formatter configuration was found. Retain React/TypeScript/Vite/Tailwind; no runtime dependency additions, no explanatory code comments. npm test is currently an explicit placeholder; browser interaction checks must be recorded separately rather than called a repository unit suite.

## Evidence state

Phase 1 safety/inventory complete. Interaction restoration and correction validation are pending. A prior flat-pass Lighthouse score or viewport check does not verify the new interactive behavior. No push, merge or deployment is authorized.