import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { login } from "../../actions/userActions"
import FormContainer from "../../components/FormContainer/FormContainer"
import Loader from "../../components/Loader/Loader"
import Message from "../../components/Message/Message"
import "./LoginScreen.scss"

const LoginScreen = ({ location }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const redirect = location?.search ? location?.search.split("=")[1] : "/"

  useEffect(() => {
    if (userInfo) {
      navigate(redirect)
    }
  }, [navigate, userInfo, redirect])

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(`Email: ${email}, Password: ${password}`)
    dispatch(login(email, password))
    setEmail("")
    setPassword("")
  }

  return (
    <div className='loginScreen'>
      <div className='container'>
        <FormContainer>
          <h1 className='headerText mb-4'>Sign In</h1>
          {error && <Message variant='danger'>{error}</Message>}
          {loading && <Loader />}
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label htmlFor='email' className='form-label'>
                Email
              </label>
              <input
                type='email'
                className='form-control'
                id='email'
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='password' className='form-label'>
                Password
              </label>
              <input
                type='password'
                className='form-control'
                id='password'
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div className='mb-3'>
              <button type='submit' className='btn btn-dark'>
                Sign In
              </button>
            </div>
            <div className='mb-3'>
              <p>
                New?{" "}
                <Link
                  className='link-dark'
                  to={redirect ? `/register?redirect=${redirect}` : "/register"}
                >
                  Register Now
                </Link>
              </p>
            </div>
          </form>
        </FormContainer>
      </div>
    </div>
    // <div className="container my-5">
    //   <div className="row justify-content-center">
    //     <div className="col-md-6">
    //       <div className="card shadow-sm">
    //         <div className="card-body">
    //           <h5 className="card-title text-center mb-4">Sign In</h5>
    //           <form onSubmit={handleSubmit}>
    //             <div className="mb-3">
    //               <label htmlFor="email" className="form-label">
    //                 Email
    //               </label>
    //               <input
    //                 type="email"
    //                 className="form-control"
    //                 id="email"
    //                 value={email}
    //                 onChange={handleEmailChange}
    //                 required
    //               />
    //             </div>
    //             <div className="mb-3">
    //               <label htmlFor="password" className="form-label">
    //                 Password
    //               </label>
    //               <input
    //                 type="password"
    //                 className="form-control"
    //                 id="password"
    //                 value={password}
    //                 onChange={handlePasswordChange}
    //                 required
    //               />
    //             </div>
    //             <div className="d-grid">
    //               <button type="submit" className="btn btn-primary">
    //                 Sign In
    //               </button>
    //             </div>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default LoginScreen
