import { useState } from 'react'
import { useLoaderData, useFetcher, Form} from 'react-router-dom'
import { getWeather } from '../api/weather.js'

function New() {
  const [input, setInput] = useState('')
  const fetcher = useFetcher()
const [weatherData, setWeatherData] = useState(useLoaderData())

function handleChange(event) {
  setInput(event.target.value)
}
function handleClick(e) {
  e.preventDefault()
  getWeather(input)
    .then(res => {
      setWeatherData(res)
    })
    .catch((err) => {
      console.error(err.message)
    })
}
  return (
<>
    <h3> {weatherData.name}</h3>
    <p>{weatherData.weather[0].main}</p>
    <p>{weatherData.main.temp}</p>
    <fetcher.Form action={`/weather`}>
    <input
            value={input}
            onChange={handleChange}
            name="city"
            type="text"
            size="10"
          />
          <button style={{ height: '30px' }} onClick={handleClick}>
            search
          </button>
    </fetcher.Form>
    </>
  );
}

export default New