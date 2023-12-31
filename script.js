const inputCity = document.querySelector(".inputCity");
const searchCity = document.querySelector(".searchCity");
const cityName = document.querySelector(".cityName");
const tempreature = document.querySelector(".tempreature");
const weather = document.querySelector(".weather");

const searchForCityWeather = function () {
  const cityN = inputCity.value.trim();
  const key = "7aaf5b748a0e0a7261ef88ef45daf72d";

  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${cityN}&limit=5&appid=${key}`
  )
    .then((resp) => resp.json())
    .then((data) => {
      const cityData = data[0];
      console.log(cityData);
      cityName.innerHTML = `${cityData.name}, ${cityData.country}`;

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${cityData.lat}&lon=${cityData.lon}&units=metric&appid=${key}`
      )
        .then((resp) => resp.json())
        .then((weatherData) => {
          console.log(weatherData);
          tempreature.innerHTML = `${weatherData.main.temp}°C`;
          weather.innerHTML = weatherData.weather[0].main;
        });
    });
};

searchCity.addEventListener("click", searchForCityWeather);
