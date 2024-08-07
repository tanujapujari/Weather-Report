const apikey = "f3758ea19a802cabb5d6781f048d830e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weatherImg img");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&APPID=${apikey}`);
    var data = await response.json();
    

    document.querySelector(".percentage").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".place").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png";
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png";
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/rain.png";
    }
    else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "images/rain.png";
    }
    document.querySelector(".weather").style.display="block"
}
searchbtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})