import React from "react";
import "./Categories.scss";
// import { Link } from "react-router-dom";
//import images
import sale from "../../img/sales.png";
import shoes from "../../img/shoes.png";
import jackets from "../../img/jackets.png";
import men from "../../img/men.png";
import women from "../../img/women.png";
import newseason from "../../img/newseason.png";
import unisex from "../../img/unisex.png";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="category">
      <div className="top">
        <p className="header text-center">Our Product Categories</p>
      </div>
      <div className="bottom">
        <div className="category-wrapper col-6 col-sm-6 col-md-4 col col-lg-4 col-xl-4">
          <Link className="link" to="/category/shoes">
            <div
              className="box shoes"
              style={{ backgroundImage: `url(${shoes})` }}
            >
              <p className="header">Shoes</p>
            </div>
          </Link>
        </div>
        <div className="category-wrapper col-12 col-sm-12 col-md-4 col col-lg-4 col-xl-4">
          <Link to="/category/jackets" className="link">
            <div
              className="box jackets"
              style={{ backgroundImage: `url(${jackets})` }}
            >
              Jackets
            </div>
          </Link>
        </div>
        <div className="category-wrapper col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <Link to="/category/t-shirts" className="link">
            <div
              className="box male large"
              style={{ backgroundImage: `url(${men})` }}
            >
              T Shirts
            </div>
          </Link>
        </div>

        <div className="category-wrapper col-6 col-sm-6 col-md-5 col-lg-5 col-xl-5">
          <Link to="/category/wear" className="link">
            <div
              className="box new"
              style={{ backgroundImage: `url(${newseason})` }}
            >
              Wear
            </div>
          </Link>
        </div>
        <div className="category-wrapper col-6 col-sm-6 col-md-7 col-lg-7 col-xl-7">
          <Link to="/category/sweaters" className="link">
            <div
              className="box unisex"
              style={{ backgroundImage: `url(${unisex})` }}
            >
              Sweaters
            </div>
          </Link>
        </div>
      </div>

      {/* <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
        <div className="box">Row 1</div>
        <div className="box">Row 2</div>
      </div>
      <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
        <div className="box">Row 3</div>
      </div>
      <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
        <div className="outer">
          <div className="box">Col 1</div>
          <div className="box">Col 2</div>
        </div>
        <div className="box">Row</div>
      </div> */}
    </div>
  );
};

export default Categories;
