const fakeWeatherData = {
  "Toronto": ["🌤️ Sunny, 24°C", "🌦️ Partly Cloudy, 20°C", "🌧️ Light Rain, 18°C"],
  "New York": ["☀️ Sunny, 27°C", "🌩️ Thunderstorms, 22°C", "🌤️ Warm Breeze, 25°C"],
  "London": ["🌫️ Foggy, 15°C", "🌧️ Drizzle, 16°C", "⛅ Cloudy, 17°C"],
  "Paris": ["☀️ Bright Sun, 26°C", "🌧️ Showers, 19°C", "⛅ Overcast, 21°C"],
  "Tokyo": ["🌞 Hot & Sunny, 30°C", "🌬️ Windy, 28°C", "🌧️ Rainy, 24°C"]
};

document.getElementById("city-select").addEventListener("change", function () {
  const city = this.value;
  const resultDiv = document.getElementById("weather-result");

  if (!city) {
    resultDiv.textContent = "";
    return;
  }

  // Get a random fake forecast
  const options = fakeWeatherData[city];
  const forecast = options[Math.floor(Math.random() * options.length)];

  resultDiv.innerHTML = `<strong>Weather in ${city}</strong><br>${forecast}`;
});
