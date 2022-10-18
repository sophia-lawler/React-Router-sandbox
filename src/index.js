import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Wrapper from './Wrapper'
import New from './New'
import reportWebVitals from './reportWebVitals'
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
      <Route path="/new" loader={getWeather} element={<New />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
