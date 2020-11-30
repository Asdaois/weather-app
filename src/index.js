async function filterData(data) {
  const newData = {};
  for (key in data) {
    if (key == "weather" || key == "main" || key == "wind" || key == "coord") {
      newData[key] = data[key];
    }
  }
  return newData;
}
async function getWheater(cityName = "") {
  const apikey = "fa1e5b4bc8756a5da47e2ed86ac26e74";
  const api = "api.openweathermap.org/data/2.5/weather?";
  const apiForecast = "https://api.openweathermap.org/data/2.5/onecall?";

  try {
    const responseApi = await fetch(
      `https://${api}q=${cityName}&appid=${apikey}&units=metric`,
      {
        mode: "cors",
      }
    );
    const currenDataComplete = await responseApi.json();
    const dataNecessary = await filterData(currenDataComplete);
    const responseApiForecast = await fetch(
      `${apiForecast}lat=${dataNecessary.coord.lat}&lon=${dataNecessary.coord.lon}&exclude=minutely,alerts&appid=${apikey}`,
      {
        mode: "cors",
      }
    );
    const forecastDate = await responseApiForecast.json();
    console.log(forecastDate);
    console.log(dataNecessary);
  } catch (error) {
    console.error(error);
  }
}
/*
 * Write the functions that hit the API. You’re going to want functions that
 * can take a location and return the weather data for that location. For now,
 * just console.log)( the information.)
 * */
getWheater("London");
