import { NavLink } from "react-router-dom"
import styles from './header.module.scss'
function Header() {
  return (
    <div className={styles.header}>
      <nav className="navigation">
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/login'}>Login</NavLink>
        <NavLink to={'/register'}>Register</NavLink>
      </nav>
    </div>
  )
}

export default Header