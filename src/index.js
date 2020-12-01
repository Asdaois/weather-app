import createWeatherAPI from './apiWeatherControl';

const weatherAPI = createWeatherAPI();

function getIcon(icon) {
  const url = `http://openweathermap.org/img/w/${icon}.png`;
  return url;
}
const btnCityWheather = document.getElementById('btn-city');
btnCityWheather.addEventListener('click', () => {
  const cityName = document.getElementById('city-name').value;
  weatherAPI
    .getCoordsFromName(cityName)
    .then((data) => {
      weatherAPI.getWheater(data);
    })
    .then(console.log)
    .catch(console.log);
});

const btnLocalWheather = document.getElementById('btn-local');
btnLocalWheather.addEventListener('click', () => {
  weatherAPI
    .getUserLocation()
    .then((data) => {
      weatherAPI.getWheater(data);
    })
    .then(console.log)
    .catch(console.log);
});

/*
 */
