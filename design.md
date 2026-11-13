# design.md: Hourani Enterprises Website Concept

Design source of truth for the three-site concept. Read this before changing any look, copy or layout. Values below were taken from the artboards in the canvas, so if an artboard and this file disagree, the artboard wins; then fix this file.

Canvas: https://claude.ai/artifact/CDw8uFaPQrM5NrV4Cye79Z (user's copy of the shared original, https://claude.ai/artifact/WQBBWnQ8eZdGaEhmmfpwJd)

---

## 1. What this is

A website concept for **Hourani Enterprises**, a Bankstown (Sydney) company that runs two registered NDIS services behind one team:

| Site | Role | Domain | Accent |
|---|---|---|---|
| **Hourani Enterprises** (parent) | Hub that routes people to the right service | n/a | Both blues and purples |
| **JobsRUs** | NDIS employment support: SLES, job coaching, work trials, Saturday group activities, emergency respite, Module 2A behaviour support | jobsrus.com.au | Blue |
| **Enaya** (عناية, Arabic for "care") | Personal care, daily living, life skills, community outings, respite rooms. Formerly CareRUs | enaya.com.au | Purple |

Tagline for the parent: **"Support for work and for home."**
JobsRUs: **"Your goal, our target."** Enaya: **"Care, on your terms."** / **"The meaning of care."**

Shared facts used across sites: phone **0450 518 508**; office Suite 902, L9, 66-72 Rickard Rd, Bankstown NSW 2200; every worker passes **3-step screening**; one referral reaches both teams.

## 2. Audience and tone

Participants with disability, their families and carers, referrers (support coordinators, plan managers), and job seekers who want to work for the company.

- Plain, warm, direct. Short sentences. No jargon without a one-line explanation.
- Culturally aware. Enaya is shaped around routines and culture, and Arabic appears on purpose (see typography).
- Never clinical, never charity-style. Participants are the point, not the problem.
- Accessibility is the brand, not a checklist. A dedicated Accessibility page exists on JobsRUs.

## 3. Brand tokens

### Type
- **Headings: Funnel Display**, weight 600, tight tracking. Variable 400 to 800 is loaded.
- **Body: Atkinson Hyperlegible Next**, 17px base, 20px when the "large text" toggle is on. Fallback `'Atkinson Hyperlegible', system-ui, sans-serif`. Chosen for low-vision readers: clear shapes for 1/l/I and 0/O.
- **Arabic: Noto Kufi Arabic**, only for the Enaya wordmark عناية and other deliberate Arabic. Weights 500 to 700.
- Google Fonts `<link>` goes in `<helmet>`; no other network use.

### Colour

| Token | Hex | Use |
|---|---|---|
| Night (parent) | `#0D1324` | Hero and dark bands on the parent site |
| JobsRUs night | `#0A1030` | Dark bands on JobsRUs (`#0F1640`, `#141C55` for layers) |
| JobsRUs blue | `#2F3D9A` | Primary, links on light |
| JobsRUs light blue | `#6E7CF0`, `#A9B3FF` | Accents and focus ring on dark |
| JobsRUs tints | `#F3F4FA`, `#E7E9F6`, `#DCE0FA`, `#C8CDEA` | Light surfaces and borders |
| Enaya purple | `#8F53A1` | Primary. Darker `#7A3F8E`, `#6E3C80`, `#5E2F6E` for links on light |
| Enaya night | `#1A0F24` (`#26142F` layer) | Dark bands on Enaya |
| Enaya tints | `#F7F1F8`, `#F3E6F6`, `#E6CDEE`, `#DCC9E2` | Light surfaces and borders |
| Neutrals | `#111827` text, `#4B5563` secondary, `#9CA3AF`, `#C9CFDC`, `#E5E7EB`, `#F4F5F8`, `#FFFFFF` | Parent site and shared |

Rules:
- Each service keeps its own colour. Don't put purple on JobsRUs pages or blue on Enaya pages.
- The **family blend** (blue into purple) is allowed in only two places: the Careers band and the giant footer wordmark on the parent site.
- Text contrast 4.5:1 minimum (3:1 at 24px and up). Check small grey labels; `#9CA3AF` on white fails and is for decoration only.
- Colours that must be told apart should also differ in lightness, not hue alone.

### Shape and elements
- Pill buttons (`border-radius: 999px`), outline variant, small tags.
- Panels **32px** radius, inner cards **18px**, bento tiles 28px. Enaya uses slightly softer 24px cards and 40 to 48px hero shapes.
- "Glass on dark": translucent panels over dark bands.
- Soft **aurora glows and grain on dark sections only**.

### Motion
- One load animation in the hero (`rise`, 48px up and fade). Everything else is still, apart from the suburb ticker marquee and the slow `drift` glow.
- Always honour `@media (prefers-reduced-motion: reduce)` by turning animations and transitions off.

### Focus and links
- Visible focus on everything: `outline: 3px solid` in `#A9B3FF` (JobsRUs/parent) or `#E6CDEE` (Enaya), offset 3px. Inside edit mode: `#6E7CF0`.
- Links underline with 3px offset. Link colour is brand colour on light, with a darker hover.

## 4. Page structure

### Hourani Enterprises homepage (`Main`, `Mobile`, `MobileMenu`, `Brand`)
1. Hero: "Support for work and for home.", team photo, guided picker ("What do you need help with?": a job / support at home or in the community / I'm referring a participant)
2. Services bento: JobsRUs, Enaya and proof tiles
3. Suburb ticker: 12 service areas
4. HERO values as outlined giant letters
5. Culture: values-led, open to all
6. Referrals: 3-step timeline
7. Video rail: Instagram reels, swipe sideways
8. Careers band and footer with giant wordmark

Nav: Services, Referrals, About, Careers, Contact, primary button **Make a referral**.

### JobsRUs (`JobsRUs`, `JR-*`, `JRNav`, `JRFooter`)
Home, About, NDIS services, Service template (10 pages), Emergency respite, Module 2A, Locations, Office template (4 pages), Suburb template (12 pages), Team, Contact, Work with us, Job portal, NDIS pricing, Policies and procedures, Accessibility. Nav `current` values: home, services, locations, team, about, contact, work.
Locations seen: Bankstown, Liverpool, Cumberland, Chatswood, South Sydney, Randwick.
Home picker: "Where are you starting from?" returns a suggested pathway. Four pathways: SLES (school leavers), Specialised Employment Assistance (starts with Discovery), Employment Support Officer (1:1 coaching), Saturday group activities.

### Enaya (`Enaya`, `EN-*`, `ENNav`, `ENFooter`)
Home, About us, Services, Team, Respite rooms, Room template (one per room), Contact us. Home picker: "What would help most right now?". Values: Honesty, Empathy, Reliability, Open-mindedness. Team cards show name, role, languages spoken, CPI trained. Pitch: a dedicated senior support worker from day one.

### Edit mode (`CMSEditor`, `EN-Admin`, `ENP-10`, `JRP-19`)
Concept for staff who are not technical: log in, click any text to change it, "Change photo" to swap images, Publish. Includes remove-with-confirmation and "+ Add team member". Dashed outline on hover marks editable text.

### Client PDFs
`ENP-*` (Enaya) and `JRP-*` (JobsRUs) are print-style, one-board-per-page exports of the same designs, sized to full page height, with a cover (`-00-Cover`) and a confirm page (`-99-Confirm`). They duplicate content from the live boards, so **a change to a page must be made in both the board and its PDF twin**.

## 5. Content rules

- No lorem ipsum, no invented statistics, testimonials or prices. If a fact is missing, use a bracketed placeholder such as `[YOUR PRICE]`.
- Photos are labelled placeholders like `[Photo: participant on a work trial]` until real images are supplied. Do not swap in stock imagery or emoji.
- Icons: inline stroke SVG, never emoji.
- Australian English (programme/organisation as the client uses; "behaviour", "colour").
- NDIS terms (SLES, BMP, Module 2A) get a short plain-language gloss on first use.

## 6. Accessibility baseline (non-negotiable)

- Real `<button>`, `<a href>`, `<input>` + `<label>`, even in static mockups. No clickable `div` or `span`.
- Touch targets at least 44px. Print body text at least 12pt.
- Icon-only buttons get `aria-label`. Decorative SVG is `aria-hidden="true"`; meaningful SVG gets `role="img"` and `aria-label`.
- A "large text" toggle exists in the JobsRUs nav (`large`, `setNormal`, `setLarge`). Keep it working when you touch the nav.
- Pages must work at phone width: menus stack, toolbars wrap, wide tables scroll in their own box.
- Respect reduced motion.

## 7. Do not

- No gradient-wash heroes, left-border accent cards or other generic AI tropes.
- Don't invent a new colour or font; extend the tables above first.
- Don't mix brands on one page beyond the cross-links that already exist (for example "Part of Hourani Enterprises, alongside JobsRUs").
- Don't use another company's proprietary design.
