import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Layout.module.css'
import PostList from '../components/PostList'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
export default function Home({posts}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eren's Personal Web Site</title>
        <meta name='keywords' content='web, site, development, eren, programming'></meta>
      </Head>
      <PostList posts={posts}/>
    </div>
  )
}
export const getStaticProps = async() => {
   const response = await fetch('https://dummyjson.com/posts?limit=5');
   const data = await response.json()

   return {
      props : {
        posts : data.posts
      }
   }
}
