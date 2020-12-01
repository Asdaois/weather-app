function createWeatherAPI() {
  const apikey = 'fa1e5b4bc8756a5da47e2ed86ac26e74';
  async function filterForecastData(data) {
    const newData = {};
    newData.current = data.current;
    newData.hourly = data.hourly;
    newData.daily = data.daily;

    return data;
  }

  async function getCoordsFromName(cityName = '') {
    const api = 'api.openweathermap.org/data/2.5/weather?';
    try {
      const responseApi = await fetch(
        `https://${api}q=${cityName}&appid=${apikey}&units=metric`,
        {
          mode: 'cors',
        },
      );
      return responseApi.json();
    } catch (error) {
      return error;
    }
  }

  async function getWheater(data) {
    const apiForecast = 'https://api.openweathermap.org/data/2.5/onecall?';

    try {
      const responseApiForecast = await fetch(
        `${apiForecast}lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=minutely,alerts&appid=${apikey}&units=metric`,
        {
          mode: 'cors',
        },
      );

      const forecastDate = await responseApiForecast.json();
      // console.info(forecastDate);

      const filterForecast = await filterForecastData(forecastDate);
      console.log(filterForecast);
      return filterForecast;
    } catch (error) {
      console.log(data);
      console.log(error);
      return error;
    }
  }

  const coord = {};
  coord.lon = 0;
  coord.lat = 0;
  const data = {};
  data.coord = coord;

  const createData = (position) => {
    data.coord.lon = position.coords.longitude;
    data.coord.lat = position.coords.latitude;
  };
  async function getUserLocation() {
    try {
      window.navigator.geolocation.getCurrentPosition(createData, console.log);
      const stringData = JSON.stringify(data);
      return JSON.parse(stringData);
    } catch (error) {
      return error;
    }
  }

  return {
    filterForecastData,
    getCoordsFromName,
    getWheater,
    getUserLocation,
  };
}
export default createWeatherAPI;
