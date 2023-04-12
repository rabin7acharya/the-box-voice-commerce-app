import React from "react";
import Categories from "../../components/Categories/Categories";
import ProductList from "../../components/ProductList/ProductList";

import "./HomeScreen.scss";
import Featured from "../../components/Featured/Featured";
import ProductCarousel from "../../components/Carousel/Carousel";

const HomeScreen = () => {
  return (
    <div className="homeScreen container">
      <Categories />
      {/* <ProductCarousel /> */}
      <Featured />
      <ProductList />
    </div>
  );
};

export default HomeScreen;
