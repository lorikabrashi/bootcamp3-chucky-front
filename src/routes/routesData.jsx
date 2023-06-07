import Login from '../pages/login'
import Register from '../pages/register'
import ForgotPassword from '../pages/forgot-password'
import Home from '../pages/home'
import VerifyAccount from '../pages/verifyAccount'
import ResetPassword from '../pages/reset-password'

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
  {
    path: '/reset-password/:token',
    element: <ResetPassword />,
  },
  {
    path: '/verify-account/:token',
    element: <VerifyAccount />
  }
]

export const privateRoutes = [
  {
    path: '/dashboard',
    element: <h1>Dashboard</h1>,
  },
]
