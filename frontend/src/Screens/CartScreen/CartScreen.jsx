import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import { addToCart, removeFromCart } from "../../actions/cartActions";
import Message from "../../components/Message/Message";
import "./CartScreen.scss";

const CartScreen = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, id, qty]);

  const removeFromCartHandler = (id) => {
    // console.log("remove");
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    // console.log("object");
    navigate("/login?redirect=shipping");
  };

  console.log(id);
  return (
    <div className="cartScreen container d-flex">
      <div className="left">
        <h1>Shopping Cart</h1>
        <div className="cartItemList">
          {cartItems.length === 0 ? (
            <Message>
              Your cart is empty <Link to="/">Go Back</Link>
            </Message>
          ) : (
            cartItems.map((item) => (
              <div className="cartItem d-flex align-items-center" key={item.id}>
                <div className="image col-2 col-sm-2 col-md-2 col-lg-1 col-xl-1">
                  <img src={item.image1} className="col-12" alt="" />
                </div>
                <Link
                  to={`/product/${item.product}`}
                  className="name col-4 col-sm-4 col-md-4 col-lg-3 col-xl-3"
                >
                  <h2 className="title m-0 p-0">{item.title}</h2>
                </Link>
                <h2 className="price m-0 p-0">${item.price}</h2>
                <div className="qty">
                  <label htmlFor="qty">Quantity:</label>
                  <select
                    name="qty"
                    id="qty"
                    value={item.qty}
                    onChange={(e) =>
                      dispatch(addToCart(item.product, Number(e.target.value)))
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
            ))
          )}
        </div>
      </div>
      <div className="right">
        <h2>
          Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items
        </h2>
        <p>
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
  );
};

export default CartScreen;
