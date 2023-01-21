import React from "react";
import Categories from "../../components/Categories/Categories";
import ProductList from "../../components/ProductList/ProductList";

import "./HomeScreen.scss";

const HomeScreen = () => {
  return (
    <div className="homeScreen container">
      <Categories />
      <ProductList />
    </div>
  );
};

export default HomeScreen;
