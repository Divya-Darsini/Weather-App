// Replace with your OpenWeatherMap API key for local testing:
const API_KEY = 'a0624995fd718411c8ee88d54a97f39b';

const form = document.getElementById('searchForm');
const cityInput = document.getElementById('cityInput');
const locBtn = document.getElementById('locBtn');

const loader = document.getElementById('loader');
const weatherCard = document.getElementById('weatherCard');
const errorBox = document.getElementById('error');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (!city) return showError('Please enter a city name.');
  fetchWeatherByCity(city);
});

locBtn.addEventListener('click', () => {
  if (!navigator.geolocation) return showError('Geolocation not supported.');
  showLoader();
  navigator.geolocation.getCurrentPosition(
    (pos) => fetchWeatherByCoords(pos.coords.latitude, pos.coords.longitude),
    (err) => showError('Unable to get location: ' + err.message)
  );
});

async function fetchWeatherByCity(city) {
  showLoader();
  clearError();
  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`);
    const data = await res.json();
    if (!res.ok) return handleApiError(data);
    updateUI(data);
  } catch (err) {
    showError('Network error — check console.');
    console.error(err);
  }
}

async function fetchWeatherByCoords(lat, lon) {
  showLoader();
  clearError();
  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);
    const data = await res.json();
    if (!res.ok) return handleApiError(data);
    updateUI(data);
  } catch (err) {
    showError('Network error — check console.');
    console.error(err);
  }
}

function updateUI(data){
  hideLoader();
  weatherCard.classList.remove('hidden');
  document.getElementById('loc').textContent = `${data.name}, ${data.sys.country}`;
  document.getElementById('temp').textContent = `${Math.round(data.main.temp)}°C`;
  document.getElementById('desc').textContent = data.weather[0].description;
  document.getElementById('humidity').textContent = data.main.humidity;
  document.getElementById('wind').textContent = data.wind.speed;
  const icon = document.getElementById('icon');
  const iconCode = data.weather[0].icon;
  icon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  icon.alt = data.weather[0].description;
}

function showLoader(){ loader.classList.remove('hidden'); weatherCard.classList.add('hidden'); }
function hideLoader(){ loader.classList.add('hidden'); }
function showError(msg){ hideLoader(); weatherCard.classList.add('hidden'); errorBox.textContent = msg; errorBox.classList.remove('hidden'); }
function clearError(){ errorBox.classList.add('hidden'); errorBox.textContent = ''; }
function handleApiError(data){
  if (data && data.message) showError(data.message);
  else showError('API returned an error');
}
