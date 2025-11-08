// ===================================================
// 26-Stu_Local-Storage-Todos Solved
// Focus: Using localStorage to persist an ARRAY OF OBJECTS.
// ===================================================

// 1) Elements
var form = document.getElementById('grade-form');
var studentSel = document.getElementById('student-names');
var gradeSel = document.getElementById('grades');
var commentInput = document.getElementById('msg');

var saveBtn = document.getElementById('save');
var deleteLastBtn = document.getElementById('delete-last');
var clearAllBtn = document.getElementById('clear-all');

var flash = document.getElementById('flash');

var lastName = document.getElementById('saved-name');
var lastGrade = document.getElementById('saved-grade');
var lastComment = document.getElementById('saved-comment');
var lastWhen = document.getElementById('saved-when');

var tbody = document.getElementById('roster-body');

// 2) Storage key
var LS_KEY = 'studentRoster';

// 3) Storage helpers
function readRoster() {
  var raw = localStorage.getItem(LS_KEY);
  if (!raw) return [];
  try { return JSON.parse(raw) || []; }
  catch (e) { return []; }
}

function writeRoster(list) {
  localStorage.setItem(LS_KEY, JSON.stringify(list));
}

// 4) Flash helper
function setFlash(type, text) {
  // type: "", "success", "error" (purely for semantics here)
  flash.className = type;
  flash.textContent = text || '';
}

// 5) Render "Last Saved" card
function renderLastSaved(entry) {
  if (!entry) {
    lastName.textContent = '—';
    lastGrade.textContent = '—';
    lastComment.textContent = '—';
    lastWhen.textContent = '—';
    return;
  }
  lastName.textContent = entry.student;
  lastGrade.textContent = entry.grade;
  lastComment.textContent = entry.comment ? entry.comment : '—';
  lastWhen.textContent = entry.savedAtDisplay;
}

// 6) Render table from storage (most recent first)
function renderTable() {
  var data = readRoster().slice().reverse();

  // clear existing rows
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }

  if (data.length === 0) {
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.colSpan = 4;
    td.textContent = 'No entries yet. Add one above.';
    tr.appendChild(td);
    tbody.appendChild(tr);
    renderLastSaved(null);
    return;
  }

  // show the top (most recent) as last-saved
  renderLastSaved(data[0]);

  var i;
  for (i = 0; i < data.length; i++) {
    var row = data[i];
    var tr2 = document.createElement('tr');

    var tdName = document.createElement('td');
    tdName.textContent = row.student;

    var tdGrade = document.createElement('td');
    tdGrade.textContent = row.grade;

    var tdComment = document.createElement('td');
    tdComment.textContent = row.comment || '—';

    var tdWhen = document.createElement('td');
    tdWhen.textContent = row.savedAtDisplay;

    tr2.appendChild(tdName);
    tr2.appendChild(tdGrade);
    tr2.appendChild(tdComment);
    tr2.appendChild(tdWhen);
    tbody.appendChild(tr2);
  }
}

// 7) Form submit handler (Save)
function onSave(e) {
  e.preventDefault();

  var student = studentSel.value;
  var grade = gradeSel.value;
  var comment = commentInput.value.trim();

  var now = new Date();
  var entry = {
    student: student,
    grade: grade,
    comment: comment,
    savedAt: now.getTime(),
    savedAtDisplay: now.toLocaleString()
  };

  // read -> push -> write
  var list = readRoster();
  list.push(entry);
  writeRoster(list);

  // UI feedback
  setFlash('success', 'Saved: ' + student + ' (' + grade + ')');
  commentInput.value = '';

  renderTable();
}

// 8) Delete last entry
function onDeleteLast() {
  var list = readRoster();
  if (list.length === 0) {
    setFlash('', 'Nothing to delete.');
    return;
  }
  list.pop();
  writeRoster(list);
  setFlash('success', 'Last entry deleted.');
  renderTable();
}

// 9) Clear all entries
function onClearAll() {
  var list = readRoster();
  if (list.length === 0) {
    setFlash('', 'Nothing to clear.');
    return;
  }
  localStorage.removeItem(LS_KEY);
  setFlash('success', 'All entries cleared.');
  renderTable();
}

// 10) Init
renderTable();
form.addEventListener('submit', onSave);
deleteLastBtn.addEventListener('click', onDeleteLast);
clearAllBtn.addEventListener('click', onClearAll);
