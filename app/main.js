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
let search_btn = document.querySelector("button.search_btn");
let search_input = document.querySelector(".bar_input input");
let cities_list = document.querySelector(".cities_list");
search_btn.addEventListener("click", function () {
    let my_api_key = "pk.8c7aff324a3accac1c7e5b2f0df1dde5";
    let letter = search_input.value;
    fetch(`https://api.locationiq.com/v1/autocomplete?key=${my_api_key}&q=${letter}`).then((reponse) => {
        let data = reponse.json();
        return data;
    }).then((data) => {
        data.forEach((ele) => {
            let myParagraph = document.createElement("p");
            myParagraph.innerHTML = `
                <i class="fa-solid fa-location-dot"></i>
                <span>${ele.address.name}</span>
            `;
            cities_list.append(myParagraph);
        });
    }).catch((err) => {
        console.log("error fetching data...");
    });
});






