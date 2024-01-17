function refreshTime() {
  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = moment.tz.guess().replace("_", " ").split("/")[1];
  let currentTime = document.querySelector("#current-time");
  currentTime.innerHTML = moment().format("hh:mm:ss [<small>]A[</small>]");
  let currentDate = document.querySelector("#current-date");
  currentDate.innerHTML = moment().format("D MMMM YYYY");

  let tokyoTime = document.querySelector("#onetime");
  tokyoTime.innerHTML = moment()
    .tz("Asia/Tokyo")
    .format("hh:mm:ss [<small>]A[</small>]");
  let tokyoDate = document.querySelector("#onedate");
  tokyoDate.innerHTML = moment().tz("Asia/Tokyo").format("D MMMM YYYY");

  let saopauloTime = document.querySelector("#twotime");
  saopauloTime.innerHTML = moment()
    .tz("America/Sao_Paulo")
    .format("hh:mm:ss [<small>]A[</small>]");
  let saopauloDate = document.querySelector("#twodate");
  saopauloDate.innerHTML = moment()
    .tz("America/Sao_Paulo")
    .format("D MMMM YYYY");

  let barcelonaTime = document.querySelector("#threetime");
  barcelonaTime.innerHTML = moment()
    .tz("Europe/Madrid")
    .format("hh:mm:ss [<small>]A[</small>]");
  let barcelonaDate = document.querySelector("#threedate");
  barcelonaDate.innerHTML = moment().tz("Europe/Madrid").format("D MMMM YYYY");
}
refreshTime();
setInterval(refreshTime, 1000);
