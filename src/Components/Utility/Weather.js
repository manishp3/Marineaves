import { useState } from 'react';
// import Search from '../Weather/Compo/Search/Search';
// import CurrentWeather from '../Weather/Compo/current-weather/Current-weather';
// import { WEATHER_API_URL, WEATHER_API_KEY } from '../Weather/Compo/api';
// import Forecast from '../Weather/Compo/forecast/Forecast'
import Search from '../../Weather/Compo/Search/Search';
import CurrentWeather from '../../Weather/Compo/current-weather/Current-weather';
import { WEATHER_API_URL, WEATHER_API_KEY } from '../../Weather/Compo/api';
import Forecast from '../../Weather/Compo/forecast/Forecast'

function Weather() {
    const [currentWeather, setCurrentWaether] = useState(null)
  const [forecast, setForecast] = useState(null)

  const handleOnSearchChange = (searchData) => {
    
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        setCurrentWaether({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  }

    console.log(currentWeather);
    console.log(forecast);

  return (
    <div className='container'>
           <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}

    </div>
  )
}

export default Weather;