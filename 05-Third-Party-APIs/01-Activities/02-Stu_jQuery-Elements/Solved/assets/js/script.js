// 02-Stu — jQuery Elements (Student Starter)
// Goal: Use jQuery to create a quote and author, then append to #root.
// Steps: select → create → text → class → append (with one nested element)

$(function () {
  // 1) Select the existing DOM element <main id="root"> and assign to a variable
  // const rootEl = $('#root');
  const rootEl = $('#root'); // TODO: confirm selector is "#root"

  // 2) Create a <p> element for the author and assign to a variable
  // const authorEl = $('<p>');
  const authorEl = $('<p>'); // TODO: create <p>

  // 3) Add text to the author element (use the "~ Carol Dweck" attribution)
  // authorEl.text('~ Carol Dweck');
  authorEl.text('~ Carol Dweck'); // TODO: add text

  // 4) Add the class "plain" to the author element
  // authorEl.addClass('plain');
  authorEl.addClass('plain'); // TODO: add class

  // 5) Create an <h1> element for the quote and assign to a variable
  // const quoteEl = $('<h1>');
  const quoteEl = $('<h1>'); // TODO: create <h1>

  // 6) Add a meaningful quote to the quote element (provided below)
  // quoteEl.text('Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning.');
  quoteEl.text('Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning.'); // TODO

  // 7) Apply the class "fancy" to the quote element
  // Prefer addClass over attr('class', 'fancy') so you can add more classes later.
  // quoteEl.addClass('fancy');
  quoteEl.addClass('fancy'); // TODO

  // 8) Attach the author <p> inside the quote <h1>
  // quoteEl.append(authorEl);
  quoteEl.append(authorEl); // TODO

  // 9) Append the quote element to the page inside #root
  // rootEl.append(quoteEl);
  rootEl.append(quoteEl); // TODO

  // 🧪 Quick check (open DevTools > Console): Should log 1 H1 and 1 nested P
  console.log('H1 count:', rootEl.find('h1').length);
  console.log('Author inside H1:', rootEl.find('h1 > p').length === 1);
});

/* Stretch (keep commented for now)
   - Change the quote text color at runtime: $('.fancy').css('color', 'rgb(48, 218, 236)');
   - Add a second author line in a new <p> with class "plain".
   - Wrap everything in a <section> you create with $('<section>') and append it to #root.
*/
