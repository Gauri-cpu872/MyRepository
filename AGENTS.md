# AGENTS

## Purpose
This repository is a small Playwright test project.

## Key files
- `package.json` — Node project metadata and dev dependencies.
- `playwright.config.js` — Playwright test configuration.
- `tests/` — Playwright test files (`*.spec.js`).

## What agents should know
- Tests use `@playwright/test` and are located under `tests/`.
- There is no application source code in this repo; the tests navigate to external websites such as `https://www.saucedemo.com/` and `https://playwright.dev/`.
- `package.json` has no `scripts` defined, so commands should use `npx playwright test` unless a script is added.
- The project currently uses Playwright config with ESM-style imports.

## Recommended commands
- Install dependencies: `npm install`
- Run all tests: `npx playwright test`
- Run a specific test file: `npx playwright test tests/SauceDemo.spec.js`

## Agent behavior
- Prefer minimal, idiomatic Playwright edits.
- Keep modifications focused on test reliability and selector clarity.
- If config or package format issues appear, point them out before making broad changes.
