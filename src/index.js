import React from 'react'
import ReactDOM from 'react-dom/client'
import Wrapper from './components/Wrapper'
import Weather from './components/Weather'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import { getWeather } from './api/weather'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Wrapper />}>
      <Route
        path="/weather/:city"
        loader={(request) => {
          console.log('loader')
          return getWeather(request.params.city)
        }}
        element={<Weather />}
      />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
