import { getRecommendations } from './recommendation.js';

const app = document.getElementById('app');

function pickRandom(arr, qty = 2) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, qty);
}

function home() {
  app.innerHTML = `
    <div class='center'>
      <div class='container' style='display:flex;align-items:center;justify-content:center;'>
        <div class='hero-card'>
          <span class='hero-icon'>🌍</span>
          <h1>Clima Inteligente</h1>
          <p>Dados climáticos da sua região com recomendações ambientais em tempo real.</p>
          <button class='btn' onclick='startApp()'> Usar minha localização</button>
        </div>
      </div>
    </div>`;
}

window.home = home;

async function startApp() {
  loading();
  try {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        const response = await fetch(`http://localhost:3000/api/environment?lat=${lat}&lon=${lon}`);
        const data = await response.json();
        console.log(data)
        showDashboard(data);
      },
      () => showError()
    );
  } catch {
    showError();
  }
}

window.startApp = startApp;

function loading() {
  app.innerHTML = `
    <div class='center'>
      <div class='container' style='display:flex;align-items:center;justify-content:center;'>
        <div class='card center-card'>
          <h1>Consultando dados</h1>
          <div class='spinner'></div>
          <p>Obtendo sua localização…<br>Consultando dados ambientais…</p>
        </div>
      </div>
    </div>`;
}

function recommendations(d) {
  const r = [];

  function addRec(category, key) {
    const rec = getRecommendations(category, key);
    if (rec) r.push(...pickRandom(rec.tips, 2));
  }

  if (d.temp > 30) addRec('temperature','hot');
  else if (d.temp >= 15) addRec('temperature','mild');
  else addRec('temperature','cold');

  const c = d.condition.toLowerCase();
  if (c.includes('limpo')||c.includes('clear')) addRec('weather','clear');
  else if (c.includes('nublado')||c.includes('nuvens')||c.includes('cloud')) addRec('weather','cloudy');
  else if (c.includes('chuva')||c.includes('rain')||c.includes('garoa')) addRec('weather','rain');
  else if (c.includes('trovoada')||c.includes('storm')||c.includes('thunder')) addRec('weather','storm');
  else if (c.includes('névoa')||c.includes('mist')||c.includes('fog')) addRec('weather','mist');

  if (d.humidity < 40) addRec('humidity','low');
  else if (d.humidity <= 70) addRec('humidity','normal');
  else addRec('humidity','high');

  if (d.wind <= 10) addRec('wind','low');
  else if (d.wind <= 25) addRec('wind','moderate');
  else addRec('wind','strong');

  const aqiMap = {1:'good',2:'moderate',3:'regular',4:'bad',5:'very_bad'};
  addRec('air_quality', aqiMap[d.aqi] || 'good');

  return pickRandom([...new Set(r)], 6);
}

function showDashboard(d) {
  console.log(d);

  // Update sky background to match weather
  if (window.updateSkyCondition) window.updateSkyCondition(d.condition, d.temp);

  app.innerHTML = `
    <div class='container'>
      <div class='topbar'>
        <h1>🌤 Painel Climático</h1>
        <button class='btn small' onclick='home()'>↩ Início</button>
      </div>
      <div class='grid'>
        ${card('📍 Localização', d.city + (d.state ? ' — ' + d.state : ''))}
        ${card('🌡️ Temperatura', d.temp + '°C<br><span class="small">Sensação: ' + d.feelsLike + '°C</span>')}
        ${card('☁️ Condição', d.condition + '<br><span class="small">' + (d.rain ? '🌧 Com chuva' : '✅ Sem chuva') + '</span>')}
        ${card('💧 Umidade', d.humidity + '%')}
        ${card('🌬️ Vento', d.wind + ' km/h')}
        ${card('🌿 Qualidade do ar', d.air + '<br><span class="small">AQI: ' + d.aqi + '</span>')}
      </div>
      <div class='section card'>
        <h2>Recomendações para hoje</h2>
        <ul class='list'>
          ${recommendations(d).map(i => '<li>' + i + '</li>').join('')}
        </ul>
      </div>
    </div>`;
}

function card(t, v) {
  return `<div class='card mini'>
    <div class='title'>${t}</div>
    <div class='value'>${v}</div>
  </div>`;
}

function showError() {
  app.innerHTML = `
    <div class='center'>
      <div class='container' style='display:flex;align-items:center;justify-content:center;'>
        <div class='card center-card'>
          <h2>⚠️ Localização indisponível</h2>
          <p>Permita o acesso à localização para obter dados climáticos da sua região.</p>
          <button class='btn' onclick='startApp()' style='margin-top:24px'>Tentar novamente</button>
        </div>
      </div>
    </div>`;
}

home();
