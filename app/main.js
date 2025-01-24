
// :::::::::::::::::::::: Start Dark Mode
// Change The Dark Mode
let mode_dark_light = document.querySelector("button.mode_dark_light");
mode_dark_light.addEventListener("click", function () {
    if (document.body.classList.contains("dark_bgColor_body")) {
        ChangeToLightMode();
        // Set The LocalStorage
        window.localStorage.setItem("mode", "light");
    } else {
        ChangeToDarkMode();
        window.localStorage.setItem("mode", "dark");
    }
});

// Save The User Mode
let user_mode = window.localStorage.getItem("mode");
if (user_mode == "light") ChangeToLightMode();

// Function That Change Page to Dark Mode
function ChangeToDarkMode() {
    // Change The Text Color
    let elements_colors = document.querySelectorAll(".dark_color");
    elements_colors.forEach((ele) => {
        ele.classList.toggle("dark_color");
        ele.classList.toggle("white_color");
    });
    // Change The Icon for Mode
    mode_dark_light.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    // Change The Body Color
    document.body.classList.toggle("white_bgColor_body");
    document.body.classList.toggle("dark_bgColor_body");
    // Change The Background Color
    let dark_bgColor_ele = document.querySelectorAll(".white_bgColor");
    dark_bgColor_ele.forEach((ele) => {
        ele.classList.toggle("dark_bgColor");
        ele.classList.toggle("white_bgColor");
    });
}

// Function That Change Page to Light Mode
function ChangeToLightMode() {
    // Change The Text Color
    let elements_colors = document.querySelectorAll(".white_color");
    elements_colors.forEach((ele) => {
        ele.classList.toggle("dark_color");
        ele.classList.toggle("white_color");
    });
    // Change The Icon for Mode
    mode_dark_light.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    // Change The Body Color
    document.body.classList.toggle("white_bgColor_body");
    document.body.classList.toggle("dark_bgColor_body");
    // Change The Background Color
    let dark_bgColor_ele = document.querySelectorAll(".dark_bgColor");
    dark_bgColor_ele.forEach((ele) => {
        ele.classList.toggle("dark_bgColor");
        ele.classList.toggle("white_bgColor");
    });
}
// :::::::::::::::::::::: End Dark Mode



// :::::::::::::::::::::: Start Search Bar
// Search Bar Seggestion
const search_btn = document.querySelector("button.search_btn");
const search_input = document.querySelector(".bar_input input");
const cities_list = document.querySelector(".cities_list");

async function fetchCities() {
    let letter = search_input.value;
    const my_api_key = "pk.8c7aff324a3accac1c7e5b2f0df1dde5";
    try {
        const reponse = await fetch(`https://api.locationiq.com/v1/autocomplete?key=${my_api_key}&q=${letter}`);
        return await reponse.json();
    } catch (error) {
        return []; 
    }
}

async function fetchCities() {
    const letter = search_input.value.trim();
    const my_api_key = "pk.8c7aff324a3accac1c7e5b2f0df1dde5";
    try {
        const response = await fetch(`https://api.locationiq.com/v1/autocomplete?key=${my_api_key}&q=${letter}`);
        return await response.json();
    } catch (error) {
        console.error("Error Fecthing The Data To Get The Suggestion ...");
        return [];
    }
}

search_input.addEventListener("input", async function () {
    const data = await fetchCities();
    let text_class = "white_color";
    if (document.body.classList.contains("white_bgColor_body")) text_class = "dark_color";
    cities_list.innerHTML = data.slice(0, 3).map(city => `
        <p>
            <i class="fa-solid fa-location-dot ${text_class}"></i>
            <span class="${text_class}">${city.address.name}</span>
        </p>
    `).join("");
    document.querySelectorAll(".cities_list p").forEach(ele => {
        ele.addEventListener("click", function(){
            search_input.value = ele.firstElementChild.nextElementSibling.innerText;
        });
    });
});
// :::::::::::::::::::::: End Search Bar


// :::::::::::::::::::::: Start Getting Weather Info
// Get The Info About Weather [Default is Current Location]
async function getCurrentLocation() {
    let my_api_key = "f89627d3b9004e27ac2b2a7d1baedaab";
    let reponse = await fetch(`https://api.geoapify.com/v1/ipinfo?apiKey=${my_api_key}`);
    let data = await reponse.json();
    return data.city.name;
}

// Now Section Variables
let now_temp = document.querySelector("span.tem_value");
let today = document.querySelector(".today_value_date span");
let current_location = document.querySelector(".location_value span");
let weather_img = now_temp.nextElementSibling;
// Todays HightLights Section Variables
let pm25 = document.querySelector("span.pm25");
let so2 = document.querySelector("span.so2");
let no2 = document.querySelector("span.no2");
let o3 = document.querySelector("span.o3");

let sunrise_content = document.querySelector(".sunrise_content");
let sunset_content = document.querySelector(".sunset_content");
let pressure_content = document.querySelector(".pressure_content");
let humidity_content = document.querySelector(".humidity_content");
let visibility_content = document.querySelector(".visibility_content");
let feels_like_content = document.querySelector(".feels_like_content");


// Function To Get The Current Location
async function fetchCurrentLocation() {
    let my_api_key_location = "f89627d3b9004e27ac2b2a7d1baedaab";
    let reponse_cur = await fetch(`https://api.geoapify.com/v1/ipinfo?apiKey=${my_api_key_location}`);
    let data = await reponse_cur.json();
    getWeatherApi(data.city.name);
}

// Set The Image
function SetImage(WeatherState) {
    console.log(WeatherState);
    // Here We Must Generate The Weather Image Depending On WeatherState
    // weather_img.src = "amcharts_weather_icons_1.0.0/animated/day.svg";
    switch (WeatherState) {
        case 'Clouds':
            weather_img.src = 'amcharts_weather_icons_1.0.0/animated/cloudy.svg';
            break;
        case 'Rain':
            weather_img.src = 'amcharts_weather_icons_1.0.0/animated/rainy-7.svg';
            break;
        case 'Snow':
            weather_img.src = 'amcharts_weather_icons_1.0.0/animated/snowy-6.svg';
            break;
        default:
            weather_img.src = 'amcharts_weather_icons_1.0.0/animated/day.svg';
            break;
    }
}

// Set Date
function SetDateForToday() {
    const date = new Date();
    const monthIndex = date.getMonth();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthName = months[monthIndex];

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = daysOfWeek[date.getDay()];

    today.textContent = `${dayName}  ${date.getDate()}, ${monthName}`;
}

async function getWeatherApi(city_name) {
    let my_api_key_weather = "76d59da09bf6ff9fea4a24d945516588";
    // let city_name = "azilal";

    try {
        let reponse1 = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${my_api_key_weather}`);
        let data1 = await reponse1.json();
    
        let lat = data1.coord.lat; let lon = data1.coord.lon;
        let reponse2 = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${my_api_key_weather}`);
        let data2 = await reponse2.json();
    
        // Set The Items With Weather Info
        now_temp.textContent = (Number(data1.main.temp) - 273.15).toFixed(2);
        current_location.textContent = data1.name;
        SetDateForToday();
        SetImage(data1.weather[0].main);
    
        if (data2.list && data2.list[0]) {
            pm25.textContent = (data2.list[0].components.pm2_5).toFixed(1);
            so2.textContent = (data2.list[0].components.so2).toFixed(1);
            no2.textContent = (data2.list[0].components.no2).toFixed(1);
            o3.textContent = (data2.list[0].components.o3).toFixed(1);
        }
        
        sunrise_content.textContent = new Date(data1.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        sunset_content.textContent = new Date(data1.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        pressure_content.textContent = data1.main.pressure;
        humidity_content.textContent = data1.main.humidity;
        visibility_content.textContent = (data1.visibility / 1000).toFixed(1);
        feels_like_content.textContent = (data1.main.feels_like - 273.15).toFixed(2);
    } catch (error) {
        console.log("Error Fetching The Data");
        fetchCurrentLocation();
    }

}

search_btn.addEventListener("click", function() {
    // Get The City Name && Set the Weather Info
    let city_name = search_input.value;
    getWeatherApi(city_name);

    // Set The Inputs [list of suggestion and input value]
    cities_list.innerHTML = "";
    search_input.value = "";

});

// Set Info As Default
document.addEventListener("DOMContentLoaded", fetchCurrentLocation);

// Custom The Current Location
let current_location_btn = document.querySelector(".current_location_btn");
current_location_btn.addEventListener("click", fetchCurrentLocation);
// :::::::::::::::::::::: End Getting Weather Info


// :::::::::::::::::::::: Start Add & Delete From Favorite
let add_to_favorite_btn = document.querySelector(".add_btn_favorite");
let favorites_list = document.querySelector(".favorites .content");
let Allfavorite = JSON.parse(localStorage.getItem("Allfavorite")) || [];

function AddToFavorite(city_name, tem_value_fav) {
    let favorite_content = document.createElement("div");
    favorite_content.className = "favorite";
    favorite_content.innerHTML = `
        <p class="temp_value_fav">
            <span class="white_color">${tem_value_fav}°C</span>
        </p>
        <p class="location_value_fav">
            <span class="">${city_name}</span>
        </p>
        <p class="trach_fav">
            <i class="fa-solid fa-trash"></i>
        </p>
    `;
    favorites_list.append(favorite_content);
}

add_to_favorite_btn.addEventListener("click", function() {
    // Get The Temperature && City Name
    let tem_value_fav = now_temp.textContent;
    let city_name = current_location.textContent;

    // Loop Thought The Elments && Check If The Element Already Exit
    let check = true;
    for (let i = 0; i < Allfavorite.length; i++) {
        if (Allfavorite[i].city_name == city_name) {
            check = false; break;
        }
    }
    if (check) {
        // Add to LocalStorage
        Allfavorite.push({city_name: city_name, tem_value_fav: tem_value_fav});
        window.localStorage.setItem("Allfavorite", JSON.stringify(Allfavorite));
        // Add To Web Page
        AddToFavorite(city_name, tem_value_fav);
    }
    else console.log("Element Already Exit");
});


// Set The Favorite ELement in DOMContentLoaded
window.addEventListener("DOMContentLoaded", function() {
    Allfavorite.forEach(function (param) {
        AddToFavorite(param.city_name, param.tem_value_fav);
    });
});




// :::::::::::::::::::::: End Add & Delete From Favorite










