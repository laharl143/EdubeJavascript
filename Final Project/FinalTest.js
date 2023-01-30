// Implementation of the functions is dependent on the data source you have for aurora forecast information. You can either scrape data from websites or use APIs provided by organizations that track aurora activity.

// Here is an example of the basic structure for both functions using a hypothetical aurora forecast API:

// async function getForecastByPosition({lon, lat}) {
//     const response = await fetch(`https://aurora-forecast-api.com/forecast?lon=${lon}&lat=${lat}`);
//     const data = await response.json();
//     return data;
//   }
  
//   async function getForecastByAddress({country, city, street}) {
//     let address = `${city}, ${country}`;
//     if (street) {
//       address = `${street}, ${address}`;
//     }
//     const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}`);
//     const data = await response.json();
//     if (!data.results.length) {
//       return {error: 'Address not found'};
//     }
//     const { lat, lng } = data.results[0].geometry.location;
//     return getForecastByPosition({lon: lng, lat});
//   }

//This example uses the Fetch API for making network requests and assumes the availability of a Google Maps API for converting address to coordinates.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const axios = require("axios");
const { isValidCoordinates, isValidAddress } = require("./validation");

const AURORA_FORECAST_URL = "https://services.swpc.noaa.gov/json/ovation_aurora_latest.json";
const GEOCODING_URL = "https://nominatim.openstreetmap.org/search";

let auroraForecast = null;
let auroraForecastTimestamp = null;

async function getAuroraForecast() {
  if (auroraForecast && Date.now() - auroraForecastTimestamp < 30 * 60 * 1000) {
    return auroraForecast;
  }

  const { data } = await axios.get(AURORA_FORECAST_URL);
  auroraForecast = data;
  auroraForecastTimestamp = Date.now();

  return auroraForecast;
}

async function getForecastByPosition({ lon, lat }) {
  if (!isValidCoordinates({ lon, lat })) {
    throw new Error("Invalid coordinates");
  }

  const auroraData = await getAuroraForecast();
  const coordinates = auroraData.coordinates;

  for (const coord of coordinates) {
    if (coord[0] === lon && coord[1] === lat) {
      return coord[2];
    }
  }

  throw new Error("Aurora forecast not available for this location");
}

async function getForecastByAddress({ country, city, street = "" }) {
  if (!isValidAddress({ country, city })) {
    throw new Error("Invalid address");
  }

  const { data } = await axios.get(GEOCODING_URL, {
    params: {
      country,
      city,
      street,
      format: "json",
    },
  });

  if (!data || !data.length) {
    throw new Error("Address not found");
  }

  const { lat, lon } = data[0];
  return getForecastByPosition({ lon, lat });
}

//This code makes use of the axios library to make HTTP requests to the aurora forecast and geocoding APIs. 
//The getAuroraForecast function caches the aurora forecast data for 30 minutes to minimize network requests. 
//The getForecastByPosition and getForecastByAddress functions perform the necessary data transformations and error handling to return the aurora forecast for a given location.
