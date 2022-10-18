import request from 'superagent'

export function getWeather() {
  return request
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=auckland&APPID=99fd68f7e3d3cd5d00610eafb6af410f&units=metric`
    )
    .set('Accept', 'application/json')
    .then((response) => {
      return response.body
    })
    .catch((err) => {
      console.error(err.message)
    })
}
