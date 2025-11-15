// NOTE: In a real project, avoid committing your real API key.
// For demo/class use only.
const API_KEY = 'YOUR_API_KEY_HERE';

const CURRENT_URL = 'https://api.openweathermap.org/data/2.5/weather';
const FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast';

const searchForm = document.querySelector('#search-form');
const cityInput = document.querySelector('#city-input');
const messageEl = document.querySelector('#message');
const currentWeatherEl = document.querySelector('#current-weather');
const forecastEl = document.querySelector('#forecast');

// Attach submit handler
searchForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const city = cityInput.value.trim();

  if (!city) {
    setMessage('Please enter a city name.', true);
    return;
  }

  fetchWeatherData(city);
});

// Fetch current + forecast in parallel
async function fetchWeatherData(city) {
  setMessage('Loading weather data...');
  clearWeather();

  const currentUrl = `${CURRENT_URL}?q=${encodeURIComponent(
    city
  )}&appid=${API_KEY}&units=imperial`;
  const forecastUrl = `${FORECAST_URL}?q=${encodeURIComponent(
    city
  )}&appid=${API_KEY}&units=imperial`;

  try {
    const [currentRes, forecastRes] = await Promise.all([
      fetch(currentUrl),
      fetch(forecastUrl),
    ]);

    if (!currentRes.ok || !forecastRes.ok) {
      throw new Error('City not found or API error.');
    }

    const currentData = await currentRes.json();
    const forecastData = await forecastRes.json();

    renderCurrentWeather(currentData);
    renderForecast(forecastData);

    setMessage(`Showing weather for ${currentData.name}.`, false);
    // Stretch: remember last city
    localStorage.setItem('lastCity', currentData.name);
  } catch (error) {
    console.error(error);
    setMessage(error.message || 'Unable to fetch weather data.', true);
  }
}

// Render current weather card
function renderCurrentWeather(data) {
  currentWeatherEl.innerHTML = '';

  const {
    name,
    main: { temp, feels_like },
    weather,
  } = data;

  const description = weather[0]?.description ?? '';
  const iconCode = weather[0]?.icon;
  const iconUrl = iconCode
    ? `https://openweathermap.org/img/wn/${iconCode}@2x.png`
    : '';

  const card = document.createElement('div');
  card.className = 'card shadow-sm';

  const cardBody = document.createElement('div');
  cardBody.className = 'card-body d-flex align-items-center';

  const textContainer = document.createElement('div');
  textContainer.className = 'flex-grow-1';

  const title = document.createElement('h3');
  title.className = 'h5 card-title mb-1';
  title.textContent = name;

  const tempEl = document.createElement('p');
  tempEl.className = 'card-text mb-1';
  tempEl.textContent = `Temp: ${Math.round(temp)}°F`;

  const feelsEl = document.createElement('p');
  feelsEl.className = 'card-text mb-1';
  feelsEl.textContent = `Feels like: ${Math.round(feels_like)}°F`;

  const descEl = document.createElement('p');
  descEl.className = 'card-text text-muted mb-0 text-capitalize';
  descEl.textContent = description;

  textContainer.append(title, tempEl, feelsEl, descEl);

  if (iconUrl) {
    const img = document.createElement('img');
    img.src = iconUrl;
    img.alt = description;
    img.className = 'weather-icon ms-3';
    cardBody.append(textContainer, img);
  } else {
    cardBody.append(textContainer);
  }

  card.append(cardBody);
  currentWeatherEl.append(card);
}

// Render forecast cards (one per day)
function renderForecast(data) {
  forecastEl.innerHTML = '';

  // Select one forecast per day at around 12:00:00
  const daily = data.list.filter((item) =>
    item.dt_txt.includes('12:00:00')
  );

  daily.forEach((item) => {
    const date = new Date(item.dt_txt);
    const {
      main: { temp },
      weather,
    } = item;

    const description = weather[0]?.description ?? '';
    const iconCode = weather[0]?.icon;
    const iconUrl = iconCode
      ? `https://openweathermap.org/img/wn/${iconCode}@2x.png`
      : '';

    const col = document.createElement('div');
    col.className = 'col-12 col-sm-6 col-md-4 col-lg-3';

    const card = document.createElement('div');
    card.className = 'card h-100 shadow-sm';

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body text-center';

    const title = document.createElement('h3');
    title.className = 'h6 card-title';
    title.textContent = date.toLocaleDateString(undefined, {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });

    const img = document.createElement('img');
    if (iconUrl) {
      img.src = iconUrl;
      img.alt = description;
      img.className = 'weather-icon mb-2';
    }

    const tempEl = document.createElement('p');
    tempEl.className = 'card-text mb-1';
    tempEl.textContent = `${Math.round(temp)}°F`;

    const descEl = document.createElement('p');
    descEl.className = 'card-text text-muted text-capitalize mb-0';
    descEl.textContent = description;

    cardBody.append(title);
    if (iconUrl) {
      cardBody.append(img);
    }
    cardBody.append(tempEl, descEl);

    card.append(cardBody);
    col.append(card);
    forecastEl.append(col);
  });

  if (!daily.length) {
    const p = document.createElement('p');
    p.className = 'text-muted';
    p.textContent = 'No forecast data available.';
    forecastEl.append(p);
  }
}

// Clear current + forecast
function clearWeather() {
  currentWeatherEl.innerHTML = '';
  forecastEl.innerHTML = '';
}

// Helper for messages
function setMessage(text, isError = false) {
  messageEl.textContent = text;
  messageEl.classList.toggle('text-danger', isError);
  messageEl.classList.toggle('text-muted', !isError);
}

// Stretch: load last city on page load
(function loadLastCity() {
  const lastCity = localStorage.getItem('lastCity');
  if (lastCity) {
    cityInput.value = lastCity;
    fetchWeatherData(lastCity);
  }
})();
