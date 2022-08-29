import React from 'react'
import styles from '../styles/PostList.module.css';
import Link from 'next/link'
const PostList = ({posts}) => {
  return (
    <div className={styles.grid}>
        {posts.map((post)=>{
            return <Link key={post.id} href="/post/[id]" as={`/post/${post.id}`}>
                        <a className={styles.card}>
                            <h4>{post.title}</h4>
                            <p>{post.body.substring(0,100)+'...'}</p>
                        </a>
                    </Link>
        })}
    </div>
  )
}

export default PostList