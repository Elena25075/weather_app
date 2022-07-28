function formatDate(date) {
  let currentDate = document.querySelector("#date");
  let day = date.getDay();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  if (minutes.toString().length > 1) {
    return (currentDate.innerHTML = `${days[day]} ${hour}:${minutes}`);
  } else {
    return (currentDate.innerHTML = `${days[day]} ${hour}:0${minutes}`);
  }
}

formatDate(new Date());

function currentWether(response) {
  let city = document.querySelector("#city");
  let userCity = response.data.name;
  city.innerHTML = userCity;
  let temperature = document.querySelector("#currentTemp");
  let currentTemperature = Math.round(response.data.main.temp);
  temperature.innerHTML = currentTemperature;
  console.log(response.data.main.temp);
  let condition = document.querySelector("#condition");
  let currentCondition = response.data.weather[0].main;
  condition.innerHTML = currentCondition;
  console.log(response.data.weather[0].main);
  let humidity = document.querySelector("#humidity");
  let currentHumidity = `${response.data.main.humidity}%`;
  humidity.innerHTML = currentHumidity;
  let wind = document.querySelector("#wind");
  let curretnWind = response.data.wind.speed;
  wind.innerHTML = `${curretnWind} km/h `;
}

function formatCity(event) {
  event.preventDefault();
  let input = document.querySelector("#user-city");
  let userCity = input.value;
  let apiKey = "fd796e85e2a0e40f557a4de490967886";
  let unit = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&units=${unit}&appid=${apiKey}`;
  axios.get(apiUrl).then(currentWether);
}

let form = document.querySelector("form");
let button = document.querySelector("#current");
form.addEventListener("submit", formatCity);
button.addEventListener("click", getPosition);

let currentTemp = document.querySelector("#currentTemp");
let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", convertToFahrenheit);
let celcius = document.querySelector("#celsius");
celcius.addEventListener("click", convertToCelsius);

function convertToFahrenheit(event) {
  event.preventDefault();
  let currentTemp = document.querySelector("#currentTemp");
  currentTemp.innerHTML = 88;
}

function convertToCelsius(event) {
  event.preventDefault();
  let currentTemp = document.querySelector("#currentTemp");
  currentTemp.innerHTML = 31;
}
let apiKey = "fd796e85e2a0e40f557a4de490967886";
let unit = "metric";
let userCity = "Kyiv";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&units=${unit}&appid=${apiKey}`;
axios.get(apiUrl).then(weather);

function weather(response) {
  console.log(response);
}

function positionWeather(response) {
  let city = document.querySelector("#city");
  let userCity = response.data.name;
  city.innerHTML = userCity;
  let temperature = document.querySelector("#currentTemp");
  let currentTemperature = Math.round(response.data.main.temp);
  temperature.innerHTML = currentTemperature;
  console.log(response.data.main.temp);
  let condition = document.querySelector("#condition");
  let currentCondition = response.data.weather[0].main;
  condition.innerHTML = currentCondition;
  console.log(response.data.weather[0].main);
  let humidity = document.querySelector("#humidity");
  let currentHumidity = `${response.data.main.humidity}%`;
  humidity.innerHTML = currentHumidity;
  let wind = document.querySelector("#wind");
  let curretnWind = response.data.wind.speed;
  wind.innerHTML = `${curretnWind} km/h `;
}

function handlePosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "fd796e85e2a0e40f557a4de490967886";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(positionWeather);
}

function getPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(handlePosition);
}
