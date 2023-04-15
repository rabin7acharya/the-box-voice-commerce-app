import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message/Message";
import { PayPalButton } from "react-paypal-button-v2";
import Loader from "../../components/Loader/Loader";
import { getOrderDetails, payOrder } from "../../actions/orderActions";
import { ORDER_PAY_RESET } from "../../constants/orderConstants";
import "./OrderScreen.scss";

const OrderScreen = () => {
  const { id } = useParams();

  const [sdkReady, setSdkReady] = useState(false);

  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successPay } = orderPay;

  if (!loading) {
    //Calculate Prices
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };
    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
  }

  useEffect(() => {
    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get("/api/config/paypal");
      console.log("client id:" + clientId);
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    if (!order || successPay) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch(getOrderDetails(id));
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPayPalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [dispatch, id, order, successPay]);

  const successPaymentHandler = (paymentResult) => {
    console.log(paymentResult);
    dispatch(payOrder(id, paymentResult));
  };

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <div className="orderScreen container d-flex align-items-start flex-wrap">
      <div className="left col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 p-2">
        <div className="leftWrapper p-4 p-sm-4 p-md-5 p-lg-5 p-xl-5">
          <h1 className="headingText">Order {order._id}</h1>
          <div className="info mb-3 p-3">
            <strong>Name:</strong> {order.user.name}
          </div>
          <div className="info mb-3 p-3">
            <strong>Email:</strong>{" "}
            <a href={`mailto:${order.user.email}`} className="link">
              {order.user.email}
            </a>
          </div>
          <div className="info mb-3 p-3">
            <strong>Address:</strong> {order.shippingAddress.address},{" "}
            {order.shippingAddress.city}, {order.shippingAddress.postalCode},{" "}
            {order.shippingAddress.country}
            {
              //check if delivered
              order.isDelivered ? (
                <Message variant="success">
                  Delivered on {order.deliveredAt}
                </Message>
              ) : (
                <Message variant="danger">Not Delivered</Message>
              )
            }
          </div>

          <div className="info mb-3 p-3">
            <strong>Payment Method: </strong>
            {order.paymentMethod}
          </div>

          <div className="info mb-3 p-3">
            <strong className="mb-5">Payment Status: </strong>
            {order.isPaid ? (
              <Message variant="success">Paid on {order.paidAt}</Message>
            ) : (
              <Message variant="danger">Not Paid</Message>
            )}
          </div>

          <div className="info p-3">
            <strong>Order Items:</strong> <br />
            {order.orderItems.length === 0 ? (
              <Message>Order is empty</Message>
            ) : (
              <div className="cartItems">
                {order.orderItems.map((item, index) => (
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
              <strong>$ {order.itemsPrice}</strong>
            </div>
            <div className="d-flex justify-content-between">
              <p>Shipping</p>
              <strong>$ {order.shippingPrice}</strong>
            </div>
            <div className="d-flex justify-content-between">
              <p>Tax</p>
              <strong>$ {order.taxPrice}</strong>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <h5>Total</h5>
              <h5>$ {order.totalPrice}</h5>
            </div>
            {!order.isPaid && (
              <div className="mt-3">
                {loadingPay && <Loader />}
                {!sdkReady ? (
                  <Loader />
                ) : (
                  <PayPalButton
                    amount={order.totalPrice}
                    onSuccess={successPaymentHandler}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderScreen;
