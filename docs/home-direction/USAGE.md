# Home Direction Style Usage

This directory stores external `DESIGN.md` references used to drive homepage style experiments while keeping the same data structure.

## Installed Style Sources

- `docs/home-direction/ibm.DESIGN.md`
- `docs/home-direction/tesla.DESIGN.md`

## Suggested Mapping

- `v2` -> `ibm.DESIGN.md` (enterprise, structured, controlled accent color)
- `v3` -> `tesla.DESIGN.md` (minimal + photographic + large-impact layout)

## Workflow

1. Keep content/data contracts unchanged (`src/lib/site-data.ts`, `data/zh/*`, `data/en/*`).
2. Treat each version as a style layer only.
3. For each version update:
   - Read the assigned DESIGN.md file
   - Adjust section composition first (layout skeleton)
   - Apply color/typography/elevation tokens second
4. Compare versions at:
   - `/home-direction/v2`
   - `/home-direction/v3`
5. Select one direction and merge into final homepage spec.

## Notes

- These files are inspiration references, not official brand systems.
- Red should remain accent-only in v2 unless explicitly changed.
