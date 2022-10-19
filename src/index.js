import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
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
    <Route element={<Wrapper />}>
      <Route path="/" element={<App />} />
      <Route path="/weather" 
      loader={
        ({request}) => {
        let url = new URL(request.url)
        let searchTerm = url.searchParams.get('city')
        return getWeather(searchTerm)
        } 
      }
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
