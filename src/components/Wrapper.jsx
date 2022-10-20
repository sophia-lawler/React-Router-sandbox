import { Outlet} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Wrapper() {
  return (
<>
    <Header />
    <Outlet/>
    <Footer />
    </>
  );
}

export default Wrapper