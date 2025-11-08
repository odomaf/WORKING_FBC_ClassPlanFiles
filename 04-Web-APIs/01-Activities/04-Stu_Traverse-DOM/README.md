# Traverse the DOM — Starter

## Objective
Select, inspect, and modify elements by traversing the DOM tree.

## Steps
1. Open DevTools → **Console**.
2. Complete the TODOs in `script.js`:
   - Select `#demo-list` (the `<ul>`) and log it.
   - Log how many `<li>` children it has.
   - Add classes to the first and last `<li>` (`highlight`, `note`).
   - Select `#middle-item`, log its parent and its next/previous siblings, then change its text.
   - Use `querySelectorAll` to loop all `<li>` and log their text.
3. Refresh and verify results in the Console.

## Done When
- You see the `<ul>` element and a count of its children.
- The first list item is green/bold, and the last has a yellow highlight.
- The middle item’s text reads “I’m in the middle!”.
- The Console lists each `<li>` text on its own line.

## Tips
- `children` only includes element nodes (not text nodes).
- First/last elements: `firstElementChild`, `lastElementChild`.
- Siblings: `previousElementSibling`, `nextElementSibling`.

## Troubleshooting
- If queries return `null`, check the selector (e.g., `#demo-list` vs `demo-list`).
- Make sure your `<script>` tag is the last thing in `<body>`.
