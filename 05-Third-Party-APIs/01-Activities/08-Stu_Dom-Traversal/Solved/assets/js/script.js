// Ensure the DOM is ready before manipulating elements
const rootEl = $('#root');

/**
 * 1) Style all tiles on load
 *    - Starting at rootEl, select all tiles (li elements) and set background-color to white.
 */
const allTiles = rootEl.children('ul').children();
allTiles.css('background-color', 'white');

/**
 * 2) Block X from winning
 *    - Row 1 (index 0), Col 3 (index 2) becomes "O"
 */
const row1 = rootEl.children('ul').eq(0);
row1.children().eq(2).text('O');

/**
 * 3) Make O win (right column)
 *    - Row 2 (index 1), Col 3 (index 2) → "O"
 *    - Row 3 (index 2), Col 3 (index 2) → "O"
 */
const row2 = rootEl.children('ul').eq(1);
const row3 = rootEl.children('ul').eq(2);

row2.children().eq(2).text('O');
row3.children().eq(2).text('O');

/**
 * BONUS: visually highlight the winning column
 * Add .win to the right-column cells (col index 2 across all rows)
 */
for (let r = 0; r < 3; r++) {
    rootEl.children('ul').eq(r).children().eq(2).addClass('win');
}
