// Implementation of the functions is dependent on the data source you have for aurora forecast information. You can either scrape data from websites or use APIs provided by organizations that track aurora activity.

// Here is an example of the basic structure for both functions using a hypothetical aurora forecast API:

async function getForecastByPosition({lon, lat}) {
    const response = await fetch(`https://aurora-forecast-api.com/forecast?lon=${lon}&lat=${lat}`);
    const data = await response.json();
    return data;
  }
  
  async function getForecastByAddress({country, city, street}) {
    let address = `${city}, ${country}`;
    if (street) {
      address = `${street}, ${address}`;
    }
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}`);
    const data = await response.json();
    if (!data.results.length) {
      return {error: 'Address not found'};
    }
    const { lat, lng } = data.results[0].geometry.location;
    return getForecastByPosition({lon: lng, lat});
  }

//   Note: This example uses the Fetch API for making network requests and assumes the availability of a Google Maps API for converting address to coordinates.

const axios = require('axios');
const moment = require('moment');

let auroraForecastData = null;
let auroraForecastTime = null;

async function getAuroraForecast() {
  if (auroraForecastData && moment().diff(auroraForecastTime, 'minutes') < 30) {
    return auroraForecastData;
  }
  const response = await axios.get('https://services.swpc.noaa.gov/json/ovation_aurora_latest.json');
  auroraForecastData = response.data;
  auroraForecastTime = moment();
  return auroraForecastData;
}

async function getForecastByPosition({lon, lat}) {
  if (lon < -180 || lon > 180 || lat < -90 || lat > 90) {
    return {error: 'Invalid position'};
  }
  const auroraForecast = await getAuroraForecast();
  const lonIndex = Math.round((lon + 180) * 2);
  const latIndex = Math.round((90 - lat) * 2);
  const auroraValue = auroraForecast.coordinates[latIndex][lonIndex][2];
  return { auroraValue, forecastTime: auroraForecast.Forecast Time };
}

async function getForecastByAddress({country, city, street}) {
  let address = `${city}, ${country}`;
  if (street) {
    address = `${street}, ${address}`;
  }
  try {
    const response = await axios.get(`https://nominatim.openstreetmap.org/search?q=${address}&format=json`);
    if (!response.data.length) {
      return {error: 'Address not found'};
    }
    const { lat, lon } = response.data[0];
    return getForecastByPosition({lon, lat});
  } catch (error) {
    return {error: 'Could not access geocoding service'};
  }
}

// This implementation caches the aurora forecast data for 30 minutes. It uses the moment library to keep track of the forecast time and check if the cached data is still valid. The axios library is used for making the API calls to both the aurora forecast and geocodingx`     services. The getForecastByAddress function first performs a geocoding request to convert the address to coordinates, and then calls getForecastByPosition to retrieve the aurora forecast. Error handling is included for invalid positions, non-existent addresses, and network errors.