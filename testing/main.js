// Testing OpenWeatherApi

// fetch the based_api for get the "lat" and "lon"
async function fetching_data() {
    // My ApiKey from OpenWeatherMap and CityName
    let my_api_key = "76d59da09bf6ff9fea4a24d945516588";
    let city_name = "london";
    // this api for find the "lat" and "lon" for specific city
    let based_url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${my_api_key}`;
    let response1 = await fetch(based_url);
    let data1 = await response1.json();
    console.log(data1.coord.lat, data1.coord.lon);

    // Another API for Get The More About Weather Info ABout City
    // https://api.openweathermap.org/data/2.5/air_pollution?lat=2&lon=2&appid=76d59da09bf6ff9fea4a24d945516588
}
fetching_data();






// // Get The User Location [city, country, lon, lan]
// let my_api_key = "f89627d3b9004e27ac2b2a7d1baedaab";
// fetch(`https://api.geoapify.com/v1/ipinfo?apiKey=${my_api_key}`).then((reponse) => {
//     let Data = reponse.json();
//     return Data;
// }).then((Data) => {
//     console.log(Data);
// });





// Weather API
// let api_key = "c9f3c2ce8b4d4246ba692417252101";
// let city_name = "france";
// fetch(`https://api.weatherapi.com/v1/search.json?key=${api_key}&q=${city_name}`).then((reponse) => {
//     let Data = reponse.json();
//     return Data;
// }).then((Data) => {
//     console.log(Data);
// });


// Loctionl API
// let my_api_key = "pk.8c7aff324a3accac1c7e5b2f0df1dde5";
// let letter = "beni";
// fetch(`https://api.locationiq.com/v1/autocomplete?key=${my_api_key}&q=${letter}`).then((reponse) => {
//     let data = reponse.json();
//     return data;
// }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log("error fetching data...");
// })


