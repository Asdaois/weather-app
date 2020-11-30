async function getWheater(cityName = "") {
  const apikey = "fa1e5b4bc8756a5da47e2ed86ac26e74";
  const urlapi = "api.openweathermap.org/data/2.5/weather?";
  try {
    const response = await fetch(
      `https://${urlapi}q=${cityName}&appid=${apikey}`,
      {
        mode: "cors",
      }
    );
    console.log("clima");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
/*
 * Write the functions that hit the API. You’re going to want functions that
 * can take a location and return the weather data for that location. For now,
 * just console.log)( the information.)
 * */
getWheater("San Felix");
