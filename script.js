function refreshTime() {
  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = moment.tz.guess().replace("_", " ").split("/")[1];
  let currentTime = document.querySelector("#current-time");
  currentTime.innerHTML = moment().format("hh:mm:ss [<small>]A[</small>]");
  let currentDate = document.querySelector("#current-date");
  currentDate.innerHTML = moment().format("D/MMM/YYYY");

  let tokyoTime = document.querySelector("#onetime");
  tokyoTime.innerHTML = moment()
    .tz("Asia/Tokyo")
    .format("hh:mm:ss [<small>]A[</small>]");
  let tokyoDate = document.querySelector("#onedate");
  tokyoDate.innerHTML = moment().tz("Asia/Tokyo").format("D/MMM/YYYY");

  let saopauloTime = document.querySelector("#twotime");
  saopauloTime.innerHTML = moment()
    .tz("America/Sao_Paulo")
    .format("hh:mm:ss [<small>]A[</small>]");
  let saopauloDate = document.querySelector("#twodate");
  saopauloDate.innerHTML = moment()
    .tz("America/Sao_Paulo")
    .format("D/MMM/YYYY");

  let madridTime = document.querySelector("#threetime");
  madridTime.innerHTML = moment()
    .tz("Europe/Madrid")
    .format("hh:mm:ss [<small>]A[</small>]");
  let madridDate = document.querySelector("#threedate");
  madridDate.innerHTML = moment().tz("Europe/Madrid").format("D/MMM/YYYY");
}
refreshTime();
setInterval(refreshTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector(".cities");
  citiesElement.innerHTML = cityTimeZone;
  citiesElement.innerHTML = `<div id="cityOne">
  <h2>${cityName}</h2>
          <div class="city-one-details">
            <div class="city-one-weather">
              <div class="weather-icon" id="tokyo-icon"></div>
              <div class="weather-temperature" id="tokyo-weather"></div>
              <span class="weather-degrees"><strong></strong></span>
            </div>
            <div class="city-one-time">
              <div class="time" id="onetime">${cityTime.format(
                "hh:mm:ss [<small>]A[</small>]"
              )}</div>
              <div class="date" id="onedate">${cityTime.format(
                "D/MMM/YYYY"
              )}</div>
            </div>
          </div>
           <div class="weather-description"></div>
           </div>
      <div class="backlink"><a href="index.html">Back to all cities</a></div>`;
}

let selectCity = document.querySelector("#cities-select");
selectCity.addEventListener("change", updateCity);

function showWeather(response) {
  console.log(response.data);
  let currentWeather = document.querySelector("#current-weather");
  currentWeather.innerHTML = Math.round(response.data.temperature.current);
  let icon = document.querySelector("#current-icon");
  icon.innerHTML = `<img
            src=${response.data.condition.icon_url}
                      class="weather-icon"/> `;
  let description = document.querySelector(".weather-description");
  description.innerHTML = response.data.condition.description;
}

let city = moment.tz.guess().replace("_", " ").split("/")[1];
//console.log(city);
let apiKey = `4c08634eb8b52t7acf769o96f5812f64`;
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
axios.get(apiUrl).then(showWeather);
