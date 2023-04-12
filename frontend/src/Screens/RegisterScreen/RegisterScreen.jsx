import React, { useState, useEffect } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message/Message";
import Loader from "../../components/Loader/Loader";
import FormContainer from "../../components/FormContainer/FormContainer";
import { register } from "../../actions/userActions";
import "./RegisterScreen.scss";

const RegisterScreen = ({ location }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const redirect = location?.search ? location?.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //dispatch register
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <div className="loginScreen">
      <div className="container">
        <FormContainer>
          <h1 className="headerText mb-4">Sign Up</h1>
          {message && <Message variant="danger">{message}</Message>}
          {error && <Message variant="danger">{error}</Message>}
          {loading && <Loader />}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="name"
                className="form-control"
                id="name"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
            </div>

            <div className="mb-3">
              <button type="submit" className="btn btn-dark">
                Sign Up
              </button>
            </div>
            <div className="mb-3">
              <p>
                Already a member ?{" "}
                <Link
                  className="link-dark"
                  to={redirect ? `/login?redirect=${redirect}` : "/login"}
                >
                  Sign In Now
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
    //
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
    //
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
  );
};

export default RegisterScreen;
