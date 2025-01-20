

// Testing OpenWeatherApi
/*
    // My ApiKey from OpenWeatherMap and CityName
    let my_api_key = "76d59da09bf6ff9fea4a24d945516588";
    let city_name = "london";

    // this api for find the "lat" and "lon" for specific city
    let based_url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${my_api_key}`;

    // fetch the based_api for get the "lat" and "lon"
    async function fetching_data() {
        let reponse1 = await fetch(based_url);
        let data1 = await reponse1.json();
        console.log(data1.coord.lat, data1.coord.lon);
        let lat = data1.coord.lat, lon = data1.coord.lon;
        
        // this for get the info weather about a specific city
        let my_api = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${my_api_key}`;
        let reponse2 = await fetch(my_api);
        let data2 = await reponse2.json();
        console.log(data2);
    }
    fetching_data();
*/

// Get The User Location
async function getUserLocation() {
    
}








