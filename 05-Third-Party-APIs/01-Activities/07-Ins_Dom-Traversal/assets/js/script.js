// 07-Ins_DOM-Traversal

//Uncomment all to see what happens
// Cache the top-level <main id="top">
// const $top = $('#top');

// 1) Highlight all **direct children** of #top
// $top.children().css('color', 'yellow');

// Log them to inspect the NodeList
// console.log('[children of #top]', $top.children());

// 2) Style the **first direct child** of #top (the <h1>)
// $top.children().eq(0).addClass('boxy');

// 3) Append a new list item to the existing <ul>
//    Use .find() here to show descendant traversal (vs .children(...).eq(4))
// $top.find('ul').append($('<li>Classmates</li>'));

// 4) Style all list items by traversing: #top -> ul (child) -> li (children)
// $top
//     .children('ul')
//     .children()
//     .addClass('bg-primary text-dark mb-3 p-3')
//     .css('border-radius', '.4rem');

// ---- Extra traversal demos (console only) ----

// Grab some handles to demo relations
// const $h1 = $top.children('h1').first();
// const $p = $top.children('p').first();
// const $ul = $top.children('ul').first();

// parent()
// console.log('[parent of <ul> is #top?]', $ul.parent().is('#top'));

// siblings() — everything at same depth under #top (excluding itself)
// console.log('[siblings of <p>]', $p.siblings());

// next() / prev() — adjacent siblings
// console.log('[next after <p>]', $p.next());
// console.log('[prev before <p>]', $p.prev());

// first() / last()
// console.log('[first li]', $ul.children('li').first().text());
// console.log('[last li]', $ul.children('li').last().text());

// closest() — walk up to nearest matching ancestor
// (Here, starting from the first <li>, closest('main') should be #top)
// const $firstLi = $ul.children('li').first();
// console.log('[closest main from first <li>]', $firstLi.closest('main').attr('id'));

// find() — search **descendants** from a context
// console.log('[all li via find from #top]', $top.find('li').length);
