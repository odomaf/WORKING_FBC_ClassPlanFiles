// 01-Ins — jQuery Elements
// Goal: show the value of a third-party library (jQuery) with 5 ideas:
// select → create → text → class/style → append → click handler.

// Vanilla equivalents are noted in comments to build intuition.

$(function () {
  // 1) Select the mount point
  // const root = document.getElementById('root');
  const $root = $('#root');

  // 2) Create a title
  // const h1 = document.createElement('h1'); h1.textContent = 'Hello jQuery';
  const $title = $('<h1>');
  $title.text('Hello jQuery');
  $title.addClass('fancy');

  // 3) Create a short subtitle
  const $subtitle = $('<p>').text('Click any item to toggle highlight.');

  // 4) Build a tiny list
  const abilities = ['Select', 'Create', 'Style'];
  // const ul = document.createElement('ul'); ul.classList.add('list');
  const $list = $('<ul>').addClass('list');

  abilities.forEach(function (label) {
    // const li = document.createElement('li'); li.textContent = label; li.classList.add('item');
    const $li = $('<li>');
    $li.text(label);
    $li.addClass('item');
    $list.append($li);
  });

  // 5) Append everything in order
  // root.appendChild(h1); root.appendChild(p); root.appendChild(ul);
  $root.append($title);
  $root.append($subtitle);
  $root.append($list);

  // 6) One simple event: click to toggle a class
  // root.addEventListener('click', (e) => { if (e.target.matches('.item')) e.target.classList.toggle('is-active') })
  $root.on('click', '.item', function () {
    $(this).toggleClass('is-active');
  });
});
