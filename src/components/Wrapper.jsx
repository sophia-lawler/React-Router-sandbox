import { Outlet, Link} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Wrapper() {
  return (
<>
    <Header />
    <Link to='/weather'>Weather</Link>
    <Outlet/>
    <Footer />
    </>
  );
}

export default Wrapper