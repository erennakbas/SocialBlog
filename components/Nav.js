import styles from '../styles/Nav.module.css';
import Link from 'next/link'
const Nav = () => {
  return (
    <nav>
      <div className={styles.nav}>
        
          <Link className={styles.active__tab} href='/'>Home</Link>
        
          <Link href='/login'>Login</Link>
        
      </div>
    </nav>
  )
}

export default Nav