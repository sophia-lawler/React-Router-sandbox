import { Link } from 'react-router-dom'
function Header() {
  return (
    <>
      <h1>Please look at the console when you check the weather below!</h1>
      <Link to="weather/auckland">Check the weather</Link>
    </>
  )
}

export default Header
