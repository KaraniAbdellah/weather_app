// Change The Dark Mode
let mode_dark_light = document.querySelector("button.mode_dark_light");
mode_dark_light.addEventListener("click", function () {
    if (document.body.classList.contains("dark_bgColor")) {
        let elements_colors = document.querySelectorAll(".white_color");
        elements_colors.forEach((ele) => {
            ele.classList.toggle("dark_color");
            ele.classList.toggle("white_color");
        });
        mode_dark_light.innerHTML = `<i class="fa-solid fa-moon"></i>`;
        document.body.classList.toggle("white_bgColor");
        document.body.classList.toggle("dark_bgColor");
    } else {
        let elements_colors = document.querySelectorAll(".dark_color");
        elements_colors.forEach((ele) => {
            ele.classList.toggle("dark_color");
            ele.classList.toggle("white_color");
        });
        mode_dark_light.innerHTML = `<i class="fa-solid fa-sun"></i>`;
        document.body.classList.toggle("white_bgColor");
        document.body.classList.toggle("dark_bgColor");
    }
});



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
    cities_list.innerHTML = data.slice(0, 3).map(city => `
        <p>
            <i class="fa-solid fa-location-dot white_color"></i>
            <span class="white_color">${city.address.name}</span>
        </p>
    `).join("");
    document.querySelectorAll(".cities_list p").forEach(ele => {
        ele.addEventListener("click", function(){
            search_input.value = ele.firstElementChild.nextElementSibling.innerText;
        });
    });
});

search_btn.addEventListener("click", function() {
    cities_list.innerHTML = "";
});




// Get The Info About Weather [Default is Current Location]
async function getCurrentLocation() {
    let my_api_key = "f89627d3b9004e27ac2b2a7d1baedaab";
    let reponse = await fetch(`https://api.geoapify.com/v1/ipinfo?apiKey=${my_api_key}`);
    let data = await reponse.json();
    return data.city.name;
}

// Set The Weather All Info
function SetWeatherInfo() {
    let now_temp = document.querySelector("");
}




