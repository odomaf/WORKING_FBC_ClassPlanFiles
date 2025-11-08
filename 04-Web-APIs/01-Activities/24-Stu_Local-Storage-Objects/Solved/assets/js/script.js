// ======================================
// 23-Stu_Local-Storage-Objects (Solved)
// Contact Book: save an OBJECT (and an ARRAY of objects) using localStorage
// ======================================

var LS_KEY = 'contacts';
var form = document.getElementById('contact-form');
var firstNameInput = document.getElementById('first-name');
var lastNameInput = document.getElementById('last-name');
var emailInput = document.getElementById('email');

var saveButton = document.getElementById('save');
var deleteLastButton = document.getElementById('delete-last');
var clearAllButton = document.getElementById('clear-all');

var msg = document.getElementById('msg');
var tbody = document.getElementById('contacts-body');

// ---- Storage helpers ----
function readContacts() {
  var raw = localStorage.getItem(LS_KEY);
  if (!raw) return [];
  try { return JSON.parse(raw) || []; }
  catch (e) { return []; }
}

function writeContacts(list) {
  localStorage.setItem(LS_KEY, JSON.stringify(list));
}

function setMsg(type, text) {
  // type could be "success", "error", or empty
  msg.className = type;
  msg.textContent = text || '';
}

// ---- Rendering ----
function renderTable() {
  var contacts = readContacts().slice().reverse(); // most recent first

  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }

  if (contacts.length === 0) {
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.colSpan = 4;
    td.textContent = 'No contacts yet. Add one above.';
    tr.appendChild(td);
    tbody.appendChild(tr);
    return;
  }

  for (var i = 0; i < contacts.length; i++) {
    var c = contacts[i];
    var tr2 = document.createElement('tr');

    var tdf = document.createElement('td');
    tdf.textContent = c.firstName;

    var tdl = document.createElement('td');
    tdl.textContent = c.lastName;

    var tde = document.createElement('td');
    tde.textContent = c.email || '—';

    var tds = document.createElement('td');
    tds.textContent = c.savedAtDisplay;

    tr2.appendChild(tdf);
    tr2.appendChild(tdl);
    tr2.appendChild(tde);
    tr2.appendChild(tds);
    tbody.appendChild(tr2);
  }
}

// ---- Events ----
function onSave(e) {
  e.preventDefault();

  var firstName = firstNameInput.value.trim();
  var lastName = lastNameInput.value.trim();
  var email = emailInput.value.trim();

  if (firstName === '' || lastName === '') {
    setMsg('error', 'First and Last name are required.');
    return;
  }

  var now = new Date();
  var contact = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    savedAt: now.getTime(),
    savedAtDisplay: now.toLocaleString()
  };

  // 1) read array, 2) push object, 3) write back as JSON string
  var list = readContacts();
  list.push(contact);
  writeContacts(list);

  setMsg('success', 'Saved: ' + firstName + ' ' + lastName);
  firstNameInput.value = '';
  lastNameInput.value = '';
  emailInput.value = '';

  renderTable();
}

function onDeleteLast() {
  var list = readContacts();
  if (list.length === 0) {
    setMsg('', 'Nothing to delete.');
    return;
  }
  list.pop();
  writeContacts(list);
  setMsg('success', 'Last contact deleted.');
  renderTable();
}

function onClearAll() {
  var list = readContacts();
  if (list.length === 0) {
    setMsg('', 'Nothing to clear.');
    return;
  }
  localStorage.removeItem(LS_KEY);
  setMsg('success', 'All contacts cleared.');
  renderTable();
}

// ---- Init ----
renderTable();
form.addEventListener('submit', onSave);
deleteLastButton.addEventListener('click', onDeleteLast);
clearAllButton.addEventListener('click', onClearAll);
