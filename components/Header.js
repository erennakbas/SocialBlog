import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
        <h1 className='title'>
            <span>Web Development</span>
        </h1>
        <style jsx>
            {`
                .title{
                    color:blue;
                }
            `}
        </style>
    </div>
  )
}

export default Header