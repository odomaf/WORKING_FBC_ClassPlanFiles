// 24-Solved_jQuery-UI-Interactions
// Enable drag-and-drop sorting with a visible placeholder.

$(function () {
  $('#skills-list').sortable({
    placeholder: 'ui-state-highlight',
    axis: 'y'
  });

  // Optional: smoother UX while dragging
  $('#skills-list').disableSelection();
});
