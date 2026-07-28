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

* [ ] Add an onboarding flow shown on first launch.

The setup should allow users to connect to their church in multiple ways:

* [ ] Scan a QR Code.
* [ ] Paste an access token.
* [ ] Manually enter the server URL.
* [ ] Automatically test the connection.
* [ ] Display success/error feedback.
* [ ] Save configuration locally.
* [ ] Allow rerunning the setup later from Settings.

Potential future QR payload:

```text
hosanna://connect
Server URL
Access Token
Church Name
```

---

### UI Consistency

* [ ] Unify the design of the **Songs** and **Services** pages.

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


-------------
Autores podem reportar musicas no hosanna sem licensa e enviamos avisos a igreja
Reporar erros com sentry
Enviar emails. relatorios etc etc
Adicionar no mobile alto contraste
Login remove placholders and just leave the inputs empty
Search on studio need to be fixed, if i click any where else it need to stop searching