import Login from '../pages/login'
import Register from '../pages/register'
import ForgotPassword from '../pages/forgot-password'
import Home from '../pages/home'

export const publicRoutes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />,
  },
]

export const privateRoutes = [
  {
    path: '/dashboard',
    element: <h1>Dashboard</h1>,
  },
]
