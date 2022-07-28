import React from 'react'
import Head from 'next/head'
const login = () => {
  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <form>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default login