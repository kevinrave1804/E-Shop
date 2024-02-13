import { BrowserRouter, useRoutes } from 'react-router-dom'
import Home from '../Home/Home'
import Categories from '../Categories/Categories'
import Products from '../Products/Products'
import Auth from '../Auth/Auth'
import Cart from '../Cart/Cart'
import Profile from '../Profile/Profile'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

function AppRoutes() {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/categories', element: <Categories /> },
    { path: '/products', element: <Products /> },
    { path: '/auth', element: <Auth /> },
    { path: '/cart', element: <Cart /> },
    { path: '/profile', element: <Profile /> },
  ])

  return routes
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
