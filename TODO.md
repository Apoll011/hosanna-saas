# TODO.md

# Hosanna Roadmap

## High Priority

### Dashboard

* [x] **Improve the Service Editor UI**

  * Redesign the layout to feel more modern and polished.
  * Make adding songs faster and require fewer clicks.
  * Improve drag-and-drop interactions.
  * Better distinguish songs, notes, and general service notes.
  * Add richer editing experience for service notes.
  * Improve spacing, typography, and hierarchy throughout the editor.

* [ ] **PDF Export from Context Menu**

  * Add an **Export** option to the context menu for:

    * Songs
    * Services
    * Folders
  * Export should generate professional-looking PDFs.

  #### Song PDF

  * Song title
  * Artist
  * Chords and lyrics
  * Church logo
  * Footer with page numbers

  #### Service PDF

  * Service title
  * Date
  * General service notes
  * Songs in order
  * Song-specific notes
  * Fully rendered ChordPro sheets
  * Church logo

  #### Folder PDF

  * Folder title
  * Table of contents
  * Every song contained within the folder
  * Page numbers
  * Church logo

---

## Mobile

### First-Time Setup Wizard

* [x] Add an onboarding flow shown on first launch.

The setup should allow users to connect to their church in multiple ways:

* [x] Scan a QR Code.
* [ ] Automatically test the connection.
* [ ] Display success/error feedback.
* [x] Save configuration locally.
* [x] Allow rerunning the setup later from Settings.
```

---

### UI Consistency

* [x] Unify the design of the **Songs** and **Services** pages.

Current goal:

* Use the same layout language.
* Match spacing and paddings.
* Reuse card components.
* Reuse search bars.
* Use identical section headers.
* Make navigation feel seamless between both tabs.

---

## PDF Improvements

* [ ] Design a reusable PDF theme.

Features:

* Church branding/logo.
* Consistent typography.
* Proper margins.
* Automatic page numbering.
* Optional dark logo/light logo.
* Better chord formatting.
* Improved page breaks.
* Printable A4 layout.

---

## Future Improvements

### Service Planning

* [x] Bible verses attached to services.
* [ ] Service templates.
* [ ] Duplicate existing services.
* [ ] Archive old services.

### Song Management

* [ ] Improve the song editor.
* [ ] Better ChordPro editing experience.
* [ ] Smarter import wizard.
* [x] Bulk song operations.
* [ ] Detect duplicate songs during import.

### Synchronization

* [ ] Improve offline editing.
* [ ] Preserve offline edits during synchronization.
* [ ] Conflict resolution instead of "last write wins."
* [ ] Background synchronization for the mobile app.

### SaaS

* [x] Create a marketing landing page.
* [ ] Church registration flow.
* [ ] Tenant billing.
* [ ] Affordable monthly subscription per church (not per user).
* [ ] Church branding customization.

---

## Nice to Have

* [ ] Service statistics.
* [x] Recently used songs.
* [ ] Better keyboard shortcuts.
* [ ] Improved accessibility.
* [ ] More animations and micro-interactions.
* [ ] Enhanced search filters.
* [ ] Performance optimizations for very large libraries.

###Auto-Transpose with Capo Suggestions
* What: When a song is transposed, suggest the capo fret + easy open-chord shape (C, G, D, A, E / Am, Em, Bm, F#m) so guitarists avoid barre chords
* Logic: capo fret = (target key − preferred shape key) mod 12; rank suggestions by lowest fret first, show 2–3 options
* Fallback: if no clean shape match, show "no capo needed / barre chords" instead of nothing
* UI: small dismissible tag near key selector (e.g. "Capo 3 → play in G"); don't force on non-guitarists
* Nice-to-have: only surface to users tagged as guitar/ukulele (if instrument data exists per musician)
* Nice-to-have: user preference toggle — "lowest capo" vs "easiest shape" (they sometimes conflict)
* QA: test flat keys (Db, Gb, Ab) — these produce the trickiest/least intuitive suggestions
* Effort: low — lookup table + modular math, no backend/data model changes, mostly frontend display; one sprint


###In-App Pitch-Shifted MP3 Rehearsal
* What: Let singers shift the pitch of a song's rehearsal MP3 to their own singing key, using the song's existing key data (like transpose.video, but auto-linked to your ChordPro key instead of a blind slider)
* Core logic: reuse the transpose engine — shift semitones = target key − original key; apply to audio pitch-shift, not just chord display
* MVP scope: pitch-shift only — skip speed control, looping, formant/vocal-reducer (Pro-tier complexity) for v1
* UI: simple slider or key-picker next to the MP3 player, auto-prefilled with the calculated shift, adjustable manually
* Fallback: if shift is extreme (many semitones), warn about audio quality degradation rather than silently producing a distorted result
* Blocker to check first: confirm licensing rights to pitch-shift/redistribute the MP3s (separate legal question from chord chart licensing/CCLI)
* Technical risk: real-time pitch shift without artifacts (chipmunk effect) needs a decent DSP library — don't underestimate as "just a slider"
* Timing: phase 2, post-launch fast-follow — not a pre-launch blocker
* Effort: medium-high — new audio processing capability, not a reuse of existing display logic like the capo feature


-------------
Autores podem reportar musicas no hosanna sem licensa e enviamos avisos a igreja
Reporar erros com sentry
Enviar emails. relatorios etc etc
Adicionar no mobile alto contraste
Login remove placholders and just leave the inputs empty
Search on studio need to be fixed, if i click any where else it need to stop searching
add Church info and logo, on the dashboard
On the dash board folder view allow for draging folders and songs into another folder
Fix settings ui and text on dashboard
ON register dashboard dont accept password less than 6 char
on dashboard put the tenat-slug on the url dashboard.url/tenant-url