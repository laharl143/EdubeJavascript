async function getWeather(city, info = 'all') {
    let cities = city;
    if (!Array.isArray(city)) {
      cities = [city];
    }
  
    try {
      for (const city of cities) {
        const res = await fetch(`http://localhost:3000/weather?city=${city}&info=${info}`);
        const data = await res.json();
        console.log(`CITY: ${data.city}`);
        if (info === 'all' || !info) {
          console.log(`WIND: ${data.weather.wind.speed} m/s, ${data.weather.wind.deg} deg`);
          if (data.weather.wind.speed > 15) {
            console.log("WARNING! Wind speed over 15 m/s");
          }
          console.log(`CLOUDS: ${data.weather.clouds} %`);
          console.log(`TEMP: ${data.weather.temp} C`);
          if (data.weather.temp < -20) {
            console.log("WARNING! Temperature below -20 degrees");
          }
          console.log(`PRECIPITATION: ${data.weather.precipitation} %`);
        } else if (info === 'wind') {
          console.log(`WIND: ${data.weather.wind.speed} m/s, ${data.weather.wind.deg} deg`);
          if (data.weather.wind.speed > 15) {
            console.log("WARNING! Wind speed over 15 m/s");
          }
        }
      }
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  }
  
  let weather1 = getWeather('Berlin', 'wind');
  // CITY: Berlin
  // WIND: 16 m/s, 117 deg
  // WARNING! Wind speed over 15 m/s
  
  let weather2 = getWeather(['Oslo', 'Yakutsk'], 'all');
  // CITY: Oslo
  // WIND: 8 m/s, 170 deg
  // CLOUDS: 0 %
  // TEMP: 0 C
  // PRECIPITATION: 0 %
  //
  // CITY: Yakutsk
  // WIND: 0 m/s, 0 deg
  // CLOUDS: 0 %
  // TEMP: -40 C
  // WARNING! Temperature below -20 degrees
  // PRECIPITATION: 0 %
  
  
  //////////////////////////////////////////
  //If you get an output like this:
  
  // Error: ReferenceError: fetch is not defined
  // Error: ReferenceError: fetch is not defined
  
  // It's likely that the code is not running in an environment that has the fetch method available.
  
  // try installing the 'node-fetch' package, to use fetch method in your code
  // npm install node-fetch
  
  
  
  