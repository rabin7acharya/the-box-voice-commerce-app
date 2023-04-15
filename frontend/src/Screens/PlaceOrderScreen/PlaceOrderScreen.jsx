import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message/Message";
import FormContainer from "../../components/FormContainer/FormContainer";
import CheckoutSteps from "../../components/CheckoutSteps/CheckoutSteps";
import { createOrder } from "../../actions/orderActions";
import "./PlaceOrderScreen.scss";

const PlaceOrderScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  // Calculate prices

  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  cart.itemsPrice = cart.cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  cart.shippingPrice = cart.itemsPrice > 100 ? 0 : 100;

  cart.taxPrice = Number((0.15 * cart.itemsPrice).toFixed(2));

  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice)
  ).toFixed(2);

  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success, error } = orderCreate;

  useEffect(() => {
    if (success) {
      navigate(`/order/${order._id}`);
    }
    // eslint-disable-next-line
  }, [navigate, success]);

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    );
  };

  return (
    <div className="placeOrderScreen container d-flex align-items-start flex-wrap">
      <div className="left col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 p-2">
        <div className="leftWrapper p-4 p-sm-4 p-md-5 p-lg-5 p-xl-5">
          <CheckoutSteps step1 step2 step3 step4 />
          <h1 className="headingText">Shipping Details</h1>
          <div className="info mb-3 p-3">
            <strong>Address:</strong> <br /> {cart.shippingAddress.address},{" "}
            {cart.shippingAddress.city}, {cart.shippingAddress.postalCode},{" "}
            {cart.shippingAddress.country}
          </div>

          <div className="info mb-3 p-3">
            <strong>Payment Method:</strong> <br /> {cart.paymentMethod}
          </div>

          <div className="info p-3">
            <strong>Order Items:</strong> <br />
            {cart.cartItems.length === 0 ? (
              <Message>Your cart is empty</Message>
            ) : (
              <div className="cartItems">
                {cart.cartItems.map((item, index) => (
                  <div
                    className="cartItem d-flex align-items-center justify-content-between my-2"
                    key={index}
                  >
                    <div className="leftInfo d-flex align-items-center justify-content-between gap-3">
                      <div className="cartItem__image col-1">
                        <img src={item.image1} className="col-12" alt="" />
                      </div>
                      <Link
                        to={`/product/${item.product}`}
                        className="name link overflow-hidden "
                        style={{
                          maxWidth: "5rem",
                        }}
                      >
                        <p className="title name m-0 p-0 text-truncate">
                          {item.title}
                        </p>
                      </Link>
                    </div>
                    <div className="cartItem__name"></div>
                    <div className="cartItem__qty">
                      {item.qty} x ${item.price} = ${item.qty * item.price}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="right col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 p-2">
        <div className="rightWrapper p-4 p-sm-4 p-md-5 p-lg-5 p-xl-5">
          <h1 className="headingText">Order Summary</h1>
          <div className="summaryData">
            <div className="d-flex justify-content-between">
              <p>Items</p>
              <strong>$ {cart.itemsPrice}</strong>
            </div>
            <div className="d-flex justify-content-between">
              <p>Shipping</p>
              <strong>$ {cart.shippingPrice}</strong>
            </div>
            <div className="d-flex justify-content-between">
              <p>Tax</p>
              <strong>$ {cart.taxPrice}</strong>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <h5>Total</h5>
              <h5>$ {cart.totalPrice}</h5>
            </div>
            {error && <Message variant="danger">{error}</Message>}
            <div className="mt-3">
              <button
                type="button"
                className="btn btn-dark col-12"
                disabled={cart.cartItems === 0}
                onClick={placeOrderHandler}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrderScreen;
