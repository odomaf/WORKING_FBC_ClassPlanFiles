const tipForm = document.getElementById('tip-form');
const tipsContainer = document.getElementById('tip-container');

const createCard = (hack) => {
  const cardEl = document.createElement('div');
  cardEl.classList.add('card', 'mb-3');
  cardEl.setAttribute('key', hack.hack_id);

  const cardHeaderEl = document.createElement('h4');
  cardHeaderEl.classList.add('card-header', 'bg-primary', 'text-light', 'p-2', 'm-0');
  cardHeaderEl.innerHTML = `${hack.username} </br>`;

  const cardBodyEl = document.createElement('div');
  cardBodyEl.classList.add('card-body', 'bg-light', 'p-2');
  cardBodyEl.innerHTML = `<p>${hack.hack}</p>`;

  cardEl.appendChild(cardHeaderEl);
  cardEl.appendChild(cardBodyEl);
  tipsContainer.appendChild(cardEl);
};

const getHacks = () =>
  fetch('/api/hacks')
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.error('Error:', err));

const postHack = (hack) =>
  fetch('/api/hacks', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(hack),
  })
    .then((res) => res.json())
    .then((data) => {
      alert(data.status || 'Hack added!');
      createCard(data.body || hack);
    })
    .catch((err) => console.error('Error:', err));

getHacks().then((data) => data.forEach((hack) => createCard(hack)));

const handleFormSubmit = (e) => {
  e.preventDefault();

  const hackContent = document.getElementById('tipText').value;
  const hackUsername = document.getElementById('tipUsername').value.trim() || 'anonymous';

  const newHack = {
    username: hackUsername,
    category: 'Study',
    hack: hackContent,
  };

  postHack(newHack);
};

tipForm.addEventListener('submit', handleFormSubmit);
