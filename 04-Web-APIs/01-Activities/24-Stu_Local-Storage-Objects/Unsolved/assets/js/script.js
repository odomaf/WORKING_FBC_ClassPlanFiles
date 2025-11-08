// ======================================
// 23-Stu_Local-Storage-Objects (Unsolved)
// Contact Book starter — fill in the TODOs
// ======================================

// 1) Select elements (form, inputs, buttons, table body, message area)
var form = document.getElementById("contact-form");
var firstNameInput = document.getElementById("first-name");
var lastNameInput = document.getElementById("last-name");
var emailInput = document.getElementById("email");

var saveButton = document.getElementById("save");
var deleteLastButton = document.getElementById("delete-last");
var clearAllButton = document.getElementById("clear-all");

var msg = document.getElementById("msg");
var tbody = document.getElementById("contacts-body");

// 2) Choose a localStorage key to store your array of contacts
var LS_KEY = "contacts";

// 3) Write helpers to read/write the array from localStorage
function readContacts() {
  // TODO: get the string from localStorage, JSON.parse it, and return an array
  var raw = localStorage.getItem(LS_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw) || [];
  } catch (e) {
    return [];
  }
}

function writeContacts(list) {
  // TODO: JSON.stringify the array and setItem back to localStorage
  localStorage.setItem(LS_KEY, JSON.stringify(list));
}

function setMsg(type, text) {
  // Optional helper to show messages (type can be "", "success", or "error")
  msg.className = type;
  msg.textContent = text || "";
}

// 4) Render function: build table rows from the array in storage
function renderTable() {
  var contacts = readContacts().slice().reverse(); // most recent first

  // Clear old rows
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }

  if (contacts.length === 0) {
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    td.colSpan = 4;
    td.textContent = "No contacts yet. Add one above.";
    tr.appendChild(td);
    tbody.appendChild(tr);
    return;
  }

  // TODO: loop through contacts and create <tr><td>First</td><td>Last</td><td>Email</td><td>Saved</td></tr>
  for (var i = 0; i < contacts.length; i++) {
    var c = contacts[i];
    var tr2 = document.createElement("tr");

    var tdf = document.createElement("td");
    tdf.textContent = c.firstName;

    var tdl = document.createElement("td");
    tdl.textContent = c.lastName;

    var tde = document.createElement("td");
    tde.textContent = c.email || "—";

    var tds = document.createElement("td");
    tds.textContent = c.savedAtDisplay;

    tr2.appendChild(tdf);
    tr2.appendChild(tdl);
    tr2.appendChild(tde);
    tr2.appendChild(tds);
    tbody.appendChild(tr2);
  }
}

// 5) Submit handler: prevent default, validate, build contact object, push into array, save, render
function onSave(e) {
  e.preventDefault();

  // TODO: read values and trim
  var firstName = firstNameInput.value.trim();
  var lastName = lastNameInput.value.trim();
  var email = emailInput.value.trim();

  // TODO: basic validation (first & last required)
  if (firstName === "" || lastName === "") {
    setMsg("error", "First and Last name are required.");
    return;
  }

  var now = new Date();
  var contact = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    savedAt: now.getTime(),
    savedAtDisplay: now.toLocaleString(),
  };

  // TODO: read array -> push -> write back
  var list = readContacts();
  list.push(contact);
  writeContacts(list);

  setMsg("success", "Saved: " + firstName + " " + lastName);

  // Optional: clear inputs
  firstNameInput.value = "";
  lastNameInput.value = "";
  emailInput.value = "";

  renderTable();
}

// 6) “Delete Last” removes the most recent contact
function onDeleteLast() {
  var list = readContacts();
  if (list.length === 0) {
    setMsg("", "Nothing to delete.");
    return;
  }
  // TODO: remove the last element and save
  list.pop();
  writeContacts(list);
  setMsg("success", "Last contact deleted.");
  renderTable();
}

// 7) “Clear All” removes the key from storage completely
function onClearAll() {
  var list = readContacts();
  if (list.length === 0) {
    setMsg("", "Nothing to clear.");
    return;
  }
  // TODO: remove the key and re-render
  localStorage.removeItem(LS_KEY);
  setMsg("success", "All contacts cleared.");
  renderTable();
}

// 8) Init — render & attach listeners
renderTable();
form.addEventListener("submit", onSave);
deleteLastButton.addEventListener("click", onDeleteLast);
clearAllButton.addEventListener("click", onClearAll);
