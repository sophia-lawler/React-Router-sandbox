import { useState } from 'react'
import { useLoaderData, Form } from 'react-router-dom'

function New() {
  const [input, setInput] = useState('')
  const weatherData = useLoaderData()

  return (
    <>
      <h3> {weatherData.name}</h3>
      <p>{weatherData.weather[0].main}</p>
      <p>{weatherData.main.temp}</p>

      <Form method="get" action={`/weather/${input}`}>
        <input
          name="city"
          type="text"
          size="10"
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" style={{ height: '30px' }} onsubmit= "return false">
          search
        </button>
      </Form>
    </>
  )
}

export default New
