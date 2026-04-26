import { getRecommendations } from './recommendation.js';

const app = document.getElementById('app');

function pickRandom(arr, qty = 2) {
const shuffled = [...arr].sort(() => 0.5 - Math.random());
return shuffled.slice(0, qty);
}


function home() {
     app.innerHTML = 
       `<div class='center'>
          <div class='container'>
            <div class='card'>
              <h1>Clima Inteligente</h1>
              <p>Dados climáticos da sua região com recomendações ambientais em tempo real.</p>
              <button class='btn' onclick='startApp()'>Usar minha localização</button>
            </div>
          </div>
        </div>`
}

window.home = home;

async function startApp() {
  loading();

  try {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;

        const response = await fetch(
          `http://localhost:3000/api/environment?lat=${lat}&lon=${lon}`
        );

        const data = await response.json();

        showDashboard(data);
      },

      (error) => {
        showError();
      }
    );

  } catch (error) {
    showError();
  }
}

window.startApp = startApp;

function loading() {
  app.innerHTML = `
    <div class='center'>
      <div class='container'>
        <div class='card'>
          <h1>Consultando dados</h1>
          <div class='spinner'></div>
          <p>Obtendo sua localização...<br>Consultando dados ambientais...</p>
        </div>
      </div>
    </div>
  `;
}



function recommendations(d) {
  const r = [];

  function pickRandom(arr, qty = 2) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, qty);
  }


  // TEMPERATURA

  if (d.temp > 30) {
    const rec = getRecommendations('temperature', 'hot');
    if (rec) r.push(...pickRandom(rec.tips, 2));

  } else if (d.temp >= 15 && d.temp <= 30) {
    const rec = getRecommendations('temperature', 'mild');
    if (rec) r.push(...pickRandom(rec.tips, 2));

  } else {
    const rec = getRecommendations('temperature', 'cold');
    if (rec) r.push(...pickRandom(rec.tips, 2));
  }


  // CLIMA

  const condition = d.condition.toLowerCase();

  if (condition.includes('limpo') || condition.includes('clear')) {
    const rec = getRecommendations('weather', 'clear');
    if (rec) r.push(...pickRandom(rec.tips, 2));

  } else if (
    condition.includes('nublado') ||
    condition.includes('nuvens') ||
    condition.includes('cloud')
  ) {
    const rec = getRecommendations('weather', 'cloudy');
    if (rec) r.push(...pickRandom(rec.tips, 2));

  } else if (
    condition.includes('chuva') ||
    condition.includes('rain') ||
    condition.includes('garoa')
  ) {
    const rec = getRecommendations('weather', 'rain');
    if (rec) r.push(...pickRandom(rec.tips, 2));

  } else if (
    condition.includes('trovoada') ||
    condition.includes('storm') ||
    condition.includes('thunder')
  ) {
    const rec = getRecommendations('weather', 'storm');
    if (rec) r.push(...pickRandom(rec.tips, 2));

  } else if (
    condition.includes('névoa') ||
    condition.includes('mist') ||
    condition.includes('fog')
  ) {
    const rec = getRecommendations('weather', 'mist');
    if (rec) r.push(...pickRandom(rec.tips, 2));
  }


  // UMIDADE

  if (d.humidity < 40) {
    const rec = getRecommendations('humidity', 'low');
    if (rec) r.push(...pickRandom(rec.tips, 2));

  } else if (d.humidity >= 40 && d.humidity <= 70) {
    const rec = getRecommendations('humidity', 'normal');
    if (rec) r.push(...pickRandom(rec.tips, 2));

  } else {
    const rec = getRecommendations('humidity', 'high');
    if (rec) r.push(...pickRandom(rec.tips, 2));
  }

  // VENTO

  if (d.wind <= 10) {
    const rec = getRecommendations('wind', 'low');
    if (rec) r.push(...pickRandom(rec.tips, 2));

  } else if (d.wind <= 25) {
    const rec = getRecommendations('wind', 'moderate');
    if (rec) r.push(...pickRandom(rec.tips, 2));

  } else {
    const rec = getRecommendations('wind', 'strong');
    if (rec) r.push(...pickRandom(rec.tips, 2));
  }


  // QUALIDADE DO AR

  if (d.aqi === 1) {
    const rec = getRecommendations('air_quality', 'good');
    if (rec) r.push(...pickRandom(rec.tips, 2));

  } else if (d.aqi === 2) {
    const rec = getRecommendations('air_quality', 'moderate');
    if (rec) r.push(...pickRandom(rec.tips, 2));

  } else if (d.aqi === 3) {
    const rec = getRecommendations('air_quality', 'regular');
    if (rec) r.push(...pickRandom(rec.tips, 2));

  } else if (d.aqi === 4) {
    const rec = getRecommendations('air_quality', 'bad');
    if (rec) r.push(...pickRandom(rec.tips, 2));

  } else {
    const rec = getRecommendations('air_quality', 'very_bad');
    if (rec) r.push(...pickRandom(rec.tips, 2));
  }

  // REMOVE DUPLICADAS E LIMITA

  const unique = [...new Set(r)];

  return pickRandom(unique, 6);
}

function showDashboard(d) {
        console.log(d);
     app.innerHTML = 
     `<div class='container'>
        <div class='topbar'>
          <h1>Painel Climático</h1>
          <button class='btn small' onclick='home()'>↩ Voltar</button>
        </div>
        <div class='grid'>
        ${card('📍 Localização', d.city + ' - ' + d.state)}
        ${card('🌡️ Temperatura', d.temp + '°C<br><span class="small">Sensação: ' + d.feelsLike + '°C</span>')}
        ${card('☀️ Clima', d.condition + '<br><span class="small">' + (d.rain ? 'Com chuva' : 'Sem chuva') + '</span>')}
        ${card('💧 Umidade', d.humidity + '%')}
        ${card('🌬️ Vento', d.wind + ' km/h')}
        ${card('🌿 Qualidade do ar', d.air + '<br><span class="small">AQI: ' + d.aqi + '</span>')}
      </div>
      <div class='section card'>
        <h2 style='margin-bottom:14px'>Recomendações para hoje!</h2>
          <ul class='list'>
            ${recommendations(d).map(i => '<li>' + i + '</li>').join('')}
          </ul>
       </div>
     </div>` 
}
function card(t, v) {
     return `<div class='card mini'>
                <div class='title'>${t}</div>
                <div class='value'>${v}</div>
             </div>`
}

function showError() {
  app.innerHTML = `
    <div class='center'>
      <div class='container'>
        <div class='card'>
          <h2>Não foi possível acessar sua localização</h2>
          <p>Permita o acesso à localização para obter dados climáticos.</p>
          <button class='btn' onclick='startApp()'>Tentar novamente</button>
        </div>
      </div>
    </div>
  `;
}

home();