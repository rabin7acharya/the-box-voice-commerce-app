import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message/Message";
import Loader from "../../components/Loader/Loader";
import { getUserDetails, updateUserProfile } from "../../actions/userActions";
import { listMyOrders } from "../../actions/orderActions";
import "./ProfileScreen.scss";

const ProfileScreen = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  const orderListMy = useSelector((state) => state.orderListMy);
  const { loading: loadingOrders, error: errorOrders, orders } = orderListMy;

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    } else {
      if (!user.name) {
        dispatch(getUserDetails("profile"));
        console.log("user name: " + user.name);
        dispatch(listMyOrders());
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, navigate, userInfo, user]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }));
    }
  };

  return (
    <div className="profileScreen">
      <div className="container d-flex align-items-start flex-wrap">
        <div className="left col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 p-2">
          <div className="leftWrapper p-4 p-sm-4 p-md-5 p-lg-5 p-xl-5">
            <h1 className="headerText">My Profile</h1>
            {message && <Message variant="danger">{message}</Message>}
            {error && <Message variant="danger">{error}</Message>}
            {success && (
              <Message variant="success">Updated Successfully!</Message>
            )}
            {loading && <Loader />}
            <form onSubmit={submitHandler}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="name"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <button type="submit" className="btn btn-dark">
                  Update Info
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="right col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 p-2">
          <div className="rightWrapper p-4 p-sm-4 p-md-5 p-lg-5 p-xl-5">
            <h1 className="headerText">My Orders</h1>
            {loadingOrders ? (
              <Loader />
            ) : errorOrders ? (
              <Message variant="danger">{errorOrders}</Message>
            ) : (
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">DATE</th>
                    <th scope="col">TOTAL</th>
                    <th scope="col">PAID</th>
                    <th scope="col">DELIVERED</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order._id} className="tableRow col-12">
                      <th scope="row">{order._id}</th>
                      <td>{order.createdAt.substring(0, 10)}</td>
                      <td>${order.totalPrice}</td>
                      <td>
                        {order.isPaid ? (
                          order.paidAt.substring(0, 10)
                        ) : (
                          <i
                            className="fas fa-times"
                            style={{ color: "red" }}
                          ></i>
                        )}
                      </td>
                      <td>
                        {order.isDelivered ? (
                          order.deliveredAt.substring(0, 10)
                        ) : (
                          <i
                            className="fas fa-times"
                            style={{ color: "red" }}
                          ></i>
                        )}
                      </td>
                      <td>
                        <button
                          className="btn btn-dark btn-sm"
                          onClick={() => {
                            navigate(`/order/${order._id}`);
                          }}
                        >
                          Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
