import React from "react";
import "./Featured.scss";
//import megaphone icon
import megaphone from "../../img/megaphone 2.svg";
import specialEdition from "../../img/special edition.svg";
import exchange from "../../img/exchange.svg";

const Featured = () => {
  return (
    <div className="featuredSection row">
      <p className="header text-center">Why Buy From Box?</p>
      <div className="boxes d-flex flex-wrap justify-content-center">
        <div className="boxOuter p-2 col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
          <div className="box d-flex justify-content-between">
            <div className="left pe-4">
              <p className="subHeader">Free Shipping</p>
              <p className="paragraphText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tincidunt, nisl eget ultricies tincidunt, nisl elit lacinia
              </p>
              <button className="btn p-0 ">Learn More</button>
            </div>
            <div className="right">
              <img src={megaphone} alt="megaphone" />
            </div>
          </div>
        </div>
        <div className="boxOuter p-2 col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
          <div className="box d-flex justify-content-between">
            <div className="left pe-4">
              <p className="subHeader">Exchange Service</p>
              <p className="paragraphText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tincidunt, nisl eget ultricies tincidunt, nisl elit lacinia
              </p>
              <button className="btn p-0 ">Learn More</button>
            </div>
            <div className="right">
              <img src={exchange} alt="megaphone" />
            </div>
          </div>
        </div>
        <div className="boxOuter p-2 col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
          <div className="box d-flex justify-content-between">
            <div className="left pe-4">
              <p className="subHeader">Limited Edition</p>
              <p className="paragraphText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tincidunt, nisl eget ultricies tincidunt, nisl elit lacinia
              </p>
              <button className="btn p-0 ">Learn More</button>
            </div>
            <div className="right">
              <img src={specialEdition} alt="megaphone" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
