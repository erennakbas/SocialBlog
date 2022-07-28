import React from 'react'
import styles from '../styles/Layout.module.css'
import Nav from './Nav'
import Header from './Header'
const Layout = ({children}) => {
  return (
    <>
    <Nav/>
    <div className={styles.container}>
        <main className={styles.main}>
        <Header/>
        <h1>Learning Next.js</h1>
            {children}
        </main>
    </div>
    </>
  )
}

export default Layout