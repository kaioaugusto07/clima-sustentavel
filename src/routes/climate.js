import express from 'express';
import axios from 'axios';
const router = express.Router();


router.get("/environment", async (req, res) => {
  try {
    const { lat, lon } = req.query;

    const key = process.env.OPENWEATHER_KEY;

    const weatherUrl =
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric&lang=pt_br`;

    const airUrl =
      `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${key}`;

    const [weather, air] = await Promise.all([
      axios.get(weatherUrl),
      axios.get(airUrl)
    ]);

    const aqi = air.data.list[0].main.aqi;
    const airQualityMap = {
      1: "Boa",
      2: "Razoável",
      3: "Moderada",
      4: "Ruim",
      5: "Muito Ruim"
    };

    const data = {
      city: weather.data.name,
      state: "",
      temp: weather.data.main.temp,
      feelsLike: weather.data.main.feels_like,
      rain: weather.data.weather[0].main.includes("Rain"),
      humidity: weather.data.main.humidity,
      wind: weather.data.wind.speed,
      condition: weather.data.weather[0].description.charAt(0).toUpperCase() + weather.data.weather[0].description.slice(1),
      air: airQualityMap[aqi] || "Desconhecida",
      aqi: aqi
    };

    res.json(data);

  } catch (error) {
  console.log(error.response?.data || error.message);
  res.status(500).json({
    error: "Erro ao buscar clima",
    details: error.response?.data || error.message
  });
}
});

export const climateRoutes = router;