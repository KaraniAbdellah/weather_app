// Change The Dark Mode

let mode_dark_light = document.querySelector("button.mode_dark_light");
mode_dark_light.addEventListener("click", function () {
    if (document.body.classList.contains("dark_bgColor")) {
        let elements_colors = document.querySelectorAll(".white_color");
        elements_colors.forEach((ele) => {
            ele.classList.toggle("dark_color");
            ele.classList.toggle("white_color");
        });
    
        // let elements_bg = document.querySelectorAll(".white_bgColor");
        // elements_bg.forEach((ele) => {
        //     ele.classList.toggle("white_bgColor");
        //     ele.classList.toggle("dark_bgColor");
        // });
        // Change The Search Bar Color
        // let search_bar = document.querySelector(".search_bar");
        // let bar_input = document.querySelector(".bar_input input");
        // search_bar.classList.toggle("dark_bgColor");
        // search_bar.classList.toggle("white_bgColor");
        // bar_input.classList.toggle("dark_bgColor");
        // bar_input.classList.toggle("white_bgColor");
        
        mode_dark_light.innerHTML = `<i class="fa-solid fa-moon"></i>`;
        document.body.classList.add("white_bgColor");
    }
});




