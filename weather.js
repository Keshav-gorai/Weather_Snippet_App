const inputBox = document.querySelector('.input-box');
const abs = document.querySelector('.abs');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const weather_report = document.querySelector('.weather-report');
const humidity = document.getElementById('humidity')
const wind_speed = document.getElementById('wind-speed')
const location_not_found = document.querySelector('.location-not-found')
const weather_zone = document.querySelector('.weather-zone')

async function checkWeather(city){
    const api_key = "faa94a721b0ad8d06af20445b3804d20"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

    const weather_data = await fetch(`${url}`).then(response => response.json())

    if (weather_data=== `404`){
        location_not_found.style.display = "flex";
        weather_zone.style.display = "none";
        console.log("Error");
        return
        

    }
   
    location_not_found.style.display = "none";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273)}°C`
    weather_report.innerHTML = `${weather_data.weather[0].description}`
    humidity.innerHTML = `${weather_data.main.humidity}%`
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`

    switch (weather_data.weather[0].main) {
        case 'Cloud':
            weather_img.src = "cloud.png"
        break;

        case 'Clear':
            weather_img.src = "clear.png"
        break;

        case 'Mist':
            weather_img.src = "mist.png"
        break;

        case 'Rain':
            weather_img.src = "rain.png"
        break;

        case 'Snow':
            weather_img.src = "snow.png"
        break;

        default:
            weather_img.src = "cloud.png";
            break;
    
        
    }
    // console.log(weather_data);
}

abs.addEventListener('click', ()=>{
    checkWeather(inputBox.value)
})