// 21-Ins_jQuery-UI-Widgets
// Instructor demo:
// - Initialize a jQuery UI dialog
// - Trigger it with a button click

$(function () {
    // Initialize the dialog, but don't auto-open
    $('#demo-dialog').removeClass('d-none').dialog({
        autoOpen: false,
        modal: true,
        width: 480,
    });

    // Open on button click
    $('#open-dialog-btn').on('click', function () {
        $('#demo-dialog').dialog('open');
    });
});
