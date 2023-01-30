function getWeather(city, info='all') {
    let url = `http://localhost:3000/weather?city=${city}`;
    if (info !== 'all') {
        url += `&info=${info}`;
    }
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            let weatherData = data;
            if (Array.isArray(city)) {
                weatherData = data.map(cityData => {
                    return {
                        city: cityData.city,
                        weather: cityData.weather
                    }
                });
            }
            weatherData.forEach(cityData => {
                console.log(`CITY: ${cityData.city}`);
                if (info === 'wind' || info === 'all') {
                    console.log(`WIND: ${cityData.weather.wind.speed} m/s, ${cityData.weather.wind.deg} deg`);
                    if (cityData.weather.wind.speed > 15) {
                        console.log(`WARNING! Wind speed over 15 m/s`);
                    }
                }
                if (info === 'clouds' || info === 'all') {
                    console.log(`CLOUDS: ${cityData.weather.clouds} %`);
                }
                if (info === 'temp' || info === 'all') {
                    console.log(`TEMP: ${cityData.weather.temp} C`);
                    if (cityData.weather.temp < -20) {
                        console.log(`WARNING! Temperature below -20 degrees`);
                    }
                }
                if (info === 'precipitation' || info === 'all') {
                    console.log(`PRECIPITATION: ${cityData.weather.precipitation} %`);
                }
                console.log('');
            });
        })
        .catch(error => console.log(error));
}

let weather1 = getWeather('Berlin', 'wind');
let weather2 = getWeather(['Oslo', 'Yakutsk'], 'all');


/////////////////////////////////////
//The first call should print: bash
// CITY: Berlin
// WIND: 16 m/s, 117 deg
// WARNING! Wind speed over 15 m/s

/////////////////////////////////////
// The second call should print: makefile
// CITY: Oslo
// WIND: 8 m/s, 170 deg
// CLOUDS: 0 %
// TEMP: 0 C
// PRECIPITATION: 0 %

// CITY: Yakutsk
// WIND: 0 m/s, 0 deg
// CLOUDS: 0 %
// TEMP: -40 C
// WARNING! Temperature below -20 degrees
// PRECIPITATION: 0 %


//Please note that this code assumes that the REST service is running on http://localhost:3000/weather and that the service returns data in the format specified in the prompt.


// In order to use the fetch() function in a Node.js environment, you will need to install the node-fetch package by running npm install node-fetch in the command line. Then, you will need to import the package at the top of your JavaScript file with the following line: const fetch = require("node-fetch");

