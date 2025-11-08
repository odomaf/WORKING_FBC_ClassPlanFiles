// Ensure the DOM is ready before manipulating elements
const rootEl = $('#root');

/**
 * TODO 1: Style all tiles on load (background white, etc.)
 * - Starting at rootEl, select all tiles (li elements) and set background-color to white.
 *   Tip: rootEl.children('ul').children() targets all cells in every row.
 */
rootEl.children('ul').children().css('background-color', 'white');

/**
 * TODO 2: Block X from winning
 * - The board’s first row is the first <ul>. Set its third cell’s text to "O".
 *   Row index = 0, Col index = 2
 */
const row1 = rootEl.children('ul').eq(0);
// row1.children().eq(2).text('O');

/**
 * TODO 3: Make O win (right column)
 * - Set Row 2, Col 3 to "O"
 * - Set Row 3, Col 3 to "O"
 *   Row 2 index = 1, Row 3 index = 2, Col index = 2
 */
const row2 = rootEl.children('ul').eq(1);
const row3 = rootEl.children('ul').eq(2);
// row2.children().eq(2).text('O');
// row3.children().eq(2).text('O');

/**
 * BONUS (optional):
 * - Add a class "win" to the winning column (three cells in the right column).
 *   Then style it in CSS (e.g., green border or glow).
 *   Example selection pattern:
 *     rootEl.children('ul').eq(r).children().eq(2) for r = 0..2
 */
