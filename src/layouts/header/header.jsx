import { NavLink } from 'react-router-dom'
import styles from './header.module.scss'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/slices/authSlice'
function Header() {
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logout())
  }
  return (
    <div className={styles.header}>
      <nav className="navigation">
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/login'}>Login</NavLink>
        <NavLink to={'/register'}>Register</NavLink>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </div>
  )
}

export default Header
