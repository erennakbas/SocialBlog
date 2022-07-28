import {useRouter} from 'next/router';
import Link from 'next/link'
const article = ({article}) => {
  const router = useRouter()
  const {id} = router.query;
  return (
    <div>
        <h2>{article.title}</h2>
        <p>{article.body}</p>
        <br/>
        <Link href='/'><a>Go Back to Main Page</a></Link>
        <style jsx>
          {
            `
            a{
              color:red;
            }
            `
          }
        </style>
    </div>
  )
}
export const getServerSideProps = async(context) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
  const article = await response.json()
  return {
     props : {
       article
     }
  }
}
export default article