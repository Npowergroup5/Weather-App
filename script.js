document.getElementById("city-select").addEventListener("change", function () {
  const city = this.value;
  const resultDiv = document.getElementById("weather-result");

  if (!city) {
    resultDiv.textContent = "";
    return;
  }

  const encodedCity = encodeURIComponent(city);
  const url = `https://wttr.in/${encodedCity}?format=j1`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      return response.json();
    })
    .then(data => {
      const current = data.current_condition[0];
      const temperature = current.temp_C;
      const description = current.weatherDesc[0].value;
      const feelsLike = current.FeelsLikeC;
      const humidity = current.humidity;

      resultDiv.innerHTML = `
        <strong>Weather in ${city}</strong><br>
        ${description}<br>
        🌡️ Temp: ${temperature}°C (Feels like ${feelsLike}°C)<br>
        💧 Humidity: ${humidity}%
      `;
    })
    .catch(error => {
      resultDiv.textContent = "Could not fetch weather. Try again later.";
      console.error("Fetch error:", error);
    });
});
