# Hosanna Roadmap

## To Do (Current & High Priority)

### Dashboard & UI
* [ ] **PDF Export from Context Menu**
  * Generate professional-looking PDFs for:
    * **Songs:** Title, Artist, Chords and lyrics, Church logo, Footer with page numbers.
    * **Services:** Title, Date, General notes, Songs in order, Song-specific notes, Fully rendered ChordPro sheets, Church logo.
    * **Folders:** Title, Table of contents, Every song contained within, Page numbers, Church logo.
* [ ] Add Church info and logo to the dashboard.
* [ ] Fix settings UI and text on the dashboard.
* [ ] Put the tenant-slug on the URL (`dashboard.url/tenant-slug`).
* [ ] Fix the "Add" button on the dashboard.
* [ ] Fix the logo positioning on the dashboard.
* [ ] Fix search in the studio (clicking outside should stop/close the search).
* [ ] When dragging multiple selections, show all selected items.
* [ ] When moving songs via dragging, use batch move logic.
* [ ] Add a way to display the folder count inside a folder.
* [ ] If a folder is empty, do not prompt for the "type of delete".
* [ ] Login: Remove placeholders and leave the inputs completely empty.

### Mobile App & Live Experience
* [ ] **First-Time Setup Wizard Updates**
  * Automatically test the connection.
  * Display success/error feedback.
* [ ] Add a high-contrast mode for accessibility.
* [ ] Improved overall accessibility.
* [ ] Add more animations and micro-interactions.
* [ ] **Share Service Options:** Add a quick way to share a setlist outside the app (e.g., "Share to WhatsApp" generating a text list of songs, keys, and YouTube links).
* [ ] **Bluetooth Pedal Support:** Add keyboard mapping for musicians using Bluetooth pedals (PageFlip, AirTurn) to turn pages.

### Service & Song Management
* [ ] Add the ability to change the church name.
* [ ] Add the ability to edit the service name and date (date input must be in `dd/mm/yyyy` format).
* [ ] Overhaul the service editing saving system (notes saving needs an `updatedAt` field).
* [ ] Create service templates.
* [ ] Allow duplicating existing services.
* [ ] Allow archiving old services.
* [ ] Build a smarter import wizard.
* [ ] Detect duplicate songs during import.
* [ ] Add service statistics.

### New Features (Core)
* [ ] **Auto-Transpose with Capo Suggestions**
  * **What:** Suggest capo fret + easy open-chord shapes (C, G, D, A, E / Am, Em, Bm, F#m) to avoid barre chords.
  * **Logic:** `Capo fret = (target key − preferred shape key) mod 12`. Rank by lowest fret first, show 2–3 options.
  * **UI:** Small dismissible tag near key selector.
  * **Fallback:** Show "no capo needed / barre chords" if no clean shape matches.
* [ ] **YouTube Pitch-Shifting (Rehearsal Mode)**
  * **What:** Shift the audio pitch of a linked YouTube video to match the singer's key using Hosanna's transpose engine.
  * *Note:* Replaces the old MP3 idea. Will require researching web audio APIs or browser-level manipulation since native YouTube iframes don't support pitch shifting out of the box.

### Synchronization
* [ ] Improve offline editing capabilities.
* [ ] Preserve offline edits during synchronization.
* [ ] Implement conflict resolution (replace "last write wins").
* [ ] Add background synchronization for the mobile app.

### SaaS, Website & Deployment
* [ ] Tenant billing implementation.
* [ ] Church branding customization.
* [ ] Add a "Mobile" section on the SaaS landing page redirecting to the app download.
* [ ] Change the placement of the "Legal Documents" (Documentos Legais) on the SaaS site.
* [ ] Fix scrolling on the dashboard tenant registration page.
* [ ] Publish the website using Google Search Console (SEO).
* [ ] Create Dev and Production modes for deployment services.

### Engine, Tech Debt & Administration
* [ ] **Library Architecture:** Move all ChordPro parsing and viewing to a shared library so Mobile and Dashboard use the identical implementation.
* [ ] **Custom ChordPro:** Create a custom Ace/ChordPro library based on the import tool to customize snippets and highlighting.
* [ ] **Documentation:** Create a comprehensive ChordPro guide. 
* [ ] **Reporting:** Allow authors to report unlicensed songs on Hosanna, triggering an automated warning to the church.
* [ ] **Error Tracking:** Report system errors using Sentry.
* [ ] **Comms:** Setup automated emails, reports, etc.

### PDF Improvements
* [ ] **Design a reusable PDF theme**
  * Church branding/logo (Optional dark/light logo).
  * Consistent typography and proper margins.
  * Automatic page numbering.
  * Better chord formatting and improved page breaks.
  * Printable A4 layout.

---

## Future / Nice to Have (Phase 2+)

* [ ] **CCLI Auto-Reporting:** Generate a monthly report that admins can download to easily see how many times a song was played for CCLI compliance.
* [ ] **Direct CCLI SongSelect Import:** Integration to pull lyrics and chords straight from SongSelect.
* [ ] **Role-Based Access Control (RBAC):** Restrict who can edit, delete, or just view/transpose songs.
* [ ] **Musician Scheduling/Rosters:** Add the ability to assign specific musicians to specific services.
* [ ] **Multi-Campus Support:** Allow a single church tenant to have multiple locations sharing the same song database but running distinct services.
* [ ] **Full Localization (i18n):** Translate the App, Dashboard, SaaS, and Server into English, Spanish, and Portuguese.
* [ ] **Congregation Projection (ProPresenter Style):** A stage display/presentation mode to project lyrics to the church screens for the congregation.
* [ ] **Separate Metronome Tool:** A dedicated tool for a metronome/click-track (kept out of the main song view to avoid clutter).

---

## Done

### Dashboard & UI
* [x] **Improve the Service Editor UI** (Redesigned layout, faster song adding, better drag-and-drop, richer notes editing).
* [x] On the dashboard folder view, allow dragging folders and songs into another folder.
* [x] Enhanced search filters.
* [x] Better keyboard shortcuts.
* [x] Recently used songs implemented.
* [x] Performance optimizations for very large libraries.

### Mobile App & Live Experience
* [x] **First-Time Setup Wizard** (Onboarding flow, QR code scanning, local config saving, rerun from settings).
* [x] **UI Consistency** (Unified design language between Songs and Services pages).
* [x] **Number Systems:** Support for Nashville Number System and Solfège built into the transpose engine.
* [x] **Display Formatting Toggles:** Users can choose to view chords on top of the screen or above the lyrics, and notes above the lyrics.
* [x] **Service Comments:** Team members can leave comments on a service to communicate with each other.

### Service & Song Management
* [x] Bible verses attached to services.
* [x] Improved the song editor.
* [x] Better ChordPro editing experience.
* [x] Bulk song operations.
* [x] ChordPro syntax coloring automatically applied based on song sections.
* [x] BPM (Beats Per Minute) field supported for songs.
* [x] Medley support (Handled by creating a unified song via pasting).

### SaaS, Website & Deployment
* [x] Created a marketing landing page.
* [x] Church registration flow.
* [x] Affordable monthly subscription per church (not per user).
* [x] On dashboard registration, passwords less than 6 characters are no longer accepted.