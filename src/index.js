import createWeatherAPI from './apiWeatherControl';
const testImg = '10d';
const weatherAPI = createWeatherAPI();

function getIcon(icon) {
  const url = `http://openweathermap.org/img/w/${icon}.png`;
  return url;
}

const updateWeather = (data) => {
  console.log(data);
  const date = new Date(data.current.dt * 1000);
  const { weather, temp, humidity, wind_speed } = data.current;
  console.log(humidity);
};

const btnCityWheather = document.getElementById('btn-city');
btnCityWheather.addEventListener('click', () => {
  const cityName = document.getElementById('city-name').value;
  weatherAPI
    .getCoordsFromName(cityName)
    .then(weatherAPI.getWheater)
    .then(updateWeather)
    .catch(console.log);
});

const btnLocalWheather = document.getElementById('btn-local');
btnLocalWheather.addEventListener('click', () => {
  weatherAPI
    .getUserLocation()
    .then(weatherAPI.getWheater)
    .then(updateWeather)
    .catch(console.log);
});

document.querySelector('img').src = getIcon(testImg);
