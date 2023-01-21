import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Rating from "../../components/Rating/Rating";
import "./ProductScreen.scss";

const ProductScreen = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${id}`);
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  //   console.log(id);
  return (
    <div className="productScreen container d-flex flex-wrap">
      <div className="wrapper pe-0 pe-sm-0 pe-md-3 pe-lg-3 pe-xl-3  col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6">
        <img src={product.img1} alt="" className="col-12" />
      </div>
      <div className="info ps-0 ps-sm-0 ps-md-3 ps-lg-3 ps-xl-3 pt-3 pt-sm-3 pt-md-0 pt-lg-0 pt-xl-0 col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6">
        <p className="title">{product.title} </p>
        <div className="tags">
          <p className="tag-text rounded">{product.category}</p>
          <p className="brand tag-text rounded">{product.brand}</p>
        </div>
        <Rating value={product.rating} count={product.numReviews} />
        <p className="description">{product.description}</p>
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
          <button
            className="addToCart btn btn-dark col-12 col-sm-12 col-md-8 col-lg-6 col-xl-6"
            disabled={product.countInStock === 0}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
