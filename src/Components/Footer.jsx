import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <span>Made with love by PG</span>
      <ul className={styles.icons}>
      <li><img src="/images/ico-facebook.png" alt="Fb"></img></li>
      <li><img src="/images/ico-whatsapp.png" alt="Wpp"></img></li>
      <li><img src="/images/ico-instagram.png" alt="insta"></img></li>
      <li><img src="/images/ico-tiktok.png" alt="tiktok"></img></li>
      </ul>
    </footer>
  )
}
export default Footer
