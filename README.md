# IEP Assist — research prototype (React + TypeScript + Tailwind CSS)

Fictional data only. No legal compliance or organisational endorsement is claimed.

## Requirements
Node.js (LTS) from nodejs.org. VS Code is recommended for reading the code.

## Commands (run in the project folder)
    npm install        # install tools (once)
    npm run typecheck  # type-check all code
    npm test           # run the 7 fictional scenarios (PASS/FAIL per check)
    npm run build      # creates dist/iep-assist.html — double-click to open

## Where to look for gaps
- src/services/iepGenerator.ts   evidence-matching and generation logic (mock AI)
- src/services/areaCatalogue.ts  keyword patterns, goal structures, accommodations, strategies
- src/services/goalQuality.ts    goal quality checks
- src/services/validation.ts     form rules and wording screen
- src/services/scenarios.ts      fictional test cases and expected results
- src/services/storage.ts        mock browser storage (to be replaced by a secure backend)
- src/services/referenceData.ts  options, sources and verification status

To plug in a real model later, implement IEPGeneratorService in iepGenerator.ts.
