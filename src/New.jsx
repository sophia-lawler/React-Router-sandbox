import { useState } from 'react'
import { useLoaderData} from 'react-router-dom'

function New() {
  const [city, setCity] = useState('')
  const [input, setInput] = useState('')
const weatherData = useLoaderData()

function handleChange(event) {
  setInput(event.target.value)
}
function handleClick(e) {
  e.preventDefault()
  setCity(input)
}
  return (
<>
    <h1> Auckland's weather</h1>
    <p>{weatherData.weather[0].main}</p>
    <p>{weatherData.main.temp}</p>
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
    </>
  );
}

export default New