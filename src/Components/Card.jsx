import { useContext, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Card.module.css'
import { ThemeContext } from '../context/ThemeContextProvider'
import { FavsLogicContext } from '../context/FavsLogicContextProvider'

function Card(props) {
  const { id, name, username, onAddToFavs } = props
  const { theme } = useContext(ThemeContext)
  const { favs } = useContext(FavsLogicContext)
  const navigate = useNavigate()

  const isFav = useMemo(() => {
    return Array.isArray(favs) && favs.some((favDentist) => favDentist.id === id)
  }, [favs])
  

  function handleNavigate(id) {
    navigate(`/dentist/${id}`)
  }

  return (
    <>
      <article className={`${styles.card} ${styles[theme]}`}>
      <img src="/images/doctor.jpg" alt="" className={`${styles.doctorImg} ${styles[theme]}`} />
        <h3>{name}</h3>
        <p>@{username.toLowerCase()}</p>
        <button
          onClick={() => handleNavigate(id)}
          className={styles.detail_btn}
        >
          Details
        </button>
        <button
          onClick={onAddToFavs}
          className={`${styles.fav_btn} ${isFav && styles.fav}`}
        >
          ★
        </button>
      </article>
    </>
  )
}
export default Card
