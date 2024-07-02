const api_key = "3c1a713cc28655d7fafa80502786ab54";
const api_url =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const srch_input = document.querySelector(".srch_input");
const srch_btn = document.querySelector(".srch_btn");
const srch_icon = document.querySelector(".srch_icon");

// date and time portion
const date_time = new Date();
const date_opt = {
  weekday: "short",
  day: "2-digit",
  month: "long",
  year: "numeric",
};
const current_date = new Date().toLocaleDateString("en-US", date_opt);

const time_opt = {
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
};
const current_time = new Date().toLocaleTimeString("en-US", time_opt);
document.querySelector(".time").innerHTML = current_time;
document.querySelector(".date").innerHTML = current_date;

// date and time portion ends here
const get = async () => {
  const city = srch_input.value;

  // weather api
  const response = await fetch(api_url + city + `&appid=${api_key}`);

  if (response.status === 404) {
    document.querySelector(".image-weather-detail").style.display = "none";
    document.querySelector(".error").style.display = "flex";
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;

    let change_background = document.querySelector(".sub-main-box");
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "<sup><b>o</b></sup> C";
    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".pre").innerHTML = data.main.pressure;
    document.querySelector(".feelslike").innerHTML = data.main.feels_like;
    3;

    document.querySelector(".wind").innerHTML = data.wind.speed;

    if (data.weather[0].main === "Clouds") {
      document.querySelector(".feelslike").innerHTML = `Cloudy Today`;
      change_background.style.backgroundImage =
        "linear-gradient(135deg,rgba(22, 18, 22, 0.27),rgba(41, 39, 39, 0.849)), url(./assets/cloudy-today.jpg)";
    } else if (data.weather[0].main === "Clear") {
      document.querySelector(".feelslike").innerHTML = `Drizzly Day`;
      change_background.style.backgroundImage =
        "linear-gradient(135deg,rgba(22, 18, 22, 0.27),rgba(41, 39, 39, 0.849)), url(./assets/drizzly-today.jpg)";
    } else if (data.weather[0].main === "Rain") {
      document.querySelector(".feelslike").innerHTML = `Rain Expected`;
      change_background.style.backgroundImage =
        "linear-gradient(135deg,rgba(22, 18, 22, 0.27),rgba(41, 39, 39, 0.849)), url(./assets/rainy-today.jpg)";
    } else if (data.weather[0].main === "Drizzle") {
      document.querySelector(".feelslike").innerHTML = `Drizzle Expected`;
      change_background.style.backgroundImage =
        "linear-gradient(135deg,rgba(22, 18, 22, 0.27),rgba(41, 39, 39, 0.849)), url(./assets/drizzly-today.jpg)";
    } else if (data.weather[0].main === "snow") {
      document.querySelector(".feelslike").innerHTML = `Snow fall Expected`;
      change_background.style.backgroundImage =
        "linear-gradient(135deg,rgba(22, 18, 22, 0.27),rgba(41, 39, 39, 0.849)), url(./assets/mist-today.jpg)";
    }
  }
};

srch_icon.addEventListener("click", () => {
  get();
});
