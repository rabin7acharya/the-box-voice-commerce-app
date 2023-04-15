import React, { useState, useEffect } from "react";
import { Link, redirect, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message/Message";
import Loader from "../../components/Loader/Loader";
import FormContainer from "../../components/FormContainer/FormContainer";
import { getUserDetails, updateUser } from "../../actions/userActions";
import { USER_UPDATE_RESET } from "../../constants/userConstants";
import "./UserEditScreen.scss";

const UserEditScreen = () => {
  const { id } = useParams();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userUpdate = useSelector((state) => state.userUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = userUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET });
      navigate("/admin/userlist");
    } else {
      if (!user.name || user._id !== id) {
        dispatch(getUserDetails(id));
      } else {
        setName(user.name);
        setEmail(user.email);
        setIsAdmin(user.isAdmin);
      }
    }
  }, [user, dispatch, id, successUpdate, navigate]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateUser({ _id: id, name, email, isAdmin }));
    // navigate("/admin/userlist");
  };

  return (
    <div className="userEditScreen">
      <div className="container">
        {/* <Link to="/admin/userlist" className="btn btn-dark">
          Go Back
        </Link> */}
        <FormContainer>
          <h1 className="headerText mb-4">Edit User</h1>
          {loadingUpdate && <Loader />}
          {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
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

              <div className="mb-4 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="isAdmin"
                  checked={isAdmin}
                  onChange={(e) => setIsAdmin(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="isAdmin">
                  Is Admin
                </label>
              </div>

              <div className="mb-3">
                <button type="submit" className="btn col-12 btn-dark">
                  Update Info
                </button>
              </div>
            </form>
          )}
        </FormContainer>
      </div>
    </div>
  );
};

export default UserEditScreen;
