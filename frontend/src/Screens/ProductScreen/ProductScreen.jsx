import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Rating from "../../components/Rating/Rating";
import "./ProductScreen.scss";
import { listProductDetails } from "../../actions/productActions";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";

const ProductScreen = () => {
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [dispatch, id]);

  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`);
  };

  // console.log(id);
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div className="productScreen container d-flex flex-wrap">
          <div className="wrapper pe-0 pe-sm-0 pe-md-3 pe-lg-3 pe-xl-3  col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6">
            <img src={product.image1} alt="" className="image col-12" />
          </div>
          <div className="info ps-0 ps-sm-0 ps-md-3 ps-lg-3 ps-xl-3 pt-3 pt-sm-3 pt-md-0 pt-lg-0 pt-xl-0 col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6">
            <p className="title">{product.title} </p>
            <div className="tags">
              <p className="badge text-bg-dark ">{product.category}</p>
              <p className="badge text-bg-dark">{product.brand}</p>
            </div>
            <Rating value={product.rating} count={product.numReviews} />
            <p className="paragraphText mt-3">{product.description}</p>
            <p className="stock">
              Status:{" "}
              <strong>
                {product.countInStock > 0 ? (
                  "Available"
                ) : (
                  <span className="text-danger">Out of Stock</span>
                )}
              </strong>
            </p>
            <p className="price">
              Price: <strong>${product.price}</strong>
            </p>
            <div className="actions">
              {product.countInStock > 0 && (
                <div className="qty">
                  <label htmlFor="qty">Quantity:</label>
                  <select
                    name="qty"
                    id="qty"
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                  >
                    {[...Array(product.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              <button
                onClick={addToCartHandler}
                className="addToCart btn btn-dark col-12 col-sm-12 col-md-8 col-lg-6 col-xl-6"
                disabled={product.countInStock === 0}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductScreen;
