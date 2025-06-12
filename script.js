document.getElementById("city-select").addEventListener("change", function () {
  const city = this.value;
  const resultDiv = document.getElementById("weather-result");

  if (!city) {
    resultDiv.textContent = "";
    return;
  }

  // wttr.in gives simple weather info without API key
  const url = `https://wttr.in/${city}?format=3`;

  fetch(url)
    .then(res => res.text())
    .then(data => {
      resultDiv.textContent = data;
    })
    .catch(() => {
      resultDiv.textContent = "Could not fetch weather.";
    });
});
