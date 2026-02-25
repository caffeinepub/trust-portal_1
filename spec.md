# Specification

## Summary
**Goal:** Fix the Awards & Recognition section on both the About and Home pages so that all 7 award photos display correctly.

**Planned changes:**
- Rewrite the awards rendering block in `About.tsx` to use fully hardcoded literal `src` paths for all 7 award photos (award-photo-01, 02, 04, 05, 06, 07, 08), removing any template literals, dynamic src construction, lazy loading, inline event handlers, and conditional rendering
- Rewrite the awards rendering block in `Home.tsx` with the same approach — hardcoded literal src paths, no template literals, no conditional or lazy rendering — while keeping the founder profile, books section, and all other content intact
- Ensure no reference to award-photo-03.jpeg exists in either component

**User-visible outcome:** All 7 award photos are fully visible in the Awards & Recognition section on both the Home and About pages.
