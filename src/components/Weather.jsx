import { useState } from 'react'
import { useLoaderData, Form} from 'react-router-dom'

function New() {
  const [city, setCity] = useState('')
  const [input, setInput] = useState('')
const weatherData = useLoaderData()
// console.log(weatherData)

function handleChange(event) {
  setInput(event.target.value)
}
function handleClick(e) {
  // setCity(input)
}
  return (
<>
    <h3> {weatherData.name}</h3>
    <p>{weatherData.weather[0].main}</p>
    <p>{weatherData.main.temp}</p>
    <Form action={`/weather/${input}`}>
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
    </Form>
    </>
  );
}

export default New