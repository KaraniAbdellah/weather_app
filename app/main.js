// Change The Dark Mode

let mode_dark_light = document.querySelector("button.mode_dark_light");
mode_dark_light.addEventListener("click", function () {
    let elements_colors = document.querySelectorAll(".white_color");
    elements_colors.forEach((ele) => {
        ele.classList.toggle("dark_color");
        ele.classList.toggle("white_color");
    });

    let elements_bg = document.querySelectorAll(".white_bgColor");
    elements_bg.forEach((ele) => {
        ele.classList.toggle("white_bgColor");
        ele.classList.toggle("dark_bgColor");
    });
    mode_dark_light.innerHTML = `<i class="fa-solid fa-moon dark_color"></i>`;
});




