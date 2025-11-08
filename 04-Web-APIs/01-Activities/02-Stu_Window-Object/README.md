# Window Object — Starter

## Objective
Use the `window` and `document` objects to log key parts of the page.

## Steps
1. Open DevTools → **Console**.
2. In `script.js`, complete the TODOs to:
   - log the global `window`
   - log `window.document`
   - log `document.documentElement`
   - log `document.head`
3. Refresh the page and verify the Console output.

## Done When
- The Console shows four logs: `window`, `window.document`, the `<html>` element, and the `<head>` element.

## Tips
- Keep the `<script>` tag at the **end** of `<body>` so the DOM is available without `defer`.
- Use exact property names (`documentElement`, not `documentelement`).

## Troubleshooting
- If nothing logs, ensure the `<script src="./script.js">` path is correct.
- Refresh after saving changes.
