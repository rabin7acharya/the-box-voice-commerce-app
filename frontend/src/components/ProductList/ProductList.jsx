import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import Message from "../Message/Message";
import Loader from "../Loader/Loader";
import "./ProductList.scss";
import { listProducts } from "../../actions/productActions";

const ProductList = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="productList">
      <p className="text-center headerText">Discover Our Latest Products</p>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div className="grid">
          {products.map((product) => (
            <Card product={product} key={product._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
