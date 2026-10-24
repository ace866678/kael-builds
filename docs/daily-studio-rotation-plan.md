# Kael Builds Daily Studio Loop

**Plan status:** Ready for the next run  
**Next run:** Sunday, 25 October 2026  
**Timezone:** Asia/Manila (UTC+8)  
**Facebook destination:** Kael Builds only — Page ID `102170568818838`  
**Public project link allowed in captions and portfolio copy:** https://kael-builds.vercel.app

This is an operating plan, not proof that future graphics or posts have already been produced. At the next run, check actual permissions, Pollo credits, available assets, Page state, and build results before reporting completion.

## Non-negotiable publishing rules

- Before any post, inspect recent published feed entries and all scheduled/unpublished entries for this Page. Match the local calendar date and slot hashtag; skip an existing slot rather than duplicate it.
- Every public-facing caption, graphic text, showcase description, or promotional summary may use only https://kael-builds.vercel.app as a project/reference link. Do not add GitHub URLs, direct asset/CDN links, source URLs, research citations, short links, QR codes, or other project links.
- Research primary documentation privately to verify claims. Translate learnings into plain-language captions without displaying source URLs.
- Use photo-post actions with an actual image attachment. No text-only substitution and no claim of a successful image generation unless Pollo returns a successful asset.
- Use only the Kael Builds Page ID above. Never publish this workflow to another Page or a personal profile.
- Do not invent performance metrics, user outcomes, field tests, client work, or live-product capabilities. Label mockups, generated artwork, and concept studies honestly.
- If permission, asset retrieval, credit, posting, scheduling, or validation fails, record the exact blocker and stop the affected step safely. Never delete/recreate a post just to change its caption when edits are not permitted.

## The repeating loop

1. **Review the plan and last run.** Read this file, recent gallery entries, recent Page feed, scheduled queue, and the last lesson. Preserve completed work and avoid repeated topics/formats.
2. **Choose one featured deliverable.** Pick a relevant design format or build improvement from the rotation below. Do not choose the same category on consecutive runs unless the next entry is clearly an intentional iteration.
3. **Write the mini-brief first.** State audience, goal, format/size, one main message, visual direction, public label (concept/study/mockup/implemented), and what evidence is or is not available.
4. **Make the featured asset.** Prefer Pollo AI `openai / gpt-image-2-5`, portrait 4:5 for feed graphics, 1K, low quality for credit conservation. Use the charcoal `#101820`, warm-white `#F6F7F4`, and lime `#D5F36A` palette. Generate the separate featured graphic/design study and the three unique feed graphics when credits permit.
5. **Integrate it.** Add the actual asset to repository storage if the returned media can be transferred safely. Register it in the Design Gallery with category, title, purpose, dimensions, alt text, choices, and limitations. Embed a hosted asset only when repository transfer is unavailable, and disclose that storage limitation in the internal log.
6. **Prepare three distinct photo captions.** Keep these different in topic, image, hook, and discussion prompt:
   - `#KaelBuildNotes` — a practical implementation lesson.
   - `#KaelUXLab` — a user-experience/accessibility experiment or visual choice.
   - `#KaelProjectNotes` — a real repo/site iteration, project lesson, or honest reflection.
   
   All three may include https://kael-builds.vercel.app and no other links. Do not post all three about the featured design unless each angle teaches a genuinely different lesson.
7. **Run the duplicate guard again immediately before posting.** Re-read the current-day Page feed and queue. Only fill missing slots. If this run starts late, use immediate publication for a missing first slot only if safe; use future times for any remaining scheduled posts. Never backdate.
8. **Publish/schedule and verify.** Use photo posts. In Asia/Manila, target the first slot near 08:30, the second at 15:00, and the third at 19:00. Convert local target times to UTC Unix timestamps; Oct 25, 2026 targets are 00:30 UTC, 07:00 UTC, and 11:00 UTC. Each time must still be in the future at the time of scheduling, or be replaced with a safe current/future slot. Re-read published feed and scheduled entries and record post ID, status, permalink where available, and caption-link check.
9. **Validate the repository and website.** Run the production TypeScript/Vite build or wait for the required CI result. Fix regressions caused by this run. Merge to `main` only when relevant checks pass; otherwise leave the branch/PR unmerged and report the blocker.
10. **Learn and extend the plan.** Compare insights only where returned metrics support it; missing metrics remain unknown. Record what shipped, what failed, lessons, the next design category, and draft topics for the next run. Keep previous log entries; never rewrite history to imply an uncompleted step succeeded.

## Next schedule — Sunday, 25 October 2026

Today's three October 24 slot tags already exist in the published Page feed. Their captions contain prohibited external links, and Facebook rejected all three in-place caption edits with a permission error. The connected account can read the feed but currently cannot edit those existing posts. Do not duplicate those posts. For future posts, enforce the link check before creation.

### Featured design
- **Format:** Typographic poster / print-poster study.
- **Working title:** Make It Useful.
- **Intent:** Communicate an iterative maker mindset with a large headline and a simple “Idea → Test → Improve” reading path.
- **Status:** Concept study, not a live product or print-ready file.
- **Asset note:** Pollo returned a successful 4:5, 1K poster asset on Oct 24. The gallery references the hosted raster because this session could not download the original PNG into repository storage. Check that the embedded image loads before treating the gallery entry as complete; do not display its CDN URL as a public link.

### Three post briefs (create only if today's slots do not already exist)

**A — `#KaelBuildNotes` / target 08:30 Manila**
- Topic: Reserve image space to reduce unexpected layout movement.
- Takeaway: Provide image dimensions or an aspect ratio, keep the image responsive, and measure remaining shifts rather than assuming a single tweak solved every issue.
- Graphic: A clean before/after layout sketch: shifting cards versus reserved image space. This is a concept illustration, not a benchmark.
- Prompt: “Which page element causes the most layout jumping on your phone?”
- Caption link: https://kael-builds.vercel.app only.

**B — `#KaelUXLab` / target 15:00 Manila**
- Topic: Compare a clear selected-tab state plus keyboard focus against a color-only selected state.
- Takeaway: Selection and keyboard focus are different states; neither should depend on color alone.
- Graphic: A labelled A/B interface study with focus outline and selected indicator visible in both concepts. Label it a UI concept, not a tested usability result.
- Prompt: “Which state is easier to understand at a glance, and why?”
- Caption link: https://kael-builds.vercel.app only.

**C — `#KaelProjectNotes` / target 19:00 Manila**
- Topic: The portfolio is moving from a long scrolling page to explicit click-through panels.
- Takeaway: Tab navigation should keep the active section obvious, support keyboard movement, and still work at mobile widths.
- Graphic: A small “Before: long page / After: section tabs” comparison; use actual screenshots only if the change is validated, otherwise label it as a planned/interface study.
- Prompt: “Would you rather open a dedicated tab for Work, Web Design, Graphic Design, and Build Notes, or keep them on one scrolling page?”
- Caption link: https://kael-builds.vercel.app only.

Do not claim the tab transition is deployed until TypeScript/Vite or the configured CI passes and the intended branch is merged/deployed.

## Format rotation ledger

Keep this cumulative and append a new dated line after each run.

| Date | Featured category | Deliverable | Status / lesson |
|---|---|---|---|
| 2026-10-24 | Print / editorial | Studio services tri-fold brochure concept | Existing gallery entry; concept spread, not a complete brochure. |
| 2026-10-25 | Poster / typography | Make It Useful — typographic studio poster | Pollo generation succeeded; confirm gallery and hosting before marking web display complete. |
| 2026-10-26 | Brand identity or packaging | Choose one based on the next feed review | Tentative only; do not generate until the next run checks for repeats and credits. |

### Suggested rotation pool

Choose one category per run and tailor its purpose to the audience:
1. Web design / responsive landing-page study.
2. Print poster / campaign typography.
3. Logo or wordmark exploration / identity guidelines.
4. Brochure, leaflet, or multi-panel information design.
5. Packaging / label / product insert.
6. Editorial spread / report cover / zine.
7. Educational infographic / diagram / data visualization.
8. School, community, or public-service collateral (use verified factual copy).
9. Social campaign system / banner / carousel.
10. UI state or accessibility comparison.
11. Icon set / pattern / illustration / visual identity.
12. Presentation slide / pitch-deck cover / event signage.

Reset the rotation only after the pool cycles; vary the subject, composition, intended audience, and format as well as the category.

## Internal pre-publish checklist

- [ ] Correct date and timezone (Asia/Manila).
- [ ] Correct Page ID and Page name confirmed.
- [ ] Feed and scheduled queue checked; no duplicate slot tag.
- [ ] Graphic is generated/created and can actually be retrieved.
- [ ] Caption includes the correct unique slot hashtag and `#KaelBuilds`.
- [ ] Link scan finds only https://kael-builds.vercel.app.
- [ ] No source URL, GitHub URL, CDN hyperlink, QR code, or unrelated Page mentioned.
- [ ] Claims are supported; concept versus implemented status is explicit.
- [ ] Future scheduling timestamps are valid UTC epochs, not past times.
- [ ] Build/CI result checked; merge only after passing.
- [ ] After publishing, permalink/ID/status re-fetched; scheduled posts are not described as live.
- [ ] Insights availability and unknown metrics recorded honestly.
- [ ] Next category and next three angles added below without deleting the history.

## Run log

### 2026-10-24 — Link-rule correction and next-run planning
- The three October 24 post slots already appeared in the Page feed.
- In-place caption edits failed: the connected Facebook permission returned “Viewer does not have permission to edit content.” No duplicate posts were created.
- The scheduled/unpublished queue returned empty.
- Pollo poster generation succeeded (4:5, 1K, low quality, 1 credit reported).
- Next engineering improvement: validate the click-through tabs and gallery on the working branch, check CI, then merge only after passing.
- Lesson: verify captions and links before the photo-post creation call; do not rely on post-edit permission after publication.
