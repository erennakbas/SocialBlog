import Head from 'next/head'
import BlogServices from '../services/blog.services'
import styles from '../styles/Layout.module.css'
import PostList from '../components/PostList'

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
   const blogServices = BlogServices.create()
   const data = await blogServices.GetPosts(6);
   return {
      props : {
        posts : data.posts
      }
   }
}
