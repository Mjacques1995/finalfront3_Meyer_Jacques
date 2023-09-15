import { useContext } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import { ThemeContext } from '../context/ThemeContextProvider'

function Navbar() {
  const { theme, changeTheme } = useContext(ThemeContext)

  return (
    <nav className={`${styles.navbar} ${styles[theme]}`}>
      <div className={styles.left}>
      <h3>DH Odontology</h3>
      </div>

      <div className={styles.right}>
        <Link to='/'>Home</Link>
        <Link to='/favs'>Favorites</Link>
        <Link to='/contact'>Contacts</Link>
      </div>
      <button onClick={changeTheme}>{theme === 'light' ? '☀️' : '🌙'}</button>
    </nav>
  )
}

export default Navbar
