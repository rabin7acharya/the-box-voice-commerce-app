import React from "react";
import { Link } from "react-router-dom";
import "./CheckoutSteps.scss";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <div className="checkoutSteps d-flex justify-content-center gap-3 mb-3">
      <div>
        {step1 ? (
          <Link to="/login" className="link badge bg-dark text-light">
            Sign In
          </Link>
        ) : (
          <Link className="disabled link badge bg-white">Sign In</Link>
        )}
      </div>

      <div>
        {step2 ? (
          <Link to="/shipping" className="link badge bg-dark text-light">
            Shipping
          </Link>
        ) : (
          <Link className="disabled link badge bg-white">Shipping</Link>
        )}
      </div>

      <div>
        {step3 ? (
          <Link to="/payment" className="link badge bg-dark text-light">
            Payment
          </Link>
        ) : (
          <Link className="disabled link badge bg-white">Payment</Link>
        )}
      </div>

      <div>
        {step4 ? (
          <Link to="/placeorder" className="link badge bg-dark text-light">
            Place Order
          </Link>
        ) : (
          <Link className="disabled link badge bg-white">Place Order</Link>
        )}
      </div>
    </div>
  );
};

export default CheckoutSteps;
