import { useState, useEffect } from 'react'
import { useLoaderData, Form } from 'react-router-dom'

function Weather() {
  const [input, setInput] = useState('')
  const weatherData = useLoaderData()

  useEffect(() => {
    console.log('entering useEffect')
    return () => {
      console.log('returning useEffect')
    }
  }, [])

  return (
    <article>
      <h3>{weatherData.name}</h3>
      <p>{weatherData.weather[0].main}</p>
      <p>{weatherData.main.temp}</p>

      <Form method="get" action={`/weather/${input}`}>
        <input
          type="text"
          size="10"
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" style={{ height: '30px' }}>
          search
        </button>
      </Form>
    </article>
  )
}

export default Weather
