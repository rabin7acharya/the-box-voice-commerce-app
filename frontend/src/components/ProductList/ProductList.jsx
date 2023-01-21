import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card/Card";
// import products from "../../products";
import "./ProductList.scss";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="productList">
      <p className="text-center title">Latest Products</p>
      <div className="grid">
        {products.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
