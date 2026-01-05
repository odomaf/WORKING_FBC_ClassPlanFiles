const tipForm = document.getElementById('tip-form');
const tipsContainer = document.getElementById('tip-container');

const createCard = (hack) => {
  const cardEl = document.createElement('div');
  cardEl.classList.add('card', 'mb-3');
  cardEl.setAttribute('key', hack.hack_id);

  const cardHeaderEl = document.createElement('h4');
  cardHeaderEl.classList.add('card-header', 'bg-primary', 'text-light', 'p-2', 'm-0');
  cardHeaderEl.innerHTML = `${hack.username} </br><small>${hack.category}</small>`;

  const cardBodyEl = document.createElement('div');
  cardBodyEl.classList.add('card-body', 'bg-light', 'p-2');
  cardBodyEl.innerHTML = `<p>${hack.hack}</p>`;

  cardEl.appendChild(cardHeaderEl);
  cardEl.appendChild(cardBodyEl);
  tipsContainer.appendChild(cardEl);
};

const getHacks = () =>
  fetch('/api/hacks')
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.error('Error:', error));

const postHack = (hack) =>
  fetch('/api/hacks', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(hack),
  })
    .then((response) => response.json())
    .then((data) => {
      alert(data.status);
      createCard(data.body);
    })
    .catch((error) => console.error('Error:', error));

getHacks().then((data) => data.forEach((hack) => createCard(hack)));

const handleFormSubmit = (e) => {
  e.preventDefault();

  const hackContent = document.getElementById('tipText').value.trim();
  const hackUsername = document.getElementById('tipUsername').value.trim() || 'anonymous';

  if (!hackContent) {
    alert('Please enter a hack before submitting.');
    return;
  }

  const newHack = {
    username: hackUsername,
    category: 'Study',
    hack: hackContent,
  };

  postHack(newHack);
};

tipForm.addEventListener('submit', handleFormSubmit);
