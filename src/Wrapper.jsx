import { Outlet, Link} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Wrapper() {
  return (
<>
    <Header />
    <Link to='/new'>I'm in the header. Click me for New stuff</Link>
    <Outlet/>
    <Footer />
    </>
  );
}

export default Wrapper