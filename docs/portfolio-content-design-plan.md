# Kael Builds — Content & Design Plan

**Status:** Planning  
**Repository:** https://github.com/ace866678/kael-builds  
**Working brand:** Kael Builds  
**Tagline:** Ideas into real projects.  
**Goal:** Present a credible, memorable portfolio for a developer who builds web applications, research tools, and practical technology projects.

> This is a plan, not a claim that the website or every listed feature is already live. Verify all project statuses and links before launch.

## 1. Positioning and audience

Show the work, explain the decisions, and be transparent about what is complete versus in progress. The portfolio should feel polished and intentional, but grounded in real projects rather than exaggerated claims.

**Primary audiences:** recruiters and internship reviewers; potential collaborators; clients or small teams evaluating web application and prototype work.

**Brand voice:** clear, curious, practical, and honest. Prefer specific descriptions of the problem, personal contribution, trade-offs, and evidence over generic claims such as “expert” or “world-class.”

## 2. Hero copy

**Eyebrow:** DEVELOPER · BUILDER · RESEARCHER

**Headline:** I build digital tools for real-world problems.

**Supporting copy:** From web applications and research workflows to connected-system prototypes, I turn ideas into practical experiences—and document what I learn along the way.

**Primary CTA:** Explore my work  
**Secondary CTA:** About me  
**Optional CTA:** View résumé (add only when a current PDF is ready)

**Capability line:** Web apps / Research tools / IoT prototypes

Avoid unverified job titles, years of experience, client history, metrics, or production-readiness claims.

## 3. Visual design system

### Direction

A modern editorial/technical identity: readable typography, controlled large headlines, generous whitespace, crisp borders, purposeful motion, and project imagery that does most of the storytelling. Use a dark hero with a light overall reading surface so project descriptions remain comfortable to read.

### Color tokens

| Token | Hex | Use |
|---|---|---|
| Ink / charcoal | #101820 | Hero, footer, dark panels |
| Warm white | #F6F7F4 | Main page background |
| Pure white | #FFFFFF | Cards and image surfaces |
| Accent lime | #D5F36A | Primary CTA and small highlights |
| Body gray | #4B5563 | Paragraph text on light surfaces |
| Muted gray | #AAB5BD | Secondary text on dark surfaces |
| Border | #DCE1DC | Dividers and card outlines |

Use lime sparingly. Verify contrast during implementation; important text must remain readable.

### Typography and components

- Headings: Space Grotesk or a similar geometric sans.
- Body/UI: Inter or a system sans-serif fallback.
- Optional short technical labels: JetBrains Mono.
- Content max-width: approximately 1120–1200px.
- Desktop side padding: 40–56px; tablet: 24px; mobile: 18–20px.
- Section spacing: 88–120px on desktop, 56–72px on mobile.
- Cards: subtle borders, 12–18px radii, restrained hover lift, no heavy shadows.
- Icons: Lucide React, used sparingly and consistently.
- Motion: short opacity/transform transitions; respect reduced-motion preferences. Avoid scroll hijacking or animations that delay access to content.

## 4. Site map and section content

Launch as a responsive single-page site. Add dedicated project detail pages when case studies are ready.

### A. Navigation

Left: wordmark **Kael Builds**  
Links: Work · About · Contact  
CTA: Let’s talk

On mobile, use a compact header and accessible menu. Keep contact easy to find.

### B. Hero

Use the approved headline and supporting copy above. Pair text with a restrained visual: a stack of genuine project screenshots, a project preview, or a simple technical diagram. Do not present a fake dashboard as a live product.

On mobile, place headline and CTAs first, visual second. Avoid oversized decorations that push useful content far below the fold.

### C. Selected work

**Section title:** Selected work  
**Intro:** A few projects where I explore useful software, research workflows, and connected systems.

Use three featured projects initially. Each card should include:
- Project name and one-sentence purpose.
- Category and verified status: Prototype, In progress, or Live.
- A genuine screenshot, photograph, or labeled system diagram.
- Up to three relevant technologies.
- “View case study” only when a case-study page exists.
- “Source code” and “Live demo” only when destinations are available and safe to share.

Do not invent project metrics, user counts, uptime, test results, or production readiness.

### D. Skills and approach

**Heading:** How I work

Organize capabilities into three groups, rather than a long wall of logos:

- **Web development:** React, TypeScript, Vite, responsive UI, accessible components.
- **Backend and integration:** Firebase and/or Supabase only where actually used in a featured project; APIs and authentication when evidenced.
- **Research and connected systems:** problem definition, system diagrams, prototyping, testing, and documentation.

Add a compact tools line for Git, GitHub, Vercel, and relevant design/testing tools. Keep every skill tied to demonstrable experience.

### E. Process

**Heading:** From idea to working prototype

1. Understand the user and problem.
2. Map the workflow and choose a suitable architecture.
3. Build the smallest useful version.
4. Test it, document trade-offs, and improve from feedback.

Use a short visual timeline, not a long essay.

### F. About

**Heading:** A builder who learns by making

**Draft copy:** “I enjoy turning ideas into working software and exploring how technology can solve practical problems. My work spans web applications, research projects, and connected-system prototypes. I care about clear interfaces, understanding how the pieces fit together, and being honest about what still needs improvement.”

Personalize with your actual education/background, current goals, and preferred contact details before launch. Do not publish personal information you do not want public.

### G. Contact

**Heading:** Have a project or an idea to explore?

**Copy:** “I’m open to thoughtful collaborations, feedback, and opportunities to keep building.”

Use a real email address or a hosted form such as Formspree. Include GitHub and optionally LinkedIn. If using a form, include visible success/error states, protect against spam, and do not expose service secrets in frontend code.

### H. Footer

Wordmark, current year, GitHub link, email/contact link, and a “Built with React and TypeScript” note once the stack is confirmed. Avoid fake availability indicators.

## 5. Featured projects and evidence plan

Project statuses below are provisional. Confirm what works before publishing.

### Project 1 — Research Room

**Role:** Featured web app, if this is the project you want to present as your collaborative research workspace.

**Draft card copy:** “A research workspace designed to help students and small groups organize their work and collaborate in one place.”

**Show only if implemented:** authentication, research workspace/dashboard, collaboration workflow, file/source management, responsive views, and Firebase integration. Select only the features that can be demonstrated now.

**Evidence to collect:**
- Desktop screenshot of the primary workspace using sample/demo data.
- Mobile screenshot of the responsive experience.
- Sign-in/onboarding screenshot only if useful and safe.
- Simple architecture diagram showing frontend, Firebase services, and data flow.
- Public repository URL and working production URL, if available.

**Pending:** I could not identify the matching repository or production URL from the repository inventory checked for this plan. Add verified links before launch. Never include API keys, credentials, real student records, or private research materials in screenshots.

### Project 2 — IoT-Based Crash Detection and Emergency Alert System

**Role:** Research/IoT case study showing problem-solving beyond web UI.

**Draft card copy:** “A research project exploring how an IoT-based system could detect a crash and send emergency alerts for motorcycle and tricycle drivers in Kalibo.”

Use “exploring,” “prototype,” or “in progress” until hardware and alert behavior are actually tested. Do not imply the system is certified or safe for real emergency use.

**Evidence to collect:**
- Actual prototype photograph, if one exists.
- System block diagram: sensors/controller → detection logic → communication/location module → alert recipient.
- Labeled photos of the components used.
- Test setup and results, with methodology and limitations.
- Research document or shareable source-code URL, if available.

**Pending:** No matching public source repository or project demo was identified in the repository inventory checked for this plan. Do not substitute stock IoT imagery for a real prototype unless it is clearly labeled an illustration.

### Project 3 — Alvora

**Verified source repository:** https://github.com/ace866678/alvora

**Draft card copy:** “A Philippines-first opportunity discovery platform concept for scholarships, internships, hackathons, competitions, grants, and technology events.”

The repository README describes Alvora as an early prototype with illustrative demo listings. Be explicit that listings are not a verified live feed unless this has since changed.

**Evidence to collect:**
- Current homepage/catalogue screenshot.
- Search/filter or category browsing screenshot, if implemented.
- Listing detail view screenshot, if implemented.
- Mobile layout screenshot.
- Verified live deployment URL, if one exists.

Reopen the project and confirm the current feature state before making claims. Link the GitHub repository now; add a demo link only after validating the deployed version.

### Optional project — StudyVault

**Repository:** https://github.com/ace866678/StudyVault  
**Visibility:** Private in the repository inventory checked for this plan.

This may demonstrate file management and collaboration, but do not expose the private repository or link to protected source. Before featuring it, either make a reviewed, sanitized demo repository public, publish a public demo using safe sample data, or use anonymized screenshots while clearly stating that the source is private.

Do not capture real messages, profiles, class information, uploaded files, tokens, or user identifiers.

### Optional project — MCL-server

**Public repository:** https://github.com/ace866678/MCL-server

This is a possible secondary project if you want to show infrastructure and systems work, rather than limiting the portfolio to front-end projects. It may be better as a concise engineering case study than a large homepage card.

Collect a high-level architecture diagram and sanitized screenshots. Check the repository for operational details that should not be highlighted before publishing.

### Projects not yet verified

SmartHatch and any other project discussed elsewhere should be added only after its current repository, actual screenshots, current status, and shareable links are confirmed. A concept or plan alone does not make a project a completed product.

## 6. Screenshot and link collection checklist

Create the folder public/images/projects/ and keep portfolio-ready assets there. Prefer genuine captures over decorative stock imagery.

For each selected project, collect:
- [ ] One clean desktop screenshot (ideally 1440px wide or larger).
- [ ] One mobile screenshot (roughly 390px wide).
- [ ] One feature detail, architecture, or prototype image.
- [ ] Short alt text for each meaningful image.
- [ ] Exact GitHub repository URL.
- [ ] Tested live demo URL, if available.
- [ ] One-sentence description and verified status.
- [ ] Technologies actually used in that project.
- [ ] Permission to share the material and a check for personal/sensitive data.

### Asset quality rules

- Use demo accounts and sample data.
- Crop out browser tabs, personal notifications, unrelated desktop content, and private identifiers.
- Never publish .env values, service-account credentials, access tokens, API secrets, passwords, or private endpoints.
- Compress screenshots to WebP or optimized PNG and provide responsive sizes where useful.
- Write alt text describing what an image communicates, not keyword lists.
- Label conceptual diagrams and mockups as concepts; do not imply they are live product screenshots.

## 7. Initial mobile layout

Mobile is not a shrunk desktop design. Build and review at approximately 360px, 390px, and 430px widths.

1. Compact header with wordmark and accessible menu.
2. Eyebrow, headline, short paragraph, and stacked/full-width CTAs.
3. One featured project per row in a single-column layout.
4. Skill groups stacked vertically with readable line lengths.
5. Process steps as a simple vertical timeline.
6. About paragraph and résumé link, if available.
7. Contact CTA and footer with comfortable tap spacing.

### Responsive behavior

- Use one column below tablet width; two project columns on tablet; three only on wide desktop if cards remain readable.
- Avoid horizontal scrolling and fixed-width content.
- Use at least 44px targets for important touch controls.
- Keep mobile body text around 16–18px with comfortable line height.
- Ensure links, focus indicators, and buttons work with keyboard and screen readers.
- Respect prefers-reduced-motion.
- Lazy-load images below the fold and avoid loading multiple huge screenshots at startup.

## 8. Recommended technology stack

| Area | Recommendation | Reason |
|---|---|---|
| Framework | React + TypeScript | Familiar, component-based, suitable for this portfolio |
| Build tool | Vite | Simple, fast frontend build |
| Styling | Tailwind CSS, or the repo's established CSS approach | Consistent responsive styles; choose one, not both |
| Icons | Lucide React | Consistent, lightweight icon language |
| Animation | CSS transitions first; Motion only if needed | Keeps the site quick and accessible |
| Version control | Git + GitHub | Reviewable history and project documentation |
| Hosting | Vercel | Connected Git deployments and preview builds |
| Contact | Email link or Formspree | No custom backend required initially |
| Quality checks | Lighthouse, browser DevTools, keyboard/mobile testing | Performance, accessibility, responsive QA |
| Design planning | Figma, optional | Useful for wireframes and asset planning |

Start as a static frontend. No Firebase, Supabase, database, login, analytics package, or admin dashboard is needed for version one. Add services only for a clear requirement. Keep environment secrets server-side and out of the repository.

## 9. Search and sharing basics

- Page title: **Kael Builds — Developer Portfolio**
- Meta description: **Projects in web development, research tools, and connected systems—showcasing the problem, implementation, and lessons from each build.**
- Add a favicon and social sharing image.
- Use semantic headings, meaningful link labels, and descriptive image alt text.
- Add a sitemap and robots file when the page is ready.
- Register with Google Search Console after deployment.
- Share project-specific URLs when dedicated case-study pages exist.

## 10. Build order and acceptance criteria

### Phase 1 — Plan content and assets
- [ ] Confirm public brand/display name.
- [ ] Confirm which three projects will be featured.
- [ ] Verify each project's actual status.
- [ ] Collect screenshots and exact project/demo URLs.
- [ ] Prepare a résumé only if there is a current version to share.

### Phase 2 — Design the core page
- [ ] Establish color and typography tokens.
- [ ] Sketch desktop and mobile wireframes.
- [ ] Build reusable Header, Button, ProjectCard, SectionHeading, and Footer components.
- [ ] Confirm readable contrast and clear keyboard focus.

### Phase 3 — Build and publish
- [ ] Implement hero, work, skills, process, about, and contact.
- [ ] Add only verified project claims and working links.
- [ ] Connect GitHub to Vercel.
- [ ] Check the production build and every link.

### Phase 4 — QA and refine
- [ ] Test 360px, 390px, 430px, tablet, and desktop widths.
- [ ] Run Lighthouse and fix critical accessibility/performance findings.
- [ ] Check reduced-motion behavior and keyboard navigation.
- [ ] Confirm images are optimized and screenshot data is safe.
- [ ] Verify metadata, favicon, résumé, and contact destination.
- [ ] Review every project card against the actual project before launch.

**Version-one launch definition:** The site is readable and usable on mobile and desktop, all featured claims are evidence-backed, at least two project case studies contain genuine material, every visible link works, contact is functional, and the Vercel production build passes.

## 11. Current known URLs inventory

| Item | URL/status | Action |
|---|---|---|
| Portfolio repository | https://github.com/ace866678/kael-builds | Empty before this plan; initialize project direction here |
| Alvora source | https://github.com/ace866678/alvora | Public repo found; verify state and live deployment |
| MCL-server source | https://github.com/ace866678/MCL-server | Public repo found; optional case study |
| StudyVault source | https://github.com/ace866678/StudyVault | Private; don't expose source publicly without an intentional sharing decision |
| Research Room source/demo | Not confirmed in inspected repository inventory | Locate exact repository and production URL |
| IoT crash-detection source/demo | Not confirmed in inspected repository inventory | Gather prototype evidence, diagrams, and shareable source |
| SmartHatch source/demo | Not confirmed in inspected repository inventory | Add after repository, status, and imagery are verified |

---

**Guiding rule:** Be visually ambitious, but factually modest. The portfolio should make real work look clear and compelling—not make unfinished work look finished.
