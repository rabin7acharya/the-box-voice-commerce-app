import React from "react"
import Categories from "../../components/Categories/Categories"
import ProductList from "../../components/ProductList/ProductList"

import Featured from "../../components/Featured/Featured"
import "./HomeScreen.scss"

const HomeScreen = () => {
  return (
    <div className='homeScreen container'>
      <Categories />
      {/* <ProductCarousel /> */}
      <Featured />
      <ProductList />
    </div>
  )
}

export default HomeScreen
