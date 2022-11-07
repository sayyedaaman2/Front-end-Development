const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
const form = document.querySelector('form');
const serach = document.querySelector("#serach");
const wheater = document.querySelector("#weather");



// const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

// const IMG_URL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

const getWeatherData = async (city) => {
    wheater.innerHTML = `<h2> Loading...</h2>`;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    //console.log(response);
    const data = await response.json();
    showWeather(data);
}

const showWeather = (data) => {
    console.log(data);
    if(data.cod == "404"){
        wheater.innerHTML = `<h2> City not found</h2>`;
        return;
    }
    wheater.innerHTML = `
    <div class="output">
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
    </div>
    <div>
        <h1>${data.name}</h1>
        <h4>${data.sys.country}</h4>
        <h2>${data.main.temp} ℃</h2>
        <h4>${data.weather[0].main}</h4>
    </div>
    `
}

form.addEventListener(
    "submit",
    function (event) {
        console.log(serach.value);
        getWeatherData(serach.value);
        event.preventDefault();

    }
)