const api_key = "3c1a713cc28655d7fafa80502786ab54";
const api_url =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const get_input = document.querySelector(".input");
const btn_icon = document.querySelector(".icon");

// date and time portion
const date_time = new Date();
const date_opt = {
  weekday: "long",
  month: "long",
  day: "2-digit",
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
  const city = get_input.value;

  // weather api
  const response = await fetch(api_url + city + `&appid=${api_key}`);

  if (response.status === 404) {
    document.querySelector(".cityDetail").style.display = "none";
    document.querySelector(".error").style.display = "block";
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;

    let change_background = document.querySelector(".main");
    let shortimg_background = document.querySelector(".shortimg");
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "<sup><b>o</b></sup> C";
    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".wind").innerHTML = data.main.pressure;
    document.querySelector(".feelslike").innerHTML = data.main.feels_like;

    document.querySelector(".speed").innerHTML = data.wind.speed;

    if (data.weather[0].main == "Cloudy") {
      document.querySelector(".feelslike").innerHTML = `Cloudy Today`;
      change_background.style.backgroundImage =
        " linear-gradient(rgba(22, 18, 22, 0.27), rgba(41, 39, 39, 0.336)), url(./assets/cloudytoday.jpg)";
      shortimg_background.style.backgroundImage = "url(./assets/cloudy.png)";


    } else if (data.weather[0].main == "Clear") {
      document.querySelector(".feelslike").innerHTML = `Clear Today`;
      change_background.style.backgroundImage =
        " linear-gradient(rgba(22, 18, 22, 0.27), rgba(41, 39, 39, 0.336)), url(./assets/cleartoday.jpg)";
        shortimg_background.style.backgroundImage = "url(./assets/clear.png)";
        
        
    } else if (data.weather[0].main == "Sunny") {
        document.querySelector(".feelslike").innerHTML = `Mostly Sunny`;
        change_background.style.backgroundImage =
        " linear-gradient(rgba(22, 18, 22, 0.27), rgba(41, 39, 39, 0.336)), url(./assets/cleartoday.jpg)";
        shortimg_background.style.backgroundImage = "url(./assets/clear.png)";


    } else if (data.weather[0].main == "rain") {
      document.querySelector(".feelslike").innerHTML = `Rain Expected`;
      change_background.style.backgroundImage =
        " linear-gradient(rgba(22, 18, 22, 0.27), rgba(41, 39, 39, 0.336)), url(./assets/drizztoday.jpg)";
      shortimg_background.style.backgroundImage = "url(./assets/heavy_rain.png)";


    } else if (data.weather[0].main == "Drizzle" ||data.weather[0].main == "mist"||data.weather[0].main == "smoke" ||data.weather[0].main == "haze") {
      document.querySelector(".feelslike").innerHTML = `Drizzle Expected`;
      change_background.style.backgroundImage =
        " linear-gradient(rgba(22, 18, 22, 0.27), rgba(41, 39, 39, 0.336)), url(./assets/rain.jpg)";
      shortimg_background.style.backgroundImage = "url(./assets/rain.png)";


    } else if (data.weather[0].main == "Snow" || data.weather[0].main == "	light snow" ||data.weather[0].main == "heavy snow") {
      document.querySelector(".feelslike").innerHTML = `Snow fall`;
      change_background.style.backgroundImage =
        " linear-gradient(rgba(22, 18, 22, 0.27), rgba(41, 39, 39, 0.336)), url(./assets/snowtoday.jpg)";
      shortimg_background.style.backgroundImage = "url(./assets/rain.png)";

      
    }else{
        document.querySelector(".feelslike").innerHTML = `Sunny Today`;
      change_background.style.backgroundImage =
        " linear-gradient(rgba(22, 18, 22, 0.27), rgba(41, 39, 39, 0.336)), url(./assets/sunnytoday.png)";
      shortimg_background.style.backgroundImage = "url(./assets/sunny.png)";

    }
  }
};

btn_icon.addEventListener("click", () => {
  get();
});
