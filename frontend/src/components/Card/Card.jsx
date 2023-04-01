import React from "react";
import Rating from "../Rating/Rating";
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  return (
    <div className="edge p-2 col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
      <Link className="link" to={`/product/${product._id}`}>
        <div className="itemCard">
          <div className="images">
            <img src={product.image1} alt="" className="mainImg" />
          </div>

          <div className="info">
            <div className="info-top">
              <p className="title m-0 p-0">{product.title}</p>
              <p className="price m-0 p-0">${product.price}</p>
            </div>
            <div className="info-bottom">
              <Rating value={product.rating} count={product.numReviews} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
