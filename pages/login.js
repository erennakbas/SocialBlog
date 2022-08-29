import React from 'react'
import Head from 'next/head'
import Link from 'next/link';
import {useDispatch } from 'react-redux';
import { decodedToken } from '../helpers';
import serialize from 'form-serialize';
import { useRouter } from 'next/router';
import BlogFunctions from '../services/blog.functions';
const login = () => {
  const blogFunctions = BlogFunctions.create()
  const dispatch = useDispatch();
  const router = useRouter()
  async function handleLogin(e){
    e.preventDefault()
    var formData= serialize(e.target,{hash:true})
    blogFunctions.authenticate(formData.username, formData.password, dispatch, router)
}
  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
        <section className="vh-100" style={{backgroundColor: "#9A616D"}}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{borderRadius: "1rem"}}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form" className="img-fluid" style={{borderRadius: "1rem 0 0 1rem"}} />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">

                      <form name='form' id='form' onSubmit={handleLogin}>

                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-3" style={{color: "#ff6219"}}></i>
                          <span className="h1 fw-bold mb-0">Logo</span>
                        </div>

                        <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: "1px"}}>Sign into your account</h5>

                        <div className="form-outline mb-4">
                          <input type="text" name='username' id="username" className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="form2Example17">username</label>
                        </div>

                        <div className="form-outline mb-4">
                          <input type="password" name='password' id="password" className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="password">Password</label>
                        </div>

                        <div className="pt-1 mb-4">
                          <button type='submit' className="btn btn-dark btn-lg btn-block">Login</button>
                        </div>

                        {/* <a className="small text-muted" href="#!">Forgot password?</a> */}
                        <p className="mb-5 pb-lg-2" style={{color: "#393f81"}}>
                          Don't have an account?  
                          <Link href="/signup"style={{color: "#393f81"}}> Register here </Link>
                        </p>
                      </form>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  </section>
    </div>
  );
}

export default login