// 23-Ins_jQuery-UI-Interactions
// Instructor demo: enable sortable on the list.

$(function () {
    $('#sortable').sortable({
        // Let jQuery UI handle drag/drop.
        // You can mention options like 'axis', 'containment', etc. in lecture.
    });

    // Optional: prevent text selection while sorting
    $('#sortable').disableSelection();
});
