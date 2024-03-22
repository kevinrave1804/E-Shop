import { BrowserRouter, useRoutes } from 'react-router-dom'
import Home from '../Home/Home'
import Categories from '../Categories/Categories'
import Products from '../Products/Products'
import Cart from '../Cart/Cart'
import Profile from '../Profile/Profile'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { Provider } from '../../Context'
import LogIn from '../LogIn/LogIn'
import SignIn from '../SigIn/SignIn'
import Navbar2 from '../../Components/Navbar/Navbar'

function AppRoutes() {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/categories', element: <Categories /> },
    { path: '/products', element: <Products /> },
    { path: '/login', element: <LogIn /> },
    { path: '/signin', element: <SignIn /> },
    { path: '/cart', element: <Cart /> },
    { path: '/profile', element: <Profile /> },
  ])

  return routes
}

function App() {
  return (
    <>
      <Provider>
        <BrowserRouter>
          <Navbar />
          <AppRoutes />
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
