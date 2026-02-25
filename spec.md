# Specification

## Summary
**Goal:** Fix award photos not displaying in the Awards & Recognition section on both the About and Home pages.

**Planned changes:**
- Ensure 4 award photo assets (award-photo-01.jpeg through award-photo-04.jpeg) exist at `frontend/public/assets/generated/`
- Fix `<img>` src paths in `About.tsx` to use `/assets/generated/award-photo-XX.jpeg` (absolute path from public root)
- Fix `<img>` src paths in `Home.tsx` to use `/assets/generated/award-photo-XX.jpeg` (absolute path from public root)
- Ensure each award photo container has an explicit height and `object-fit: cover` so images are not zero-sized
- Remove any CSS rules that hide or zero-size the award photo elements

**User-visible outcome:** All 4 award photos are visibly displayed in the Awards & Recognition section on both the About page and the Home page, loading without errors.
