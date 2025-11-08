// ======================================
// Gradebook (Solved)
// Persists an array of grade entries in localStorage.
// ======================================

var LS_KEY = 'gradebookEntries';
var form = document.getElementById('grade-form');
var studentSelect = document.getElementById('student-names');
var gradeSelect = document.getElementById('grades');
var commentInput = document.getElementById('msg');

var saveButton = document.getElementById('save');
var deleteLastButton = document.getElementById('delete-last');
var clearAllButton = document.getElementById('clear-all');

var flash = document.getElementById('flash');
var tableBody = document.getElementById('grades-body');

// -------------------- Utilities --------------------
function readEntries() {
  // Returns an array (empty if nothing saved)
  var raw = localStorage.getItem(LS_KEY);
  if (!raw) return [];
  try { return JSON.parse(raw) || []; }
  catch (e) { return []; }
}

function writeEntries(entries) {
  localStorage.setItem(LS_KEY, JSON.stringify(entries));
}

function setFlash(type, text) {
  // type: 'success' | 'error' | 'info'
  flash.textContent = text || '';
  flash.className = 'message ' + (type || '');
}

// -------------------- Render --------------------
function renderTable() {
  var entries = readEntries();
  // Show the 5 most recent (last-in first)
  var recent = entries.slice(-5).reverse();

  // Clear existing rows
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }

  if (recent.length === 0) {
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.colSpan = 4;
    td.textContent = 'No entries yet. Add a grade above.';
    tr.appendChild(td);
    tableBody.appendChild(tr);
    return;
  }

  for (var i = 0; i < recent.length; i++) {
    var row = recent[i];
    var tr2 = document.createElement('tr');

    var tdStudent = document.createElement('td');
    tdStudent.textContent = row.student;

    var tdGrade = document.createElement('td');
    tdGrade.textContent = row.grade;

    var tdComment = document.createElement('td');
    tdComment.textContent = row.comment || '—';

    var tdTime = document.createElement('td');
    tdTime.textContent = row.savedAtDisplay;

    tr2.appendChild(tdStudent);
    tr2.appendChild(tdGrade);
    tr2.appendChild(tdComment);
    tr2.appendChild(tdTime);

    tableBody.appendChild(tr2);
  }
}

// -------------------- Actions --------------------
function onSave(event) {
  event.preventDefault();

  var student = studentSelect.value;
  var grade = gradeSelect.value;
  var comment = commentInput.value.trim();

  // Basic validation
  if (!student || !grade) {
    setFlash('error', 'Please select a student and a grade.');
    return;
  }

  var now = new Date();
  var entry = {
    student: student,
    grade: grade,
    comment: comment,
    savedAt: now.getTime(),
    savedAtDisplay: now.toLocaleString()
  };

  var entries = readEntries();
  entries.push(entry);
  writeEntries(entries);

  // UI feedback
  setFlash('success', 'Saved: ' + student + ' — ' + grade);
  commentInput.value = '';
  renderTable();
}

function onDeleteLast() {
  var entries = readEntries();
  if (entries.length === 0) {
    setFlash('info', 'There are no entries to delete.');
    return;
  }
  entries.pop();
  writeEntries(entries);
  setFlash('success', 'Last entry deleted.');
  renderTable();
}

function onClearAll() {
  var entries = readEntries();
  if (entries.length === 0) {
    setFlash('info', 'There are no entries to clear.');
    return;
  }
  localStorage.removeItem(LS_KEY);
  setFlash('success', 'All entries cleared.');
  renderTable();
}

// -------------------- Init --------------------
renderTable();
form.addEventListener('submit', onSave);
deleteLastButton.addEventListener('click', onDeleteLast);
clearAllButton.addEventListener('click', onClearAll);
