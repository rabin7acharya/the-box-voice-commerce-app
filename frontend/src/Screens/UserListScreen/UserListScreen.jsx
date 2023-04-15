import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message/Message";
import Loader from "../../components/Loader/Loader";
import { listUsers, deleteUser } from "../../actions/userActions";
import { useNavigate, Link } from "react-router-dom";
import "./UserListScreen.scss";

const UserListScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDelete = useSelector((state) => state.userDelete);
  const { success: successDelete } = userDelete;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers());
    } else {
      navigate("/login");
    }
  }, [dispatch, navigate, successDelete, userInfo]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteUser(id));
    }
  };

  return (
    <div className="userListScreen container p-4 p-sm-4 p-md-5 p-lg-5 p-xl-5">
      <h1 className="headingText">Users</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <table className="table table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ADMIN</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </td>
                <td>
                  {user.isAdmin ? (
                    <i className="fas fa-check"></i>
                  ) : (
                    <i className="fas fa-times"></i>
                  )}
                </td>
                <td className="d-flex gap-2 align-items-center">
                  <Link to={`/admin/user/${user._id}/edit`}>
                    <button className="btn btn-sm btn-outline-dark">
                      <i className="fas fa-edit"></i>
                    </button>
                  </Link>
                  <button
                    type="button"
                    className="btn btn-sm btn-dark"
                    onClick={() => deleteHandler(user._id)}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserListScreen;
