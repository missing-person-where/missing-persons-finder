# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview
This is a non-profit "Missing Persons Finder" (寻人启示平台) website. 
It is currently a simple **static HTML** project.

## Architecture
- **Type**: Static Website
- **Entry Point**: `index.html`
- **Styling**: Internal CSS within `index.html` `<style>` tags.
- **Language**: Bilingual content (Chinese/English).

## Development Workflow

### Running Locally
Since this is a static site, you can serve it using a simple HTTP server.

**Using Python (Recommended):**
```bash
python -m http.server
```
Then open `http://localhost:8000` in your browser.

**Using Node.js:**
```bash
npx serve .
```

### Common Tasks
- **New Pages**: If creating new pages, ensure they link back to `index.html` and share the same header/footer structure.
- **Styling**: Current styles are in the `<head>` of `index.html`. If styles grow significantly, consider extracting them to a `styles.css` file.
- **Localization**: Maintain bilingual support (Chinese and English) for main interface elements where possible, matching the existing pattern.

## Code Style
- **HTML**: Semantic HTML5.
- **CSS**: Simple, responsive design.
- **Encoding**: UTF-8.
