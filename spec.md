# Specification

## Summary
**Goal:** Remove the last 3 static photos from the Gallery page.

**Planned changes:**
- Remove `gallery-photo-28.jpeg`, `gallery-photo-29.jpeg`, and `gallery-photo-30.jpeg` from the hardcoded static photos array in `frontend/src/pages/Gallery.tsx`, leaving only `gallery-photo-01.jpeg` through `gallery-photo-27.jpeg`

**User-visible outcome:** The Gallery page photo section displays 27 static photos instead of 30, with the grid layout remaining responsive and visually consistent.
