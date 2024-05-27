function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  console.log(response.data.temperature.current);

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "c55ftfcaa714e3e000aee3a34e77cbo8";
  let apiUrl =
    "https://api.shecodes.io/weather/v1/current?query={query}&key={key}";
  axios.get(apiUrl).then(refreshWeather);
}

document.addEventListener("DOMContentLoaded", (event) => {
  function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    searchCity(searchInput.value);
  }
  let searchFormElement = document.querySelector("#search-form");
  if (searchFormElement) {
    searchFormElement.addEventListener("submit", handleSearchSubmit);
  } else {
    console.error('Element with id "search-form" not found.');
  }
});

searchCity("Cape Town");
