import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { addToCart, removeFromCart } from "../../actions/cartActions";
import Message from "../../components/Message/Message";
import "./CartScreen.scss";

const CartScreen = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  console.log(cartItems);
  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
      // window.location.reload();
    }
  }, [dispatch, id, qty]);

  const removeFromCartHandler = (id) => {
    // console.log("remove");
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    if (userInfo) {
      navigate("/shipping");
    } else {
      navigate("/login?redirect=/shipping");
    }
  };

  return (
    <div className="cartScreen container d-flex flex-wrap">
      <div className="left p-2 col-12 col-sm-12 col-md-12 col-lg-7 col-xl-8">
        <div className="cartItemList d-flex flex-column gap-3">
          {cartItems.length === 0 ? (
            <Message>
              Your cart is empty <Link to="/">Go Back</Link>
            </Message>
          ) : (
            cartItems.map((item) => (
              <div
                className="cartItem col-12 d-flex align-items-center justify-content-between flex-wrap"
                key={item.product}
              >
                <div className="infoLeft d-flex align-items-center justify-content-between col-8 col-sm-8 col-md-8 col-lg-7 col-xl-8">
                  <div className="infoLeftLeft d-flex align-items-center ">
                    <div className="image col-3 col-sm-3 col-md-3 col-lg-2 col-xl-2">
                      <img src={item.image1} className="col-12" alt="" />
                    </div>
                    <Link
                      to={`/product/${item.product}`}
                      className="name link overflow-hidden "
                      style={{
                        maxWidth: "9rem",
                      }}
                    >
                      <p className="title name m-0 p-0 text-truncate">
                        {item.title}
                      </p>
                    </Link>
                  </div>
                  <p className="price m-0 p-0">${item.price}</p>
                </div>
                <div className="infoRight d-flex align-items-center justify-content-evenly col-4 col-sm-4 col-md-4 col-lg-5 col-xl-4">
                  <div className="qty">
                    <label
                      htmlFor="qty"
                      className="d-none d-sm-none- d-md-block d-lg-block d-xl-block"
                    >
                      Quantity: &nbsp;
                    </label>
                    <select
                      name="qty"
                      id="qty"
                      defaultValue={item.qty}
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="remove d-flex align-items-center">
                    <button
                      className="removeButton btn"
                      onClick={() => {
                        removeFromCartHandler(item.product);
                      }}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="right p-2 col-12 col-sm-12 col-md-12 col-lg-5 col-xl-4">
        <div className="rightInfo">
          <p>
            Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
            items
          </p>
          <p className="subTotal">
            $
            {cartItems
              .reduce((acc, item) => acc + item.qty * item.price, 0)
              .toFixed(2)}
          </p>
          <button
            className="btn btn-dark"
            disabled={cartItems.length === 0}
            onClick={checkoutHandler}
          >
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
