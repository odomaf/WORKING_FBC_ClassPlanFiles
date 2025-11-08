// 22-Stu_jQuery-UI-Widgets
// Your tasks:
// 1. Add autocomplete to #skill-name using jQuery UI.
// 2. Add a datepicker to #datepicker with month/year dropdowns.

const formEl = $('#skills-form');
const nameInputEl = $('#skill-name');
const dateInputEl = $('#datepicker');
const skillsListEl = $('#skills-list');

// Renders "Skill on Date" into the list
const printSkills = (name, date) => {
  const listEl = $('<li>')
    .addClass('list-group-item')
    .text(`${name} on ${date}`);

  skillsListEl.append(listEl);
};

const handleFormSubmit = (event) => {
  event.preventDefault();

  const nameInput = nameInputEl.val().trim();
  const dateInput = dateInputEl.val().trim();

  if (!nameInput || !dateInput) {
    console.log('You need to fill out both fields!');
    return;
  }

  printSkills(nameInput, dateInput);

  // Reset form fields
  nameInputEl.val('');
  dateInputEl.val('');
};

formEl.on('submit', handleFormSubmit);

// =============================
// TODO 1: Autocomplete widget
// =============================

// 1. Create an array of skills (e.g. HTML, CSS, JavaScript, React, Node.js, etc.)
// 2. Call $('#skill-name').autocomplete({ source: yourArray });


// =============================
// TODO 2: Datepicker widget
// =============================

// 1. Use $('#datepicker').datepicker({...})
// 2. Enable changeMonth + changeYear so users can pick from dropdowns.
