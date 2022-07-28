import React from 'react'
import styles from '../styles/ArticleList.module.css';
import Link from 'next/link'
const ArticleList = ({articles}) => {
  return (
    <div className={styles.grid}>
        {articles.map((article)=>{
            return <Link key={article.id} href="/article/[id]" as={`/article/${article.id}`}>
                        <a className={styles.card}>
                            <h4>{article.title}</h4>
                            <p>{article.body}</p>
                        </a>
                    </Link>
        })}
    </div>
  )
}

export default ArticleList