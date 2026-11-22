# Portfolio design audit

Measured from the live design reference before implementation. The audit records visual and interaction characteristics only.

| Area | Observed design |
| --- | --- |
| Grid | A 1,240 px container with 24 px side padding. Hero columns split roughly 58/42, about 36/64, and contact 57/43. Project, skill, research, and achievement cards use equal two-column grids. Work history uses a 280 px date column beside a flexible detail column. |
| Dark theme | Canvas `#09090b`, surfaces `#141417` and `#1f1f24`, foreground and rules `#f5f5f5`, secondary text `#a1a1aa`. Accents `#00e5ff`, `#9d4edd`, `#00ff9d`, `#ffe500`, `#ff6b35`, and `#ff2d55`. |
| Light theme | Canvas `#f0ede6`, surfaces `#e8e4db` and `#ffffff`, foreground and rules `#09090b`, secondary text `#52525b`. Navigation inherits a translucent surface in each theme. |
| Type | Bebas Neue display, Space Grotesk body, Space Mono labels. At a roughly 1,460 px viewport the hero title is about 118 px with a 112 px line height, section headings 96 px, project titles 45 px, hero body 18 px, typical body 16 px, and compact controls 11–13 px. |
| Spacing and rules | 120 px desktop section spacing, 80 × 48 px hero copy padding, 48–56 px about panels, 32 px project card gutters, 80 px contact panels. Square corners, 3 px structural rules, 2 px small controls, and 6–12 px solid offset shadows. |
| Hero | Oversized name in a framed panel with rotating role text, a blinking block caret, a star canvas, rotated skill tags, and a 2 × 2 stat grid. The status indicator pulses. |
| Card interactions | Buttons lift 2–4 px and extend the offset shadow. Tags rotate, scale, or move when hovered. Cards change surface tones and reveal edge accents. Portrait hover lifts its frame and gently scales the image. |
| Scroll behavior | Section headings and panels fade and translate in over roughly 800 ms with an ease-out curve. A skills marquee loops over 25 seconds. The reference uses an enhanced pointer on desktop and a fixed back-to-top control. |
| Navigation and footer | A fixed, roughly 75 px header with a scroll state, section anchors, theme control, resume action, and a collapsible menu. Contact uses a full-width accent surface and a two-column form layout. The footer uses a heavy rule, compact monospaced text, and stacked alignment on narrow screens. |
| Breakpoints | At 1,024 px the hero, about, contact, and work history grids collapse and the custom pointer is removed. Projects become one column at 992 px. At 768 px skill and achievement grids stack, panels tighten, and the hamburger and stacked footer appear. |

The implementation uses an original full-width typographic masthead, portrait and summary strip, olive-black surfaces, lime and coral accents, Barlow Condensed and DM Sans typography, and its own responsive grid. It retains the common interaction patterns of theme switching, scroll reveals, skill badges, section navigation, and a back-to-top control.
