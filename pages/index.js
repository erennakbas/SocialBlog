import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Layout.module.css'
import ArticleList from '../components/ArticleList'
export default function Home({articles}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eren's Personal Web Site</title>
        <meta name='keywords' content='web, site, development, eren, programming'></meta>
      </Head>
      <ArticleList articles={articles}/>
    </div>
  )
}
export const getStaticProps = async() => {
   const response = await fetch('https://jsonplaceholder.typicode.com/posts/?_limit=5');
   const articles = await response.json()
   return {
      props : {
        articles
      }
   }
}
