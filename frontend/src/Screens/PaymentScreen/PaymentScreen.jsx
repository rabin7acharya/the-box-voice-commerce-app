import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../../components/FormContainer/FormContainer";
import { saveShippingAddress } from "../../actions/cartActions";
import CheckoutSteps from "../../components/CheckoutSteps/CheckoutSteps";
import { savePaymentMethod } from "../../actions/cartActions";
import "./PaymentScreen.scss";

const PaymentScreen = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress.address) {
    navigate("/shipping");
  }

  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate("/placeorder");
  };

  return (
    <div className="paymentScreen">
      <div className="container">
        <FormContainer>
          <CheckoutSteps step1 step2 step3 />
          <h1 className="headingText">Payment Method </h1>
          <form className="form" onSubmit={submitHandler}>
            <div className="mb-3">
              <div className="form-check">
                <input
                  type="radio"
                  id="PayPal"
                  name="paymentMethod"
                  value="PayPal"
                  className="form-check-input"
                  checked
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <label htmlFor="PayPal" className="form-check-label">
                  PayPal or Credit Card
                </label>
              </div>
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-dark">
                Continue
              </button>
            </div>
          </form>
        </FormContainer>
      </div>
    </div>
  );
};

export default PaymentScreen;
