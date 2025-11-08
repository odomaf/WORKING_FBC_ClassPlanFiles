# 08-Stu_DOM-Traversal — Tic-Tac-Toe Automation

## User Story

- As a game developer, I want to **style** the board tiles on load.
- As a game developer, I want to **block X** from winning.
- As a game developer, I want to **make O win** programmatically.

## Acceptance Criteria

- It's done when the board's tiles are automatically styled on page load.
- It's done when the **X** player is blocked from winning (row 1 col 3).
- It's done when the **O** player has won (complete the **right column**).

## Constraints

- **All traversals must begin from `#root` (use the provided `rootEl`).**
- Prefer jQuery traversal methods: `.children()`, `.eq()`, `.find()`, `.parent()`, etc.

## Starting Board (index.html)

Row 1: `X  X  _` → Block X by setting the 3rd cell to **O**  
Row 2: `O  X  _`  
Row 3: `_  O  _` → Then complete **right column** with `O` in row 2 & row 3 (col 3)

## Tasks

1. **Style tiles**

   - From `rootEl`, select all tiles and set:
     - background: white
     - text alignment: centered (already set via CSS flex)
     - optional: add a hover effect (CSS only)

2. **Block X from winning**

   - Set **Row 1, Col 3** to `"O"`.

3. **Make O win**
   - Set **Row 2, Col 3** and **Row 3, Col 3** to `"O"` so the **right column** reads `O O O`.

## Hints

- Start from `rootEl`:
  - All rows: `rootEl.children('ul')`
  - A given row: `rootEl.children('ul').eq(rowIndex)`
  - A given cell in that row: `.children().eq(colIndex)`
- jQuery text setter: `.text('O')`
- Styling via jQuery: `.css('background-color', 'white')`

## Bonus

- After O wins, add a class to the winning cells and style them (e.g., green border).
- Use `.each()` to iterate tiles and add zebra striping.

## Docs

- Traversing: https://api.jquery.com/category/traversing
- Markup changes: https://api.jquery.com/text/
