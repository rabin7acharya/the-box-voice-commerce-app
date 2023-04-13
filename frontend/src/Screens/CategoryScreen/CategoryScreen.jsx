import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { listProducts } from "../../actions/productActions";
import Card from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";
import { normalize } from "../../useAlan";
import "./ProductList.scss";

const CategoryScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  const params = useParams();

  useEffect(() => {
    if (products) {
      const filteredProducts = products.filter((product) => {
        console.log(product);
        return normalize(product.category) === params.category;
      });
      setProductsList(filteredProducts);
    }
  }, [products, setProductsList, params.category]);

  console.log({
    products,
    productsList,
  });

  return (
    <div className="productList container">
      <p className="text-center headerText">
        Discover Our{" "}
        <span
          style={{
            textTransform: "capitalize",
          }}
        >
          {params.category}
        </span>
      </p>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div className="grid">
          {productsList.map((product) => (
            <Card product={product} key={product._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryScreen;
