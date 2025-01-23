
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


function SetWeatherInfoDefault() {
    
}
function getWeatherInfo() {

}
function SetWeatherInfo() {

    console.log(now_temp, today, current_location);
}
SetWeatherInfo();

search_btn.addEventListener("click", function() {
    cities_list.innerHTML = "";
    search_input.value = "";
    // Get The City Name

});
// :::::::::::::::::::::: End Getting Weather Info



